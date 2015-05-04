function prepareEmail() {
    if (window.puffArray) {
        var eachVar = window.puffArray
    } 
    else {
        if (localStorage.history) {
            var eachVar = JSON.parse(localStorage.history)
        }
        else{
            alert("There is no history to be emailed!")
            return
        }
    }

    csvString = "<b>Date and Time   |   Puffs Taken   |   Medicine </b>" + '<br>'
    $.each(
        eachVar,
        function(i, item) {
            csvString = csvString.concat(item.dateTime + "<b>   |   </b>" + item.numberPuffs + "<b>   |   </b>" + item.medicine + '<br>')
        }
    )
    sendEmail()
}

function sendEmail() {
    cordova.plugins.email.isAvailable(
        function(isAvailable) {
            if (isAvailable == true) {
                cordova.plugins.email.open({
                    subject: 'MyAsthma History',
                    body: window.csvString,
                    isHtml: true
                })
            } else {
                alert("Error, Email does not work")
            }
        }
    )
}