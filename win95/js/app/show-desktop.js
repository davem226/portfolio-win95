$(function () {
    for (i in Files) {
        if (Files[i].location === "Desktop") {
            var file = fileToDOM(Files[i].components, Files[i].DOMlink);
            $("#desktop").append(file);
        }
    }
});