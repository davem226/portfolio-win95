var isSelected = "";
function addDoubleClick(id, onDesktop) {
    $(id).click(function () {
        // Double-click
        if (isSelected === $(this).find("div").html()) {
            var domlink = $(this).attr("DOMlink");
            var clickedFile = findObject(domlink);

            // Directory file
            if (clickedFile.isDir === true) {
                var numFiles = clickedFile.contents.files.length;
                var window = windowToDOM(clickedFile.components, numFiles);
                // Add close click handler HERE

                for (i in clickedFile.contents.files) {
                    var fileName = clickedFile.contents.files[i];
                    var file = renderFile(fileName);
                    var display = window.find(".display");
                    display.append(file);
                    addDoubleClick(`#${file[0].id}`, false);
                }
            }
            // True file
            else {

            }
        }
        // Single-click
        else {
            // Erase border of previously selected file
            $(".file").css("border", "none");

            // Set color of border
            if (onDesktop) {
                var borderColor = "#e35f5f";
            } else {
                var borderColor = "#6c6c6c"
            }
            $(this).find("div").css({
                "border": "dotted 2px " + borderColor,
            });

            isSelected = $(this).find("div").html();

            //  Second click must within 0.5 seconds
            setTimeout(function () {
                isSelected = "";
            }, 500);
        }
    });

    // Click anywhere but an icon
    $(window).click(function (e) {
        if ($(e.target).closest(".file").length === 0) {
            $(".file-name").css({
                "border": "none",
            });

            isSelected = "";
        }
    });
}
