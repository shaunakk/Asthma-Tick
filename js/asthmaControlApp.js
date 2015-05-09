$(document).ready(
    function() {
        Parse.initialize("ashZHHCyg2eLkkPdnz9iH0Uf5uUl4Vw2IrAT8uBm", "ehtyn0uEjRXQOGW7pWqsMXOTG7CqfeQui3C7gAr2")
        firstTime()
        FastClick.attach(document.body);
        $("#tourAgain").click(
            function() {
                tourAgainFunction()
            }
        )

        $("#exportCSV").click(
            prepareEmail
        )

        $("#historyButton").click(
            function() {
                sort()
                makeTable()
            }
        )
        $("#tableBody").on(
            "click", ".deleteObjectButton", (
                function() {
                    var elementDiv = this
                    deletePuff(elementDiv)
                }
            )
        )
        $("#newPuff").click(
            function() {
                storeHistoryInLocalStorage()
                sort()
                showMessage("Puff Added")
            }
        )
        $("#numberPuffsSelect select").change(
            (
                function() {
                    numberPuffs()
                }
            )
        )
        $("#medicineSelect select").change(

            function() {
                medicineSelectChange()
            }

        )
        $("#deleteHistory").click(
            function() {
                deleteAllPuffs()
            }
        )
        $("#createAccount").click(
            function() {
                createAccount()
            }
        )
        $("#loginButton").click(
            function() {
                if ($("#loginButton").html() == "Log Out") {

                } else {
                    loginButton()


                    $("#username, #password").val("")
                }
            }
        )
        $("#loginButtonPopup").click(
            function() {
                Parse.User.become(Parse.Session.sessionToken).then(function(user) {
                    // The current user is now set to user.
                }, function(error) {
                    // The token could not be validated.
                });
                if ($("#loginButton").html() == "Log Out") {
                    Parse.User.logOut()
                    loginText()
                    $("#login").hide()
                } else {
                    $("#login").show()
                }
            });
    }
)