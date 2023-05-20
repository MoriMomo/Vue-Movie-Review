import Vuex from "vuex";

const createStore = () => {
    return new Vuex.Store({
        state: {
            movieData: [
                {
                    id: 1,
                    name: "Avatar: The Way of Water",
                    link: "https://i.ibb.co/PjB95Lr/movie1.jpg",
                    genre: "Science Fiction",
                    year: 2022,
                    review: "Avatar: The Way of Water",
                },
                {
                    id: 2,
                    name: "Insidious 1",
                    link: "https://i.ibb.co/vh30y4P/movie2.jpg",
                    genre: "Horror",
                    year: 2010,
                    review: "Insidious 1",
                },
                {
                    id: 3,
                    name: "Jumanji: The Next Level",
                    link: "https://i.ibb.co/SKjMVJK/movie5.jpg",
                    genre: "Adventure",
                    year: 2019,
                    review: "Jumanji: The Next Level",
                },
                {
                    id: 4,
                    name: "Avengers: Infinity War",
                    link: "https://i.ibb.co/Tg5rkBj/movie6.jpg",
                    genre: "Action",
                    year: 2018,
                    review: "Avengers: Infinity War",
                },
            ],
        },
        getters: {},
        mutations: {},
        actions: {},

    })
}

export default createStore


