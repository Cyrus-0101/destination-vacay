function enterSite() {
    //This code removes the div and inserts a new div
    $("#landing").css("transform", "translate(-200vw");
    $("#dimmed-bg").css("visibility", "visible");
    $("#dimmed-bg").css("transform", "translate(0)");

    //_above_fold.scss
    $("#above-fold").css("opacity", "1");

    //To display the site's content we use:
    $("#full-site").css("visibility", "visible");
    $("#full-site").css("overflow", "auto");
    $("#full-site").css("max-height", "auto");
};
