<template>
  <div class="container">
    <a class="anchor" name="icon" id="icon"></a>
    <h3>{{ $t("icons_title") }}</h3>
    <div class="row">
      <div class="col-2" v-for="icon in icons" :key="icon.image.label">
        <p class="text-center">
          <img class="img-fluid" :src="icon.image.src" :key="icon.image.label" />
        </p>
        <p class="text-center">
          <a class="btn btn-sm btn-secondary m-1" :href="icon.href.src1" target="_blank" download
            >&darr; PNG</a
          >
          <a class="btn btn-sm btn-secondary m-1" :href="icon.href.src2" target="_blank" download
            >&darr; SVG</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IconsVue",
  props: ["icons"],
  data() {
    return {};
  }
};
</script>
