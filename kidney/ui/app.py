from flask import Flask,render_template,request,make_response,jsonify,session,redirect,flash
app = Flask(__name__)
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'
import pickle
loaded_model = pickle.load(open("model.pkl", 'rb'))


#-----------------------------------------------DATABASE-------------------------------------------------------------------
import sqlite3
conn = sqlite3.connect('mysqlite.db',check_same_thread=False)
c = conn.cursor()
c.execute('''CREATE TABLE IF NOT EXISTS register
             (username text,email text,password text)''')			
conn.commit()
conn.close()


#----------------------------------------------------------------------------------------------------------------------------




@app.route('/',methods=['GET','POST'])
def Login():
    if request.method == 'POST':
        data=request.get_json()
        if data['which_condiction']=="signup":
            print("signup")
            conn = sqlite3.connect('mysqlite.db',check_same_thread=False)
            c = conn.cursor()
            c.execute("SELECT * FROM register")
            for query_result in c.fetchall():
                if data['username'] in query_result:
                    return "exists"
                else:  
                    pass   
            password = bytes(data['password'], 'utf-8')
            password = hashing(password)
            data['password']=password
            c.execute("""INSERT INTO register (username,email,password) values (?,?,?)""",(data['username'],data['email'],data['password']))
            conn.commit()
            return "success"
        elif data['which_condiction']=="login":
            print("login")
            conn = sqlite3.connect('mysqlite.db',check_same_thread=False)
            c = conn.cursor()
            c.execute("SELECT * FROM register WHERE username=?", ( data['username'],))
            result = c.fetchall()
            if len(result)==0:     
                return "no"
            for i in result:
                if verify_pass(i[2],data['password']):
                    return "success"
                else:
                    return "error"

    return render_template("login.html")


@app.route('/home',methods=['GET','POST'])
def Home():
    if request.method == 'POST':
        data=request.get_json()
        a=int(data['age'])
        b=int(data['blood_pressure'])
        c=int(data['albumin'])
        d=int(data['blood_glucose_random'])
        e=float(data['blood_urea'])
        f=float(data['serum_creatinine'])
        g=float(data['potassium'])
        h=float(data['haemoglobin'])
        i=int(data['packed_cell_volume'])
        j=float(data['red_blood_cell_count'])
        k=int(data['hypertension'])
        l=int(data['diabetes_mellitus'])
        m=int(data['appetite'])
        n=int(data['aanemia'])
  

        new_val=[a,b,c,d,e,f,g,h,i,j,k,l,m,n]
        loaded_model = pickle.load(open("model.pkl", 'rb'))
        pred=loaded_model.predict([new_val])
        if pred[0]==0:
            return "normal"
        elif pred[0]==1:
            if (a<30):
                if k==0 or l==0 or m==0 or n==0:
                    return "mild"             
            elif (30 <= a <= 100):
                if(k==0 and l==0 and m==0 and n==0):
                    return "moderate"
                else:
                    return "severe"
            
            

       

    return render_template("home.html")





def hashing(password):
    pw_hash = bcrypt.generate_password_hash(password)
    return pw_hash
def verify_pass(password,password1):
    return bcrypt.check_password_hash(password,password1)


if __name__=="__main__":
    app.run()
    app.run(debug=True)