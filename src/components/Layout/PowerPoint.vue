/* eslint-disable */
<template>
  <div class="container" id="powerpoint">
    <a class="anchor" name="powerpoint"></a>
    <h3>{{ $t('powerpoint_title') }}</h3>
    <div class="row graphichcarter" v-for="powerPointTemplate in powerPointTemplates" :key="powerPointTemplate">
      <div class="col-6">
        <img :src="powerPointTemplate.image.src" :alt="powerPointTemplate.image.label">
      </div>
      <div class="col-6">
        <p>{{ $t('powerpoint_description')}}</p>
        <p><a :href="powerPointTemplate.href.src1" download>{{ $t('powerpoint_download') }} 19/9 ratio</a></p>
        <p><a :href="powerPointTemplate.href.src2" download>{{ $t('powerpoint_download') }} 4/3 ratio</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrintVue',
  props: ['powerPointTemplates'],
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
