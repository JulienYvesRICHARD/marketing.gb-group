/* eslint-disable */
<template>
  <div class="container" id="price">
    <a class="anchor" name="price"></a>
    <h3>{{ $t('pricelist_title') }}</h3>
    <div class="row justify-content-center pricelists">
      <div class="col-6 col-md-2" v-for="price in prices" :key="price.title">
        <div class="card text-center">
          <div class="card-body">
            <h6>{{ price.title }}</h6>
            <img class="img-fluid" :src="price.image.src" :atl="price.image.label">
            <p class="pricedl"><a :href="price.link"  target="_blank" download>{{ $t('pricelist_download') }}</a></p>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <p><small>{{ $t('pricelist_notice_text') }}</small></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PriceVue',
  props: ['prices'],
  data () {
    return {}
  }
}
</script>
