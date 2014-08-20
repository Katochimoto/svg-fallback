var doc = document;
var body = doc.querySelector("body");
var result = doc.querySelector("#result");
var svgDefs = doc.querySelector("#svg-defs");
var svgIds = {};

function showSvg () {
    var output = "";
    var symbols = doc.querySelectorAll("symbol");

    if (symbols.length == 0 ) {
        output  = "<span=\"result__error\">There is no symbols.</span>";
        result.innerHTML = output ;
        return;
    }

    for(var i = 0; i< symbols.length; i++){
        var svg_id = symbols[i].getAttribute("id");
        svgIds[svg_id] = svg_id;
    }

     for (var i = 0; i < iconsDataList.length; i++) {

        var folder = iconsDataList[i]["folder"];
        var iconsData = iconsDataList[i]["iconsData"];

        output  += "<h4>Folder: " + folder +"</h4>";
        output  += createIconsList(folder, iconsData);
     }

    result.innerHTML += output ;
}

function createIconsList(folder,items) {
    var icons = "";

    for (var i = 0; i < items.length; i++) {
        var iconId = items[i].name;
        var fullIconId = folder + "-" +iconId;
        var spanClass = folder + " "+ folder +"--" + iconId;
        spanClass += " demo-icon";

        icons += "<li class=\"icons-list__item\">";
        icons += "<h5 class=\"icons-list__title\">#" + fullIconId + "</h5>";

        if (svgIds[fullIconId]){
            icons += "<span class=\"" + spanClass + "\"><svg><use xlink:href=\"#" + fullIconId + "\"></svg></span>";
        }

        icons += "<span class=\"ie8\"><span class=\"" + spanClass + "\"></span></span>";
        icons += "</li>";
    }

    icons ="<ul class=\"icons-list\">" + icons + "</ul>";

    return icons;
}

showSvg();