let divLogoRestaurante = document.querySelector("#logo"); // res.html.



    fetch("categorias.json").then((response) => {
        response.json().then((dados) => {
            dados.restaurantes.map((restaurante) => {
                divLogoRestaurante.innerHTML += `
                <div class=" col-6" >
                <a href="perfilCom.html"><button class="restaurante caixaLogo" 
                style="background-image:url(icones/overlay.png), url(${restaurante.logo});">ㅤ</button>
                </a>
               </div>`
                
            })
        })
    });

    let divBanners = document.querySelector("#banners");



    fetch("categorias.json").then((response) => {
        response.json().then((dados) => {
            dados.banners.map((banners) => {
                divBanners.innerHTML += `
                <div class=" col-6" >
                <a href="res.html">
                <button class="fotoMiniatura escolha" style="background-image: url(icones/overlay.png), url(${banners.banner});">
                <strong>${banners.titulo}</strong></button></a>
                </div>`
                
            })
        })
    });

    

    let divRestaurantes = document.querySelector("#local")

// Função para buscar uma pessoa pelo nome
function buscarRestPorNome(nome) {
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
        resEncontrado = data.restaurantes.find(restaurante => restaurante.nome === nome);

        if (resEncontrado){
            divRestaurantes.innerHTML = `<p> ${resEncontrado.nome} </p>
            <p> Telefone:${resEncontrado.telefone} </p>
            <p> Endereço:${resEncontrado.endereço} </p>
            `
        }else{
            console.log ("Não encontrado");
        }

        
         
          
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  }
  
  // Chamando a função para buscar a pessoa pelo nome "João da Silva" (substitua pelo nome desejado)
  buscarRestPorNome('Na Ladeira');