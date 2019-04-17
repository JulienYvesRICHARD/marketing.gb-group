/* eslint-disable */
<template>
    <div class="container" id="logo">
      <a class="anchor" name="logo"></a>
      <h3>{{ $t('logo_title') }}</h3>
      <div class="row logos-card">
        <div class="col-12 col-sm-6 col-md-3" v-for="logo in logos.item" :key="logo.name">
          <div class="card">
            <img class="card-img-top" :src="logo.image.src" :alt="logo.image.label">
            <div class="card-body">
              <h4 class="card-title"><small>{{ $t(logo.name) }}</small></h4>
              <a :href="logo.jpg" download v-if="(logo.jpg != undefined)">jpg</a>&nbsp;|&nbsp;
              <a :href="logo.png" download>png</a>&nbsp;|&nbsp;
              <a :href="logo.eps" download>eps</a>&nbsp;|&nbsp;
              <a :href="logo.svg" download>svg</a>
            </div>
          </div>
        </div>
        <p v-if="logos.href !=undefined"><a :href="logos.href">{{ $t('logo_old_name')}}</a></p>
      </div>
      <div class="row">
        <div class="col-4">
            <a class="btn text-center" :class="logos.class" href="http://marketing.cellar.services.clever-cloud.com/Legal_information/GB_Group_-_Brands_Use_EN_-_Google_Docs.pdf" target="_blank">{{ $t('logo_download_en') }}</a>
        </div>
        <div class="col-4">
            <a class="btn text-center" :class="logos.class" href="http://marketing.cellar.services.clever-cloud.com/Legal_information/GB_Group_-_Brands_Use_-_Google_Docs.pdf" target="_blank">{{ $t('logo_download_fr') }}</a>
        </div>
        <div class="col-4">
            <a class="btn text-center" :class="logos.class" href="http://marketing.cellar.services.clever-cloud.com/Legal_information/GB_Group_-_Brands_Use_DE_-_Google_Docs.pdf" target="_blank">{{ $t('logo_download_de') }}</a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'LogoVue',
  props: ['logos'],
  data () {
    return {
      lang: 'FR'
    }
  }
}
</script>
