$(document).ready(
    function() {
        document.addEventListener("deviceready", onDeviceReady, false);
        document.addEventListener("resume", onpause, false);
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
}

function android() {

}