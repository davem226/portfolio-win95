// Adds double-click functionality to all files
$(function () {
    var isSelected = "";
    $(".file").click(function () {
        // Double-click
        if (isSelected === $(this).find("div").html()) {
            alert("You've double-clicked!!!")

            var domlink = $(this).attr("DOMlink");
            var clickedFile = findObject(domlink);

            // Directory file
            if (clickedFile.isDir === true) {
                var numFiles = clickedFile.contents.files.length;
                var window = windowToDOM(clickedFile.components, numFiles);

                for (i in clickedFile.contents.files) {
                    var fileName = clickedFile.contents.files[i];
                    var file = renderFile(fileName);
                    window.append(file);
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

            $(this).find("div").css({
                "border": "dotted 2px #e35f5f",
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
});