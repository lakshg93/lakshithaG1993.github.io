$("#login").submit(function (e) {
    console.log("submit");
    e.preventDefault();
    if($("#username").val() != ""){
        if($("#username").val() == "ABCD" && $("#password").val() == "1234"){
            window.location.replace("mainPage.html");
        }
    }
    else{
        window.location.replace("index.html");
    }
})