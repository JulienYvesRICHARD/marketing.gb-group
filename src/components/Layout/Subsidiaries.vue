<template>
  <div class="container" id="subsidiarie">
    <a class="anchor" name="subsidiarie"></a>
    <h3>{{ $t("subsidiaries_title") }}</h3>
    <div class="row subsidiary" v-for="subsidiarie in subsidiaries" :key="subsidiarie.name">
      <div class="col-4">
        <img
          :src="
            'https://maps.googleapis.com/maps/api/staticmap?center=' +
              subsidiarie.street +
              ',' +
              subsidiarie.city +
              ',' +
              subsidiarie.country +
              '&zoom=4&size=450x300&maptype=roadmap&markers=color:red%7C' +
              subsidiarie.gpscoordinate +
              '&key=AIzaSyBnVrN5f_hnVMr-IqbC-KCLVEaxxxSS4nc'
          "
          class="img-fluid"
        />
      </div>
      <div class="col-4">
        <h4>{{ subsidiarie.name }}</h4>
        <address>
          {{ subsidiarie.street }}
          <br />
          {{ subsidiarie.city }}
          <br />
          {{ subsidiarie.country }}
        </address>
        <p v-if="subsidiarie.country_covered != undefined">
          {{ $t("subsidiaries_country_covered") }} : <em>{{ subsidiarie.country_covered }}</em>
        </p>
        <p>
          Tel: <strong>{{ subsidiarie.phone }}</strong>
        </p>
        <p>Lat., lon.: {{ subsidiarie.gpscoordinate }}</p>
      </div>
      <div class="col-4">
        <img :src="subsidiarie.image.src" :alt="subsidiarie.label" class="img-fluid" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubsidiairesVue",
  props: ["subsidiaries"],
  data() {
    return {};
  }
};
</script>
