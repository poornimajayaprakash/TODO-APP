let username = document.getElementById("loginName");
let pwd = document.getElementById("loginPassword")
var error= document.getElementById("error");
var checkbx= document.getElementsByClassName("check_boxes");


function validate(){
    if(username.value.trim()== ""){
        alert("Username cannot be empty");
        username.style.border="2px solid red";
        return false;

    }
    else if(pwd.value.trim()==""){
           alert(" password cannot be Empty");
           pwd.style.border="2px solid red";
           return false;
    }
    else if(pwd.value.length<3){
        alert("Password is too short");
        pwd.style.border="2px solid red";
        return false;
    }
    else if(pwd.value!="1234"){
        alert("Password is Incorrect");
        pwd.style.border="2px solid red";
        return false;
    }
    else if(username.value!="admin"){
        alert("Incorrect username");
        username.style.border="2px solid red";
        return false;
    }
    else{
        return true;
    }
}


function check(){
    var promise = new Promise(function(resolve,reject){
        count = 0;
        val = false;
        
        for (var i=0; i<checkbx.length; i++) {
        if (checkbx[i].checked === true){
            count++;
            if(count ===5){
                val = true;
                
            }
        }
        }
        if(val){
            resolve("Congrats! 5 Tasks have been Successfully Completed");
        }
    });

    promise.then(function(s){
        alert(s);
    })
}