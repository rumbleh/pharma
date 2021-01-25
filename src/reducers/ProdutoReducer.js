import axios from 'axios';

// async function async get() {
//   await axios
//     .get('http://10.0.2.2:3000/produtos')
//     .then(({data}) => {
//       return data;
//     })
//     .catch((erro) => console.log(erro))
//     .then((res) => {
//       lista = res;
//     });
// }

const lista = require('../../produtos.json');

const ProdutoReducer = (state = lista, action) => {
  let data = [...state.produtos];
  let index;

  switch (action.type) {
    case 'SET_RATING':
      index = action.payload.index;
      const stars = action.payload.stars;
      data[index].Rating = stars;
      return {data};

    case 'TOGGLE_FAVORITE':
      index = action.payload.index;
      data[index].Favorite = !data[index].Favorite;
      return {data};
  }

  return state;
};

export default ProdutoReducer;
