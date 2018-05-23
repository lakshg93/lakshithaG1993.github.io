function LoginAuthentication() {
    debugger;
    if($("#username" ).val()!="") {
        var userName = $("#username").val();
        var password = $("#password").val();
        if(userName == "ABCD" && password == "1234"){
            window.location.replace("https://www.google.com");
        } else {
            //window.location.replace("index.html");
        }
    }
    else {
        window.location.replace("index.html");
    }
}