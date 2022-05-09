const API_KEY = 'c8fa9d6dd9d7ab632f96f2d0e2070931';

const categories = [
    {
      name: "trending",
      title: "Em alta",
      path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
      isLarge: true,
    },
    {
      name: "netflixOriginals",
      title: "Originais Netflix",
      path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
      isLarge: false,
    },
    {
      name: "topRated",
      title: "Populares",
      path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
      isLarge: false,
    },
    {
      name: "comedy",
      title: "Comédias",
      path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
      isLarge: false,
    },
    {
      name: "romances",
      title: "Romances",
      path: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
      isLarge: false,
    },
    {
      name: "documentaries",
      title: "Documentários",
      path: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
      isLarge: false,
    },
  ];

  //Método que pega os filmes, recebe o path (cad categoria tem um específico) e retorna uma chamada pra API do tmdb.
  //Estamos usando awai porque a chamada é assíncrona e só conseguimos seguir em frente depois que a resposta retornar, aí podemos devolver o JSON recebido em resposta da API, pra cada categoria com uma resposta individual.
  
  export const getMovies = async (path) => {
    try {
      let url = `https://api.themoviedb.org/3${path}`;
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.log("error getMovies: ", error);
    }
  };
  
  export default categories;