$(document).ready(
    function() {
        document.addEventListener("deviceready", onDeviceReady, false);
        document.addEventListener("resume", onpause, false);
        document.addEventListener("online", phoneOnline, false);
    }
)

function onpause() {
    dateToday()
}

function onDeviceReady() {
    devicePlatform = device.platform;
    if (devicePlatform == "Android") {
        android()
    } else {
        ios()
    }
}

function ios() {
    $(".header").css("margin-top", "20pt")
    $("#exportCSV").hide()
}

function android() {

}

function phoneOnline() {
    if (localStorage.unsyncedDataStorage) {
        var unsyncedData = JSON.parse(localStorage.unsyncedDataStarage)
        pushUnsynced(unsyncedData)
        localStorage.removeItem('unsyncedDataStorage')
    } 
}
function pushUnsynced(unsyncedDataPush) {
    var ServerPuffObject = Parse.Object.extend("ServerPuffObject");
    $.each(
        unsyncedDataPush,
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
                    alert('New object created with objectId: ' + serverPuffObject.id);
                },
                error: function(serverPuffObject, error) {
                    // Execute any logic that should take place if the save fails.
                    // error is a Parse.Error with an error code and message.
                    alert('Failed to create new object, with error code: ' + error.message);
                }
            });
        }
    )



}