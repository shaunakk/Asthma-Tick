$(document).ready(
    function() {
        dateToday()  
    }
)
function dateToday() {
    var d = new Date()
    var today = (d.getMonth() + 1) + "/" + d.getDate().toString() + "/" + d.getFullYear().toString()
    var rightNow = formatTime(d.getHours(), d.getMinutes())
    $("#time").val(rightNow)
    $("#date").val(today)
}
function formatTime(hours, minutes) {
    var amPm
    if (hours == 12) {
        hours = 12
        amPm = "pm"
    } else if (hours > 12) {
        var amPm = "PM"
        hours = hours - 12
    } else {
        var amPm = "AM"
    }
    if (minutes < 10) {
        minutes = "0" + minutes.toString()
    }
    return " " + hours + ":" + minutes + " " + amPm
}