<template>
  <div class="row featured__filter">
    <!-- Component Item Here -->
    <div
      class="col-lg-3 col-md-4 col-sm-6"
      v-for="movie in movies"
      :key="movie.id"
    >
      <NuxtLink
        :to="{ name: 'movie-id', params: { id: movie.id } }"
        class="featured__item"
      >
        <img class="featured__item__pic" :src="movie.link" />
        <div class="featured__item__text">
          <h5>{{ movie.name }}</h5>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import MovieItem from "./MovieItem.vue";

export default {
  components: {
    "app-movie-item": MovieItem,
  },
  props: { movies: Array },
};
</script>