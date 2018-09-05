var images = "styles/icons/";

function File(obj) {
    this.DOMlink = obj.DOMlink;
    this.location = obj.location;
    this.components = {
        name: obj.name,
        icon: images + obj.icon,
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
            anchor: obj.anchor,
            text: obj.text
        };
    }
}