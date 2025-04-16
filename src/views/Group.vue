<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col">
          <a class="anchor" name="logo" id="main"></a>
          <h1>{{ $t("main_title") }}</h1>
        </div>
      </div>

      <PricesVue :prices="pricesGB"></PricesVue>
      <LeafletsVue :leaflets="leafletModelsGB"></LeafletsVue>
      <LeafletsVue :leaflets="leafletRangesGB"></LeafletsVue>
      <PhotoVue :photos="photosGB"></PhotoVue>
      <LogoVue :logos="logosGB"></LogoVue>
      <PhotoVue v-if="photosAgriway.length > 0" :photos="photosAgriway"></PhotoVue>
      <LeafletsVue v-if="leafletModelsAgriway['item'] && leafletModelsAgriway.length > 0"
        :leaflets="leafletModelsAgriway"></LeafletsVue>
      <LeafletsVue v-if="leafletRangesAgriway['item'] && leafletRangesAgriway.length > 0"
        :leaflets="leafletRangesAgriway"></LeafletsVue>
      <PricesVue v-if="pricesAgriway.length > 0" :prices="pricesAgriway"></PricesVue>
      <LogoVue v-if="logosAgriway['item'] && logosAgriway['item'].length > 0" :logos="logosAgriway"></LogoVue>

      <p class="lead">
        {{ $t("main_description")
        }}<a href="mailto:france.marketing@gb-group.co">france.marketing@gb-group.co</a>.
      </p>
    </div>
    <FooterVue />
  </div>
</template>

<script>
// @ is an alias to /src
import PhotoVue from '@/components/Layout/Photo.vue'
import LogoVue from '@/components/Layout/Logos.vue'
import FooterVue from '@/components/Footer.vue'
import LeafletsVue from '@/components/Layout/Leaflets.vue'
import PricesVue from '@/components/Layout/Price.vue'

// Gregoire Besson related datas
import photosGB from '@/data/photos-gb.json'
import leafletModelsGB from '@/data/leaflet-models-gb.json'
import leafletRangesGB from '@/data/leaflet-ranges-gb.json'
import pricesGB from '@/data/prices-gb.json'
import logosGB from '@/data/logos-gb.json'

// Agriway related datas
import photosAgriway from '@/data/photos-agriway.json'
import leafletModelsAgriway from '@/data/leaflet-models-agriway.json'
import leafletRangesAgriway from '@/data/leaflet-ranges-agriway.json'
import pricesAgriway from '@/data/prices-agriway.json'
import logosAgriway from '@/data/logos-agriway.json'

export default {
  name: "home",
  data() {
    return {
      photosGB,
      leafletModelsGB,
      leafletRangesGB,
      pricesGB,
      logosGB,
      photosAgriway,
      leafletModelsAgriway,
      leafletRangesAgriway,
      pricesAgriway,
      logosAgriway
    };
  },
  components: {
    PhotoVue,
    LeafletsVue,
    PricesVue,
    LogoVue,
    FooterVue
  }
};
</script>

<style>
.lead {
  margin: 50px 0 !important;
}
</style>
