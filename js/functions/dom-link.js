function findObject(domlink) {
    for (i in Files) {
        if (domlink === Files[i].DOMlink) {
            return Files[i];
        }
    }
}