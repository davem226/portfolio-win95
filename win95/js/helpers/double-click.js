// Adds double-click functionality to all icons
$(function () {
    var isClicked = "";
    $(".icon").click(function (borderColor) {
        // Double-click
        if (isClicked === $(this).find("div").html()) {
            alert("You've double-clicked!!!")
            createWindow(isClicked);
            insertIcons(icon.structure);
        }
        // Single-click
        else {
            $(this).find("div").css({
                "border": "dotted 2px #e35f5f",
            });
            isClicked = $(this).find("div").html();
            
            //  Second click must within 0.5 seconds
            setTimeout(function () {
                isClicked = "";
            }, 500);
        }
    });

    // Click anywhere but an icon
    $(window).click(function (e) {
        if ($(e.target).closest(".icon").length === 0) {
            $(".icon-title").css({
                "border": "none",

            });

            isClicked = "";
        }
    });
});