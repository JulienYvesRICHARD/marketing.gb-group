/* eslint-disable */
<template>
    <div class="container" id="link">
      <a class="anchor" name="link"></a>
      <h3>{{ $t('links_title') }}</h3>
      <div class="row links">
        <div class="col-12 col-sm-6 col-md-3" v-for="social in socials" :key="social.title">
          <div class="card">
            <a :href="social.link" target="_blank">
              <img class="card-img-top img-thumbnail" :src="social.image.src" :alt="social.image.label">
            </a>
            <div class="card-body">
              <h4 class="card-title"><small>{{ $t(social.title) }}</small></h4>
              <p class="card-text"><small>{{ $t(social.description) }}</small></p>
              <a :href="social.link" target="_blank">{{ $t('links_view_page') }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'LinkVue',
  props: ['socials'],
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
