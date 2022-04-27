var catalogo = require("./database/catalogo.json");
// console.log(catalogo);
// console.log(catalogo.data);

var catalogoString = JSON.stringify(catalogo);
// console.log(catalogoString);

var catalogoObj = JSON.parse(catalogoString);
// console.log(catalogoObj);


//FUNÇÃO LISTAR TODOS OS FILMES
function listarTodosOsFilmes(filmes){
    for(let i = 0; i < filmes.length; i++){
        console.log(filmes[i].titulo);
    }
};
listarTodosOsFilmes(catalogoObj.data)

//FUNÇÃO LISTAR FILMES EM CARTAZ - FUNÇÃO ORIGINAL A QUE FOI CRIDA ANTES DE REFATORAR

// function listarFilmesEmCartaz(filmes) {
//     const filmesEmCartaz = filmes.filter((filmes) => {
//       if (filmes.emCartaz === true) {
//         return true;
//       }
//     });
//     return filmesEmCartaz;
//   }
//   console.log(listarFilmesEmCartaz(catalogoObj.data));
  
// const listarFilmesEmCartaz = (filmes) =>
//   filmes.filter((filme) => filme.emCartaz);


//FUNÇÃO REFFATORADA LISTAR FILMES EM CARTAZ

function listarFilmesEmCartaz(filmes) {
    return filmes.filter((filme) => filme.emCartaz);
  }
  console.log(listarFilmesEmCartaz(catalogoObj.data));
  

//FUNÇÃO ALTERAR STATUS EM CARTAZ - CODIGO ORIGINAL

//   function alterarStatusEmCartaz(id, filmes) {
//     const idxFilme = filmes.findIndex((filme) => {
//       if (filme.codigo === id) {
//         return true;
//       }
//     });
//     if (idxFilme >= 0) {
//       filmes[idxFilme].emCartaz = !filmes[idxFilme].emCartaz;
//       return true;
//     }
//   }
//   console.log(alterarStatusEmCartaz(1, catalogoObj.data));
//   console.log(catalogoObj.data);
  

//FUNÇÃO ALTERAR STATUS EM CARTAZ - SEGUNDA OPÇÃO

function alterarStatusEmCartaz(id, filmes) {
    const idxFilme = filmes.findIndex((filme) => {
      if (filme.codigo === id) {
        return true;
      }
    });
    if (idxFilme >= 0) {
      filmes[idxFilme].emCartaz = !filmes[idxFilme].emCartaz;
      return true;
    } else {
      return false;
    }
  }
  
  console.log(alterarStatusEmCartaz(1, catalogoObj.data));
  console.log(catalogoObj.data);
  

  