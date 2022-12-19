$("body").keypress(function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    if (code.toString() == 27) {
       redir()
        return false;
    }
});


function redir() {
 window.location = "/Search.aspx";
}