function windowToDOM(components, numFiles) {
    var win = $("<div>").attr("class", "window");

    // Create title bar
    var titleBar = $("<div>").attr("class", "titlebar");
    titleBar.append($("<div>").attr("class", "titlebar-name")
        .text(components.name));
    var buttons = $("<div>").attr("class", "titlebar-buttons");
    for (i in a = ["min", "max", "close"]) {
        var btn = $("<button>").attr({
            "class": "titlebar-button",
            "type": a[i]
        });

        var symbol = $("<div>").attr({
            "class": "titlebar-symbol",
            "type": `${a[i]}-symbol`
        });
        if (i == 2) {
            symbol.text("X");
        }

        btn.append(symbol);
        buttons.append(btn);
    }
    titleBar.append(buttons);
    win.append(titleBar);

    // Create navbar
    var navBar = $("<div>").attr("class", "navbar");
    for (i in a = ["File", " Edit", " View", " Help"]) {
        navBar.append(a[i]);
    }
    win.append(navBar);

    // Create display area; files added later
    var display = $("<div>").attr("class", "display");
    win.append(display);

    // Create footer
    if (numFiles) {
        var footer = $("<div>").attr("class", "footer")
            .text(numFiles + " object(s)");
        win.append(footer);
    }

    // Show in desktop and taskbar
    $("#desktop").append(win);
    $("#tb-app-area").append(
        $("<div>").attr("class", "tb-app")
            .text(components.name)
    );

    return win;
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