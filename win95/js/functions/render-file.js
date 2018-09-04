function renderFile(fileName) {
    for (j in Files) {
        var fileObject = Files[j];
        var domlink = fileObject.DOMlink;
        if (fileName === fileObject.components.name) {
            return fileToDOM("window", fileObject.components, domlink);
        }
    }
}