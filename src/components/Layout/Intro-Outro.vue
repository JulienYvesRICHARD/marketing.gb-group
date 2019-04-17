/* eslint-disable */
<template>
  <div class="container" id="introOutro">
    <a class="anchor" name="introOutro"></a>
    <h3>{{ $t('intro_outro_title') }}</h3>
    <div class="row links">
      <div class="col-12 col-sm-6 col-md-6" v-for="introOutro in introOutros" :key="introOutro.title">
        <div class="card">
          <div class="card-body">
            <h4>{{ $t(introOutro.title) }}</h4>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item" :src="introOutro.link_youtube" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <br>
            <a class="btn btn-sm btn-secondary m-1" :href="introOutro.link_mp4" target="_blank" download>{{ $t('introOutro_download')}} MP4</a>
            <a class="btn btn-sm btn-secondary m-1" :href="introOutro.link_mov" target="_blank" download>{{ $t('introOutro_download')}} MOV</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeafletVue',
  props: ['introOutros'],
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
