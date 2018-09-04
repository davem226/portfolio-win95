function windowToDOM(components, numFiles) {
    var window = $("<div>").attr("class", "window");

    // Create title bar
    var titleBar = $("<div>").attr("class", "titlebar");
    titleBar.append($("<img>").attr({
        "src": components.icon,
        "class": "titlebar-icon"
    }));
    titleBar.append($("<div>").attr("class", "titlebar-name")
        .text(components.name));
    var buttons = $("<div>").attr("class", "titlebar-buttons");
    for (i in a = ["min", "max", "close"]) {
        buttons.append($("<img>").attr({
            "src": images + a[i] + ".png",
            "class": "titlebar-button",
            "id": a[i]
        }));
    }
    titleBar.append(buttons);
    window.append(titleBar);

    // Create navbar
    var navBar = $("<div>").attr("class", "navbar");
    for (i in a = ["File", " Edit", " View", " Help"]) {
        navBar.append(a[i]);
    }
    window.append(navBar);

    // Create display area; files added later
    var display = $("<div>").attr("class", "display");
    window.append(display);

    // Create footer
    var footer = $("<div>").attr("class", "footer")
        .text(numFiles + " object(s)");
    window.append(footer);

    // Show in desktop and taskbar
    $("#desktop").append(window);
    $("#tb-app-area").append(
        $("<div>").attr("class", "tb-app")
            .text(components.name)
    );
    
    return window;
}

function fileToDOM(location, components, DOMlink) {
    var file = $("<div>").attr({
        "location": location,
        "class": "file",
        "id": DOMlink,
        "DOMlink": DOMlink
    });
    file.append($("<img>").attr({
        "location": location,
        "src": components.icon,
        "class": "file-icon"
    }));
    var name = $("<div>").attr({
        "location": location,
        "class": "file-name"
    }).text(components.name);
    if (components.ext) {
        name.append(components.ext);
    }
    file.append(name);

    return file;
}