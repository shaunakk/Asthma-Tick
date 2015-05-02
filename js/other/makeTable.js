function makeTable() {
    $("#puffTable #tableBody").empty();
    var count = 0
    $.each(
        window.puffArray, function(i, item) {
            $('<tr>').append(
                $('<td>').text(item.dateTime),
                $('<td>').text(item.numberPuffs),
                $('<td>').text(item.medicine),
                $('<td>').text(item.notes),
                $('<div id=' + "'" + count + "'" + '><a class="ui-btn ui-icon-delete ui-btn-icon-notext ui-corner-all deleteObjectButton">No text</a></div>')
            ).appendTo('#puffTable #tableBody');
            count++;
        }
    );
}