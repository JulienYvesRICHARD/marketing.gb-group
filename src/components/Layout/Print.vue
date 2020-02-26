<template>
  <div class="container">
    <a class="anchor" name="print" id="print"></a>
    <h3>{{ $t("print_charter_title") }}</h3>
    <div class="row graphichcarter" v-for="printCharter in printCharters" :key="printCharter.href">
      <div class="col-6">
        <img :src="printCharter.image.src" :alt="printCharter.image.label" />
      </div>
      <div class="col-6">
        <p>{{ $t("print_charter_description") }}</p>
        <p>
          <a :href="printCharter.href" download>{{ $t("print_charter_download") }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PrintVue",
  props: ["printCharters"],
  data() {
    return {};
  }
};
</script>
