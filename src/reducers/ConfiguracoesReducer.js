import axios from 'axios';

const lista = require('../../produtos.json');

const ConfiguracoesReducer = (state = lista, action) => {
  axios
    .get('http://10.0.2.2:3000/produtos')
    .then(({data}) => {
      console.log(data);
    })
    .catch((erro) => console.log(erro))
    .then((res) => {
      console.log(res);
    });

  let data = [...state.produtos];
  let index;

  switch (action.type) {
    case 'SET_RATING':
      index = action.payload.index;
      const stars = action.payload.stars;
      data[index].Rating = stars;
      return {data};

    case 'TOGGLE_COUNT_PRODUCTS':
      index = action.payload.index;
      data[index].Favorite = !data[index].Favorite;
      return {data};
  }

  return state;
};

export default ConfiguracoesReducer;
