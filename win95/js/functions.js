function windowToDOM(components) {
    var window = $("<div>").attr("class", "window");

    var titleBar = $("<div>").attr("class", "titlebar");
    titleBar.append($("<img>").attr({
        "src": components.titleBar.icon,
        "class": "titlebar-icon"
    }));
    titleBar.append($("<div>").attr("class", "titlebar-name")
        .text(components.titleBar.name));
    var btnsDiv = $("<div>").attr("class", "titlebar-buttons");
    var tbBtns = components.titleBar.buttons;
    for (i in tbBtns) {
        btnsDiv.append($("<img>").attr({
            "src": tbBtns[i].icon,
            "class": "titlebar-icon",
            "id": tbBtns[i].type
        }));
    }
    titleBar.append(btnsDiv);
    window.append(titleBar);

    var navBar = $("<div>").attr("class", "navbar");
    for (i in components.navBar) {
        navBar.append(components.navBar[i]);
    }
    window.append(navBar);

    var display = $("<div>").attr("class", "display");
    window.append(display);

    var footer = $("<div>").attr("class", "footer")
        .text(components.footer);
    window.append(footer);

    return window;
}

function fileToDOM(components) {
    var file = $("<div>").attr("class", "file");
    file.append($("<img>").attr({
        "src": components.icon,
        "class": "file-icon"
    }));
    var name = $("<div>").attr("class", "file-name")
        .text(components.name);
    if (components.ext) {
        name.append(components.ext);
    }
    file.append(name);
    
    return file;
}