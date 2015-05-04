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
}

function loginButton() {
    alert("login")
    var username = $("#username").val()
    alert(username)
    var password = $("#password").val()
    alert(password)
    Parse.User.logIn("myname", "mypass", {
        success: function(user) {
            // Do stuff after successful login.
        },
        error: function(user, error) {
            // The login failed. Check error to see why.
        }
    });
}