import { Serie } from './serie.js';

import { data } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
let image: HTMLElement = document.getElementById('image')!;
let info: HTMLElement = document.getElementById('info')!;
let infoContainer: HTMLElement = document.getElementById('infoContainer')!;
let link: HTMLElement = document.getElementById('link')!;
let name: HTMLElement = document.getElementById('name')!;
let description: HTMLElement = document.getElementById('description')!;
const AverageNumberOfSeasonsElm: HTMLElement = document.getElementById("seasons")!;

renderSeriesInTable(data);

AverageNumberOfSeasonsElm.innerHTML = `${getAverageNumberOfSeasons(data)}` 

function renderSeriesInTable(series: Serie[]): void {   
    series.forEach(s => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td style="font-weight: bolder;">${s.id}</td>
                             <td style="color: #4895D9;">${s.name}</td>
                             <td>${s.channel}</td> 
                             <td>${s.season}</td>`;      
       seriesTbody.appendChild(trElement);  
       trElement.addEventListener("click", () => mostrarImagen(s))    
    }); 
  }

  function mostrarImagen(serie: Serie){
  info.className ='card';
  infoContainer.className ='cardBody';
  image.setAttribute('src',serie.image );
  link.setAttribute('href', serie.link );
  link.setAttribute('height', "300px" );
  link.setAttribute('width', "470px" );
  link.innerText = 'enlace';
  name.innerText = serie.name;
  description.innerText = serie.description; 
  }

  function getAverageNumberOfSeasons(series: Serie[]): number {   
    let totalSeasons: number = 0;
    let numberOfSeries: number = 0;
    series.forEach((serie) => {
        totalSeasons = totalSeasons + serie.season;
        numberOfSeries++;
    });
    return totalSeasons/numberOfSeries;   
  }
