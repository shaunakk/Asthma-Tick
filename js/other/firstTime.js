function firstTime() {
    if (typeof(Storage) != undefined) {

        if (localStorage.puffsAtTime != undefined && localStorage.typeOfMedicine != undefined) {

            $(".next").remove()
            $(".intro").hide()
            $(".opacity").removeClass("opacity")
            $("#select-native-1").val(localStorage.typeOfMedicine).trigger("change");
            $("#select-native-2").val(localStorage.puffsAtTime).trigger("change");
            if (JSON.stringify(Parse.User.current()) != "null") {
                Parse.User.logIn(Parse.User.current().get("username"), localStorage.password, {
                    success: function(user) {

                        logoutText()
                    },
                    error: function(user, error) {
                        // The login failed. Check error to see why
                    }
                });

            } else {
                localStorage.puffsAtTime = "1"
                localStorage.typeOfMedicine = "Advair"
                $("#select-native-1").val(localStorage.typeOfMedicine).trigger("change");
                $("#select-native-2").val(localStorage.puffsAtTime).trigger("change");
                tour()
            }
        }
    }
}