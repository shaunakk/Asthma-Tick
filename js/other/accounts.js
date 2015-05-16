function createAccount() {
    var username = $("#username").val()
    var password = $("#password").val()
    localStorage.password = password
    var user = new Parse.User();
    user.set("username", username);
    user.set("password", password);
    user.signUp(null, {
        success: function(user) {
        },
        error: function(user, error) {
            // Show the error message somewhere and let the user try again.
        }
    });
    initialUpload()
    logoutText()
    Parse.User.logIn(username, password, {
        success: function(user) {
        },
        error: function(user, error) {
            // The login failed. Check error to see why.
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
    var password = $("#password").val()
    localStorage.password = password
    Parse.User.logIn(username, password, {
        success: function(user) {
        },
        error: function(user, error) {
            // The login failed. Check error to see why.
        }
    });
    if (Parse.User.current()) {
    } else {
    }
    Parse.User.become(Parse.Session.sessionToken).then(function(user) {
        // The current user is now set to user.
    }, function(error) {
        // The token could not be validated.
    });
    logoutText()
}

function refreshButton() {
    if (Parse.User.current() == null) {
        alert("You are not logged in!")
    } else {
        var ServerPuffObject = Parse.Object.extend("ServerPuffObject");
        var query = new Parse.Query(ServerPuffObject);
        query.equalTo("user", Parse.User.current());
        query.find({
            success: function(userPuffs) {
                localStorage.history = JSON.stringify(userPuffs)
                window.puffArray = JSON.parse(localStorage.history);
                makeTable()
            }
        });
    }
}

function loginText() {
    $("#loginP").html("You are currently not logged in. Logging in syncs your history with other devices that you are logged in on.")
    $("#loginButton, #loginButtonPopup").html("Log In")
}

function logoutText() {
    $("#loginP").html(" You are currently logged in as " + Parse.User.current().get("username"))
    $("#loginButton, #loginButtonPopup").html("Log Out")
}
