function renderFile(fileName) {
    for (j in Files) {
        var fileObject = Files[j];
        if (fileName === fileObject.components.name) {
            return fileToDOM(fileObject.components);
        }
    }
}