function openUrl(id){	
	setCookie('id',id);
	open('perfilCom.html','_self');
}
function abreUrl(id){	
	setCookie('id',id);
	open('res.html','_self');
}

let id;
function loadResInfo(){
	 let id = getCookie("id");
	 buscarRestPorId(id);
}

function loadCategoInfo(){
  let id = getCookie("id");
  buscarCategoPorId(id);
}

function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

let divLogoRestaurante = document.querySelector("#logo"); // res.html.
    fetch("categorias.json").then((response) => {
        response.json().then((dados) => {
            dados.restaurantes.map((restaurante) => {
                divLogoRestaurante.innerHTML += `
                <div class=" col-6" >

               <button class="restaurante caixaLogo" onclick="openUrl(${restaurante.id});"
                style="background-image:url(icones/overlay.png), url(${restaurante.logo});" >ㅤ</button> 


               </div>
               
               <div class="col-6">
               <p style="color:#fff;">
               
               ${restaurante.nome}</p>
               
               </div>

               `
            })
        })
    });
    
let divLogo =  document.querySelector("#logoPerfil");
let divTitulo=  document.querySelector("#tituloPerfil");
let listaLogoRestaurante;

let divBanners = document.getElementById("banners");
    fetch("categorias.json").then((response) => {
        response.json().then((dados) => {
            dados.banners.map((banners) => {
                divBanners.innerHTML += `
                <div class=" col-6" >
               
                <button class="fotoMiniatura escolha" onclick="abreUrl(${banners.id});" style="background-image: url(${banners.banner});">
                <strong>${banners.titulo}</strong></button>
				
                </div>`
            })
        })
    });
  

    let divendereço = document.getElementById("endereço");
    let logoRestaurante = document.getElementById("logoPerfil");
    let tituloRestaurante = document.getElementById("tituloPerfil");
    let telefoneRestaurante = document.getElementById("telefone");
    let mapaRestaurante = document.getElementById("mapa");
  function buscarRestPorId(id) {
     // URL da API (substitua pela URL real da sua API)
    const enderecoApi = 'categorias.json';
    // Faz a requisição à API
    fetch(enderecoApi)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        return response.json();
      })
      .then(data => { 
        // Filtra a pessoa pelo nome
        resEncontrado = data.restaurantes.find(restaurante => restaurante.id == id);
        
        if (resEncontrado){
          console.log("acerto");
          logoRestaurante.innerHTML= `
          <div class="caixaLogo col-12">
          <img class="logo" src="${resEncontrado.logo}">
          </div>
          
          `
          tituloRestaurante.innerHTML=` <div class="col-12" id="tituloPerfil">
          <h1>${resEncontrado.nome}</h1>
      </div>
      `
       divendereço.innerHTML=` <p>${resEncontrado.endereço}</p>`
       telefoneRestaurante.innerHTML=`<a href="tel:${resEncontrado.telefone}"><p>${resEncontrado.telefone}</p></a>`
       mapaRestaurante.innerHTML=` <a class="aMuda" href="https://www.google.com/maps/dir/?api=1&origin=&destination=${resEncontrado.latitude},${resEncontrado.longetude}&travelmode=driving"><button>Traçar Rota</button></a>`

        }
      })
      
  }

let categoriaBanner = document.getElementById("categoriaId");
  function buscarCategoPorId(id) {
     // URL da API (substitua pela URL real da sua API)
    const enderecoApi = 'categorias.json';
    // Faz a requisição à API
    fetch(enderecoApi)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        return response.json();
      })
      .then(data => { 
        // Filtra a pessoa pelo nome
        categoriaEncontrada = data.restaurantes.find(categoria => categoria.id == id);
        
        if (categoriaEncontrada){
          console.log("acerto");
          categoriaBanner.innerHTML= `<header class="restaurante" id="categoriaId"
           style="background-image: url(icones/overlay.png),
            url(${categoriaEncontrada.banner});">
            `
          
            tituloRestaurante.innerHTML=` <div class="col-12" id="tituloPerfil">
          <h1>${categoriaEncontrada.nome}</h1>
      </div>`

        }
      })
      
  }

  
        // document.addEventListener("DOMContentLoaded", () => {
        //     const getLocationButton = document.getElementById("getLocation");
        //     const userLocationSpan = document.getElementById("userLocation");
        //     const distanceSpan = document.getElementById("distance");
        //     const arrivalTimeSpan = document.getElementById("arrivalTime");

        //     getLocationButton.addEventListener("click", () => {
        //         if ("geolocation" in navigator) {
        //             navigator.geolocation.getCurrentPosition((position) => {
        //                 const userLat = position.coords.latitude;
        //                 const userLng = position.coords.longitude;

        //                 // Exemplo de coordenadas do restaurante em Recife (substitua pelas coordenadas reais)
        //                 const restaurantLat = -8.047562;
        //                 const restaurantLng = -34.878049;

        //                 // Calculando a distância e tempo de chegada (usando distância euclidiana)
        //                 const distance = calculateDistance(userLat, userLng, restaurantLat, restaurantLng);
        //                 const arrivalTime = calculateArrivalTime(distance);

        //                 userLocationSpan.textContent = `${userLat.toFixed(6)}, ${userLng.toFixed(6)}`;
        //                 distanceSpan.textContent = distance.toFixed(2);
        //                 arrivalTimeSpan.textContent = arrivalTime.toFixed(0);
        //             });
        //         } else {
        //             alert("Geolocalização não está disponível no seu navegador.");
        //         }
        //     });

        //     function calculateDistance(lat1, lon1, lat2, lon2) {
        //         const R = 6371; // Raio da Terra em km
        //         const dLat = deg2rad(lat2 - lat1);
        //         const dLon = deg2rad(lon2 - lon1);
        //         const a =
        //             Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        //             Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        //         const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        //         const distance = R * c;
        //         return distance;
        //     }

        //     function deg2rad(deg) {
        //         return deg * (Math.PI / 180);
        //     }

        //     function calculateArrivalTime(distance) {
        //         // Suponha uma velocidade média de 40 km/h (substitua pela velocidade real)
        //         const averageSpeed = 40;
        //         const time = (distance / averageSpeed) * 60; // Tempo em minutos
        //         return time;
        //     }
        // });
   
  
 

  // Chamando a função para buscar a pessoa pelo nome "João da Silva" (substitua pelo nome desejado)