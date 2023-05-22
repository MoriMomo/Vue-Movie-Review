import axios from "axios";
import Vuex from "vuex";

const createStore = () => {
    return new Vuex.Store({
        state: {
            // movieData: [
            //     {
            //         id: 1,
            //         name: "Avatar: The Way of Water",
            //         link: "https://i.ibb.co/PjB95Lr/movie1.jpg",
            //         genre: "Science Fiction",
            //         year: 2022,
            //         review: "Avatar: The Way of Water",
            //     },
            //     {
            //         id: 2,
            //         name: "Insidious 1",
            //         link: "https://i.ibb.co/vh30y4P/movie2.jpg",
            //         genre: "Horror",
            //         year: 2010,
            //         review: "Insidious 1",
            //     },
            //     {
            //         id: 3,
            //         name: "Jumanji: The Next Level",
            //         link: "https://i.ibb.co/SKjMVJK/movie5.jpg",
            //         genre: "Adventure",
            //         year: 2019,
            //         review: "Jumanji: The Next Level",
            //     },
            //     {
            //         id: 4,
            //         name: "Avengers: Infinity War",
            //         link: "https://i.ibb.co/Tg5rkBj/movie6.jpg",
            //         genre: "Action",
            //         year: 2018,
            //         review: "Avengers: Infinity War",
            //     },
            // ],

            movieData: []
        },
        getters: {},
        mutations: {
            setMovieData(state, payload) {
                state.movieData = payload;
            }
        },
        actions: {
            getMovies: async ({ commit }) => {
                const { data } = await axios.get("https://recipe-vue-batch2-default-rtdb.firebaseio.com/recipes.json")
                console.log(data)

                const arr = []
                for (let key in data) {
                    arr.push({ id: key, ...data[key] })

                }


                commit('setMovieData', arr)
            }
        },

    })
}

export default createStore


