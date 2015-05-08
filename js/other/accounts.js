function createAccount() {
    alert("createAccount")
    var username = $("#username").val()
    alert(username)
    var password = $("#password").val()
    alert(password)
    var user = new Parse.User();
    user.set("username", username);
    user.set("password", password);
    user.signUp(null, {
        success: function(user) {

        },
        error: function(user, error) {
            // Show the error message somewhere and let the user try again.
            alert("Error: " + error.code + " " + error.message);
        }
    });
    initialUpload()
    logoutText()
}

function loginButton() {
    alert("login")
    var username = $("#username").val()
    alert(username)
    var password = $("#password").val()
    alert(password)
    Parse.User.logIn(username, password, {
        success: function(user) {
            alert("logged in")
        },
        error: function(user, error) {
            // The login failed. Check error to see why.
            alert("Error: " + error.code + " " + error.message);
        }
    });
    Parse.User.become(Parse.User.current()._sessionToken).then(function(user) {
        // The current user is now set to user.
    }, function(error) {
        // The token could not be validated.
    });
    logoutText()
}

function loginText() {
    $("#loginP").html("You are currently not logged in. Logging in syncs your history with other devices that you are logged in on.")
    $("#loginButton, #loginButtonPopup").html("Log In")
}

function logoutText() {
    $("#loginP").html(" You are currently logged in as " + "")
    $("#loginButton, #loginButtonPopup").html("Log Out")
}