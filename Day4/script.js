function validate(){
    let username = document.getElementById("un").value;
    
    let pass = document.getElementById("pass").value;
    let p1 = document.getElementById("result")
     
    if(username.length > 10 && pass.length > 10  ){
        return true
    }
    return false
}