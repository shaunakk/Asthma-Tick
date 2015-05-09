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
            alert("account created")
        },
        error: function(user, error) {
            // Show the error message somewhere and let the user try again.
            alert("Error: " + error.code + " " + error.message);
        }
    });
    initialUpload()
    logoutText()
    Parse.User.logIn(username, password, {
        success: function(user) {
            alert("logged in")
        },
        error: function(user, error) {
            // The login failed. Check error to see why.
            alert("Error: " + error.code + " " + error.message);
        }
    });
    Parse.User.become(Parse.Session.sessionToken).then(function(user) {
        // The current user is now set to user.
    }, function(error) {
        // The token could not be validated.
    });

}

function loginButton() {
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
    if (Parse.User.current()) {
        alert("current user exist")
        alert(Parse.User.current().username)
    } else {
        alert("current user does not exist")
    }
    Parse.User.become(Parse.Session.sessionToken).then(function(user) {
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
    $("#loginP").html(" You are currently logged in as " + Parse.User.current().get("username"))
    $("#loginButton, #loginButtonPopup").html("Log Out")
}