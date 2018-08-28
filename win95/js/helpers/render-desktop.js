$(function () {
    for (i in desktopIcons) {
        var icon = createIcon(desktopIcons[i].title, desktopIcons[i].filename);
        $("#desktop").append(icon);
    }
});