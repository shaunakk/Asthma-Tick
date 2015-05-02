function numberPuffs() {
    var puffsAtTime = $("#numberPuffsSelect select option:selected").val()
    if (typeof(Storage) != undefined) {
        localStorage.puffsAtTime = puffsAtTime
        $("#newPuff").html("<br>Add " + $("#select-native-2").val() + " puff" + pluralOrSingular($("#select-native-2").val()) + " of " + $("#select-native-1").val() + "<br><img src='img/xhdpi.png'/><br>" + $("#date").val() + " | " + $("#time").val())

    } else {
        alert("ERROR your browser does not support LocalStorage")
    }
}