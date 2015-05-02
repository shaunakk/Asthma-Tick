$(document).ready(
    function() {
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
    }
)
