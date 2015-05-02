function tour() {

    if ($(".next").length) {

    } else {
        $("#homePage .home").append("<button class='next pure-button'>Next</button>")
    }
    $('html, body').animate({scrollTop: $(document).height()}, 'slow');
    $('select').selectmenu('disable');
    var clicks = 0
    $(".intro2,.intro3,.intro4,.intro5").hide()
    $(".next").click(
        function() {
            clicks += 1
            if (clicks == 1) {
                $(".intro1").addClass("animated rotateOut")
                setTimeout('$(".intro2").show()', 500)
            } else if (clicks == 2) {
                $(".intro2").addClass("animated rotateOut")
                setTimeout('$(".intro3").show()', 500)
            } else if (clicks == 3) {
                $(".intro3").addClass("animated rotateOut")
                setTimeout('$(".intro4").show()', 500)
            } else if (clicks == 4) {
                $(".next").html("Go!")
                $(".intro4").addClass("animated rotateOut")
                setTimeout('$(".intro5").show()', 500)
            } else {
                $(".intro4").addClass("animated rotateOut")
                setTimeout(' $(".intro1,.intro2,.intro3,.intro4,.intro5").hide()', 500)
                $(".next").remove()
                $(".opacity").removeClass("opacity")
                $('select').prop('disabled', false);
                $("#historyButton, #newPuff, #settingsButton").attr('disabled', false)
                $('select').selectmenu('enable');
                localStorage.apprun = "1"
                location.reload()
            }
        }
    )
}
function tourAgainFunction() {
    $('html, body').animate({scrollTop: $(document).height()}, 'slow');
    $(".opacityDiv").addClass("opacity")
    $(".toast-container").remove()
    if ($(".next").length) {

    } else {
        $("#homePage .home").append("<button class='next pure-button'>Next</button>")
    }
    $(".intro1").show()
    $('select').selectmenu('disable');
    var clicks = 0
    $(".next").click(
        function() {
            clicks += 1
            if (clicks == 1) {
                $(".intro1").addClass("animated rotateOut")
                setTimeout('$(".intro2").show()', 500)
            } else if (clicks == 2) {
                $(".intro2").addClass("animated rotateOut")
                setTimeout('$(".intro3").show()', 500)
            } else if (clicks == 3) {
                $(".intro3").addClass("animated rotateOut")
                setTimeout('$(".intro4").show()', 500)
            } else if (clicks == 4) {
                $(".next").html("Go!")
                $(".intro4").addClass("animated rotateOut")
                setTimeout('$(".intro5").show()', 500)
            } else {
                $(".intro4").addClass("animated rotateOut")
                setTimeout(' $(".intro1,.intro2,.intro3,.intro4,.intro5").hide()', 500)
                $(".next").remove()
                $(".opacity").removeClass("opacity")
                $('select').prop('disabled', false);
                $("#historyButton, #newPuff, #settingsButton").attr('disabled', false)
                $('select').selectmenu('enable');
                location.reload()
            }
        }
    )
}