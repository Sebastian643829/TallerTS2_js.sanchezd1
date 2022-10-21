import { data } from './data.js';
var seriesTbody = document.getElementById('series');
var image = document.getElementById('image');
var info = document.getElementById('info');
var infoContainer = document.getElementById('infoContainer');
var link = document.getElementById('link');
var name = document.getElementById('name');
var description = document.getElementById('description');
var AverageNumberOfSeasonsElm = document.getElementById("seasons");
renderSeriesInTable(data);
AverageNumberOfSeasonsElm.innerHTML = "".concat(getAverageNumberOfSeasons(data));
function renderSeriesInTable(series) {
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td style=\"font-weight: bolder;\">".concat(s.id, "</td>\n                             <td style=\"color: #4895D9;\">").concat(s.name, "</td>\n                             <td>").concat(s.channel, "</td> \n                             <td>").concat(s.season, "</td>");
        seriesTbody.appendChild(trElement);
        trElement.addEventListener("click", function () { return mostrarImagen(s); });
    });
}
function mostrarImagen(serie) {
    info.className = 'card';
    infoContainer.className = 'cardBody';
    image.setAttribute('src', serie.image);
    link.setAttribute('href', serie.link);
    link.setAttribute('height', "300px");
    link.setAttribute('width', "470px");
    link.innerText = 'enlace';
    name.innerText = serie.name;
    description.innerText = serie.description;
}
function getAverageNumberOfSeasons(series) {
    var totalSeasons = 0;
    var numberOfSeries = 0;
    series.forEach(function (serie) {
        totalSeasons = totalSeasons + serie.season;
        numberOfSeries++;
    });
    return totalSeasons / numberOfSeries;
}
