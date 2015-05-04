function deletePuff(element) {
    var deleteObjectConfirm = confirm("Are you sure you want to delete this puff entry?")
    if (deleteObjectConfirm == true) {
        var id = element.parentElement.id;
        id = parseInt(id);
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
        setTimeout('location.reload()', 1500)
        showMessage("All History Deleted")
    }
}