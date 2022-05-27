function login(){
    var login_name=document.getElementById("inputbox").value;
    localStorage.setItem("username",login_name);
    window.location="kwitter_room.html";
}