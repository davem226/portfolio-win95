function addCloseability() {
    $("[type=close-symbol]").click(function () {
        for (i in b = $(this).parents()) {
            if (b[i].className === "window") {
                var closedWin = b[i];
                $(closedWin).remove();
                break;
            }
        }
    });
}
