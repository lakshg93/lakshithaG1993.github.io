$("#login").submit(function (e) {
    console.log("submit");
    e.preventDefault();
    if($("#username").val() != ""){
        if($("#username").val() == "UserIIHL" && $("#password").val() == "pwIIHL"){
            window.location.replace("mainPage.html");
        }
    }
    else{
        window.location.replace("index.html");
    }
})