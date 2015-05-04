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
                loginButton()
            }
        )
    }
)