<template>
  <div>
    <section class="featured">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h2>Movie List</h2>
            </div>
            <!-- Genre Component -->
            <MovieGenre @choosenGenre="genre = $event"></MovieGenre>
          </div>
        </div>
        <!-- Movie List Component -->
        <MovieList :movies="movieData"></MovieList>
        <p v-if="movieLenghtData == 0">Tidak ada film bergenre {{ genre }}</p>
      </div>
    </section>
  </div>
</template>

<script>
import MovieGenre from "../components/movies/MovieGenre.vue";
import MovieList from "../components/movies/MovieList.vue";

export default {
  components: {
    MovieGenre,
    MovieList,
  },

  data() {
    return {
      genre: "All",
    };
  },

  computed: {
    movieData() {
      if (this.genre == "All") {
        return this.$store.state.movieData;
      } else {
        const filterDataGenre = this.$store.state.movieData.filter((item) => {
          return item.genre == this.genre;
        });
        return filterDataGenre;
      }
    },
    movieLenghtData() {
      // if (this.movieData.length == 0) {
      //   return 0;
      // } else {
      //   return this.movieData.length;
      // }
      return this.movieData.length == 0 ? 0 : this.movieData.length;
    },
  },
};
</script>

<style>
html,
body {
  height: 100%;
  font-family: "Cairo", sans-serif;
}

h2,
h5,
h6 {
  margin: 0;
  color: #111111;
  font-weight: 400;
  font-family: "Cairo", sans-serif;
}

h2 {
  font-size: 36px;
}

h5 {
  font-size: 18px;
}

h6 {
  font-size: 16px;
}

p {
  font-size: 16px;
  font-family: "Cairo", sans-serif;
  color: #6f6f6f;
  font-weight: 400;
  line-height: 26px;
  margin: 0 0 15px 0;
}

img {
  max-width: 100%;
}

input:focus,
select:focus,
button:focus,
textarea:focus {
  outline: none;
}

a:hover,
a:focus {
  text-decoration: none;
  outline: none;
  color: #ffffff;
}

ul,
ol {
  padding: 0;
  margin: 0;
}

.featured {
  padding-top: 30px;
  padding-bottom: 40px;
}
.section-title {
  margin-bottom: 20px;
  text-align: center;
}

.section-title h2 {
  color: #1c1c1c;
  font-weight: 700;
  position: relative;
}
</style>