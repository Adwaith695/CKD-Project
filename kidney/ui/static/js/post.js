function SubmitData(data,URL,path)
{
    console.log(data)
    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
    var Url = URL;
    xmlhttp.open("POST", Url);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.setRequestHeader("Cache-Control", "no-cache");
    xmlhttp.send(JSON.stringify(data));
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          let res = this.response;
          func(res,path);   
        };
      }
}


const func = (res,path) => {
    if(res=="success"){
     window.location=(path); 
    }

    else if(res=="null"){
    alert("please enter all fields");
}
else if(res=="exists"){
  alert("user already exists");
}
else if(res=="error"){
  alert("invalid ");
}
else if(res=="no"){
  alert("user not found");
}
else if(res=="normal"){
  console.log("normal")
  alert("CKD not detected")
  }
  else if(res=="mild"){
    alert("CKD detected Mild case")
  }
  else if(res=="moderate"){
    alert("CKD detected Moderate case")
  }
  else if(res=="severe"){
    alert("CKD detected Severe case")
  }
}