function File(obj) {
    this.location = obj.location;
    this.components = {
        name: obj.name,
        icon: obj.icon,
    };
    this.isDir = obj.isDir;

    if (this.isDir) {
        this.contents = {
            files: obj.files
        };
    } 
    else {
        this.components.ext = obj.ext;
        this.contents = {
            anchor: obj.anchor
        };
    }
    this.highlighted = obj.highlighted;

    this.render() = function () {
        var file = fileToDOM(this.components);
        $(this.location).append(file);
    }
}