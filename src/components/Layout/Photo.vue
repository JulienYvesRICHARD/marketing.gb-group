<template>
  <div class="container">
    <a class="anchor" id="photo" name="photo"></a>
    <h3>{{ $t("photos_title") }}</h3>
    <div class="row photos">
      <div class="col-6" v-for="photo in photos.item" :key="photo.title">
        <PhotoItemVue
          :range="photo.range"
          :title="photo.title"
          :brand="photos.brand"
        ></PhotoItemVue>
      </div>
    </div>
  </div>
</template>

<script>
import PhotoItemVue from "@/components/photo/PhotoItem.vue";

export default {
  name: "PhotoVue",
  props: ["photos"],
  data() {
    return {
      show: false
    };
  },
  components: {
    PhotoItemVue
  }
};
</script>
