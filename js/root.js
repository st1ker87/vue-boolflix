var app = new Vue({
    el: "#root",

    data: {
        searchFilm: '',
        films: []

    },

    mounted() {
        

    },

    methods: {
        getFilms(){
            axios
                .get("https://api.themoviedb.org/3/search/movie?api_key=5f03ee3b0c28f08b12f985fc9e4ae8c8&language=it-IT&query=" + this.searchFilm)
                .then((response) => {
                    console.log(response);
                    this.films = response.data.results;
                    console.log(this.films);
                });
        }
    }
});