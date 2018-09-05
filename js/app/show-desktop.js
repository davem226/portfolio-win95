$(function () {
    for (i in Files) {
        if (Files[i].location === "Desktop") {
            var file = fileToDOM("desktop", Files[i].components, Files[i].DOMlink);
            $("#desktop").append(file);
            addDoubleClick(`#${file[0].id}`, true);
        }
    }
});