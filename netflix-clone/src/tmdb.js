const API_KEY = 'c8fa9d6dd9d7ab632f96f2d0e2070931';
const API_BASE_URL_ = 'https://api.themoviedb.org/3';

// Essa função manda um endpoint, que vai requisitar e mandar a resposta do json

const basicFetch= async (endpoint) => {
    const req = await fetch(`${API_BASE_URL_}${endpoint}`)
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discovery/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'topRated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`discover/movie?with-_genres=28&anguage=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`discover/movie?with-_genres=35&anguage=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`discover/movie?with-_genres=27&anguage=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`discover/movie?with-_genres=10749&anguage=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`discover/movie?with-_genres=99&anguage=pt-BR&api_key=${API_KEY}`)
            },
        ];
    }
}