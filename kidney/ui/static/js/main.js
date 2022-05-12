function Signup(URL){
    let username=document.getElementById("username").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let re_password=document.getElementById("re_password").value;
    let which_condiction="signup";

    let data={
        username:username,
        email:email,
        password:password,
        re_password:re_password,
        which_condiction:which_condiction
        
    }


    if(username=="" && email=="" && password=="" && re_password ==""){
        alert("please enter all fields")
        }
else{
    if(password==re_password){
        SubmitData(data,URL,path='/')
    }
    else{
        alert("password dosent match")
    }
}
    }



function Login(URL){
    let username=document.getElementById("login_username").value;
    let password=document.getElementById("login_password").value;
    let which_condiction="login";

    let data={
        username:username,
        password:password,
        which_condiction:which_condiction
}
if(username=="" &&  password==""){
    alert("please enter all fields")
}
else{
    SubmitData(data,URL,path='/home')

}

}



function dataSend(URL){
    let age = document.getElementById("age").value;
    let blood_pressure = document.getElementById("blood_pressure").value;
    let albumin = document.getElementById("albumin").value;
    let blood_glucose_random = document.getElementById("blood_glucose_random").value;
    let blood_urea = document.getElementById("blood_urea").value;
    let serum_creatinine = document.getElementById("serum_creatinine").value;
let potassium = document.getElementById("potassium").value;
let haemoglobin = document.getElementById("haemoglobin").value;
let packed_cell_volume = document.getElementById("packed_cell_volume").value;
let red_blood_cell_count = document.getElementById("red_blood_cell_count").value;
let hypertension = document.getElementById("hypertension").value;
let diabetes_mellitus = document.getElementById("diabetes_mellitus").value;
let appetite = document.getElementById("appetite").value;
let aanemia = document.getElementById("aanemia").value;
console.log(age,blood_pressure,albumin,blood_glucose_random,blood_urea,serum_creatinine,potassium,haemoglobin,packed_cell_volume,red_blood_cell_count,hypertension,diabetes_mellitus,appetite,aanemia);


let data={
    age:age,
    blood_pressure:blood_pressure,
    albumin:albumin,
    blood_glucose_random:blood_glucose_random,
    blood_urea:blood_urea,
    serum_creatinine:serum_creatinine,
    potassium:potassium,
    haemoglobin:haemoglobin,
    packed_cell_volume:packed_cell_volume,
    red_blood_cell_count:red_blood_cell_count,
    hypertension:hypertension,
    diabetes_mellitus:diabetes_mellitus,
    appetite:appetite,
    aanemia:aanemia


}

SubmitData(data,URL='/home',path='/home')

}



