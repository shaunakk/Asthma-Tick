$(document).ready(
    function() {
        medicineSelect()
    }
)

function medicineSelect() {
    otherMedicineArray = []
    $("#typeOfMedicine").selectmenu("refresh")
    if (localStorage.otherMedicine) {
        otherMedicineArray = JSON.parse(localStorage.otherMedicine)
    }
    $.each(
        otherMedicineArray,
        function(i, item) {
            $('#select-native-1').prepend('<option value=' + "'" + item.medicineName + "' " + '>' + item.medicineName + '</option>')
        }
    )

}

function medicineSelectChange() {
    if ($("#medicineSelect select option:selected").val() == "Other") {
        otherPressed()
    }
    var medicine = $("#medicineSelect select option:selected").val()
    if (typeof(Storage) != undefined) {
        localStorage.typeOfMedicine = medicine
    } else {
        alert("ERROR your browser does not support LocalStorage")
    }
}

function otherPressed() {
    var otherPrompt = prompt("Type Medicine:")
    localStorage.typeOfMedicine = otherPrompt
    $("#select-native-1").val(otherPrompt).trigger("change");
    window.otherMedicineArray.push(new otherMedicine(otherPrompt))
    localStorage.otherMedicine = JSON.stringify(window.otherMedicineArray)
    medicineSelect()
    $("#typeOfMedicine").selectmenu("refresh")
}
var otherMedicine = function(medicineName) {
    this.medicineName = medicineName
}