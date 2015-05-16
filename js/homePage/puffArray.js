$(document).ready(function() {
    makePuffArray()
});

function makePuffArray() {
    if (localStorage.history) {
        if (window.puffArray) {
            window.puffArray = JSON.parse(localStorage.history)
        } else {
            puffArray = JSON.parse(localStorage.history)
        }
    } else {
        puffArray = []
    }
    sort()
    //parsePlugin()
}

function storeHistoryInLocalStorage() {
    var numberPuffs = $("#select-native-2").val()
    var medicine = $("#select-native-1").val()
    var notes = $("#notes").val()
    var d = new Date()
    if (typeof(Storage) != undefined) {
        window.puffArray.push(new Puff(numberPuffs, formatDate(), medicine, mils().toString(), notes, d.getTime().toString()))
        localStorage.history = JSON.stringify(window.puffArray)
        if (window.navigator.onLine || JSON.parse(Parse.User.current())!="null") {
            var ServerPuffObject = Parse.Object.extend("ServerPuffObject");
            var serverPuffObject = new ServerPuffObject();
            serverPuffObject.set("numberPuffs", numberPuffs)
            serverPuffObject.set("dateTime", formatDate())
            serverPuffObject.set("medicine", medicine)
            serverPuffObject.set("mils", mils().toString())
            serverPuffObject.set("notes", notes)
            serverPuffObject.set("when", d.getTime().toString(_))
            serverPuffObject.set("user", Parse.User.current())
            serverPuffObject.save(null, {
                success: function(serverPuffObject) {
                    // Execute any logic that should take place after the object is saved.
                },
                error: function(serverPuffObject, error) {
                    // Execute any logic that should take place if the save fails.
                    // error is a Parse.Error with an error code and message.
                }
            });
        } else {
            if (localStorage.unsyncedDataStorage) {
                var unsyncedData = JSON.parse(localStorage.unsyncedDataStorage)
                unsyncedData.push(new Puff(numberPuffs, formatDate(), medicine, mils().toString(), notes, d.getTime().toString()))
                localStorage.unsyncedDataStorage = JSON.stringify(unsyncedData)
            }
            else
            {
                var unsyncedData = []
                unsyncedData.push(new Puff(numberPuffs, formatDate(), medicine, mils().toString(), notes, d.getTime().toString()))
                localStorage.unsyncedDataStorage=JSON.stringify(unsyncedData)
            }
        }


        if (window.devicePlatform == "Android") {
            var media = new Media("/android_asset/www/audio/inhalerSound.mp3")
            media.play()
        } else if (window.devicePlatform == "iOS") {
            var media = new Media('audio/inhalerSound.wav')
            media.play()
        }

    } else {
        alert("ERROR:Your browser does not support LocalStorage")
    }
}
var Puff = function(numberPuffs, dateTime, medicine, mils, notes, when) {
    this.numberPuffs = numberPuffs
    this.dateTime = dateTime
    this.medicine = medicine
    this.mils = mils
    this.notes = notes
    this.when = when
}

function mils() {
    var d = new Date()
    var dateTime = $("#date").val() + $("#time").val()
    dateTime = new Date(moment(dateTime, ["MM-DD-YYYY hh:mm:ss"]))
    var dateTimeMils = d.getTime(dateTime)
    return dateTimeMils
}

function formatDate() {
    var dateTime = $("#date").val() + " at " + $("#time").val()
    return dateTime
}

function sort() {
    window.puffArray.sort(
        function(obj1, obj2) {
            return parseInt(obj1.mils) - parseInt(obj2.mils)
        }
    )
}

function initialUpload() {
    var ServerPuffObject = Parse.Object.extend("ServerPuffObject");
    $.each(
        window.puffArray,
        function(i, item) {
            var serverPuffObject = new ServerPuffObject();
            serverPuffObject.set("numberPuffs", item.numberPuffs)
            serverPuffObject.set("dateTime", item.dateTime)
            serverPuffObject.set("medicine", item.medicine)
            serverPuffObject.set("mils", item.mils)
            serverPuffObject.set("notes", item.notes)
            serverPuffObject.set("when", item.when)
            serverPuffObject.set("user", Parse.User.current())
            serverPuffObject.save(null, {
                success: function(serverPuffObject) {
                    // Execute any logic that should take place after the object is saved.
                },
                error: function(serverPuffObject, error) {
                    // Execute any logic that should take place if the save fails.
                    // error is a Parse.Error with an error code and message.
                }
            });
        }
    )



}

function login() {

}