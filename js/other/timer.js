window.setInterval(
    function() {
        $("#newPuff").html("<br>Add " + $("#select-native-2").val() + " puff" + pluralOrSingular($("#select-native-2").val()) + " of " + $("#select-native-1").val() + "<br><img src='img/xhdpi.png'/><br>" + $("#date").val() + " at " + $("#time").val())
        phoneOnline()
    },
    500
)
function pluralOrSingular(puffsAtTime) {
    if (puffsAtTime != 1) {
        return "s"
    } else {
        return ""
    }
}