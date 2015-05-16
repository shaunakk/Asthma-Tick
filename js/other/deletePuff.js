function deletePuff(element) {
    var deleteObjectConfirm = confirm("Are you sure you want to delete this puff entry?")
    if (deleteObjectConfirm == true) {
        var id = element.parentElement.id;
        id = parseInt(id);
        var idWhen = window.puffArray[id].when
        var ServerPuffObject = Parse.Object.extend("ServerPuffObject");
        var query = new Parse.Query(ServerPuffObject);
        query.equalTo("when", idWhen.toString());
        query.find({
            success: function(results) {
                alert(JSON.stringify(results))
                results = results[0]
                results.destroy({
                    success: function(results) {
                        //the first object in the class "Messages" was deleted
                    },
                    error: function(results, error) {
                        //the first object was not deleted
                    }
                });
            }
        });
        window.puffArray.splice(id, 1);
        localStorage.history = JSON.stringify(window.puffArray)
        showMessage("Puff Entry Deleted")
        makeTable()
    } else {
        return
    }
}

function deleteAllPuffs() {
    var deleteHistoryConfirm = confirm("Are you sure you want to delete all your history?")
    if (deleteHistoryConfirm == true) {
        localStorage.removeItem("history")
        var ServerPuffObject = Parse.Object.extend("ServerPuffObject");
        var query = new Parse.Query(ServerPuffObject);
        query.equalTo("user", Parse.User.current());
        query.find({
            success: function(userPuffs) {
                var deleteItem
                $.each(
                    userPuffs,
                    function(i, item) {
                        deleteItem=userPuffs[i]
                        deleteItem.destroy()
                    }
                )
                location.reload()
                showMessage("All History Deleted")
            }
        });
    }
}