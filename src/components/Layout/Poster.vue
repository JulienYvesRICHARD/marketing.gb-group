/* eslint-disable */
<template>
  <div class="container" id="poster">
    <a class="anchor" name="poster"></a>
    <h3>{{ $t('poster_title') }}</h3>
    <div class="row justify-content-center pricelists">
      <div class="col-6 col-md-2" v-for="poster in posters" :key="poster.title">
        <div class="card text-center">
          <div class="card-body" >
            <h6>{{ poster.title }}</h6>
            <img class="img-fluid" :src="poster.image.src" :atl="poster.image.label">
            <p class="pricedl"><a :href="poster.link"  target="_blank" download>{{ $t('poster_download') }}</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PriceVue',
  props: ['posters'],
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
