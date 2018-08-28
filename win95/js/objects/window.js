function Window(obj) {
    this.components = {
        titleBar: {
            name: obj.name,
            icon: obj.icon,
            buttons: [{
                type: "min",
                icon: obj.min
            }, {
                type: "expand",
                icon: obj.expand
            }, {
                type: "exit",
                icon: obj.exit
            }]
        },
        navBar: ["file", "edit", "view", "help"],
        display: {
            files: obj.files
        },
        footer: obj.footer
    };
    this.highlighted = false;

    this.open() = function () {
        var window = windowToDOM(this.components);
        $("#desktop").append(window);
        this.intoTaskbar(this.components.titleBar.name);
    };
    this.intoTaskbar() = function (appName) {
        var tbApp = $("#tb-app-area").append($("<div>").attr("class", "tb-app"));
        tbApp.text(appName);
    };
    this.close() = function () {

    };
}