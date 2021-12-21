function changebox() {
    var login = document.getElementById("box1");
    var signup = document.getElementById("box2");
    if (login.style.display === "none") {
        login.style.display = "block";
        document.getElementById("username");
        document.getElementById("password");
        signup.style.display="none";
    }else{
    	login.style.display="none"
    	signup.style.display="block";
    	signup.style.visibility="visible";
    	document.getElementById("username");
    	document.getElementById("email2");
    	document.getElementById("password2");
    }
}