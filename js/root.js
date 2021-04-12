var app = new Vue({
    el: "#root",

    data: {
        searchFilm: '',
        films: [],
        apiK: '5f03ee3b0c28f08b12f985fc9e4ae8c8',

    },

    mounted() {
        

    },

    methods: {
        getFilms(searchString){
            this.films = [];
            axios
                .get('https://api.themoviedb.org/3/search/multi', {
                    params: {
                        api_key: this.apiK, 
                        query: searchString
                    }
                })
                .then((response) => {
                    console.log(response);
                    let tmp = response.data.results;
                    tmp.forEach(element => {
                        if (element.media_type != "person")
                            this.films.push(element);
                    });
                    console.log(this.films);
                });
        },

        getFlag(index){
            let flag = 'https://www.unknown.nu/flags/images/' + this.films[index].original_language + '-100';
            return flag;
        },

        getVote(index){
            let vote = Math.ceil(this.films[index].vote_average/2);
            return vote;
        },
        
        getPoster(index){
            if (this.films[index].poster_path){
                const urlPre = 'https://image.tmdb.org/t/p/';
                let poster = urlPre + 'w342' + this.films[index].poster_path;
                return poster;
            } else {
                return `img/noimage.png`
            }
        },

        getGenres(index){

        },

        getActors(index){
            let id = this.films[index].id;
            let filmActors = [];
            axios
                .get('https://api.themoviedb.org/3/movie/' +  id + '/credits', {
                    params: {
                        api_key: this.apiK
                    }
                })
                .then((response) => {
                    console.log(response);
                    let tmp = response.data.results;
                    tmp.forEach(element => {
                        if (i < 5)
                            filmActors.push(element);
                        i++;
                    });
                    console.log(filmActors);
                });
            return filmActors;
        }
    }
});