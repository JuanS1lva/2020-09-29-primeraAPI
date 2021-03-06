const API = 'https://rickandmortyapi.com/api/character'


const getData = (api)=>{
  return fetch(api)
    .then( (response) =>response.json())
    .then((json)=>{
      // console.log('json-->', json);
      llenarDatos(json)
    })  
    .catch( (error) => {
      console.log('error', error);
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

getData(API)