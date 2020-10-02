let API;
let randomsPokemons;

const randomPokemon = ()=>{
  randomsPokemons = Math.floor(Math.random() * 100);
  API = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset='+randomsPokemons;
}
let pokemons = {};

  const getData = (api)=>{
  return fetch(api)
    .then((response)=>response.json())
    .then((json)=>{
      let html=""
      if(!!json){
        html=""
        json.results.forEach((pj) => {
          getImg(pj.url)
          .then((response)=> {
            html += '<div class="col-3">'
              html += '<div class="card m-2">'
              html += `<img src="${response}" class="card-img-top" alt="...">`
                html += '<div class="card-body" >'
                html += ` <h5 class="card-title">${pj.name}</h5>`
                /* html += `<p class="card-text">Status: ${pj.status}</p>`
                html += `<p class="card-text">Especie: ${pj.species}</p>`
                html += `<p class="card-text">Genero: ${pj.gender}</p>` */
                html += '</div>'
              html += '</div>'
            html += '</div>'
            return html
          })
          .then((response)=> {
            document.getElementById("datosPersonaje").innerHTML= response
          })
          .catch( (error) => {
            console.log('error', error);
            return null;
          })

      });
      

      }
      //llenarDatos(json),
      //paginacion(json.info)
    })  
    .catch( (error) => {
      console.log('error', error);
      return null;
    })
  }

  const getImg = (api)=>{
    return fetch(api)
      .then((response)=>response.json())
      .then((json)=>{
        return json.sprites.front_default
      })  
      .catch( (error) => {
        console.log('error', error);
        return null;
      })
    }

const llenarDatos = (data)=>{
  let html = ""
  data.results.forEach((pj) => {
      html += '<div class="col-3">'
        html += '<div class="card m-2">'
        html += `<img src="${pj.image}" class="card-img-top" alt="...">`
          html += '<div class="card-body" >'
          html += ` <h5 class="card-title">${pj.name}</h5>`
          html += `<p class="card-text">Status: ${pj.status}</p>`
          html += `<p class="card-text">Especie: ${pj.species}</p>`
          html += `<p class="card-text">Genero: ${pj.gender}</p>`
          html += '</div>'
        html += '</div>'
      html += '</div>'
  });
  document.getElementById("datosPersonaje").innerHTML= html
}

const paginacion = ()=>{
  randomPokemon();
  getData(API);
}
randomPokemon();
getData(API);
