<template>
  <div class="container">
    <a class="anchor" name="branding" id="branding"></a>
    <h3>{{ $t("branding_title") }}</h3>
    <div class="row branding">
      <div class="col-12 col-sm-6 col-md-4">
        <div class="card">
          <div class="card-body">
            <h4>{{ $t(brandings.name1) }}</h4>
            <div class="palette" :class="brandings.palette"></div>
            <p>
              HEX: <strong>{{ brandings.hex }}</strong
              ><br />
              RGB: <strong>{{ brandings.rgb }}</strong
              ><br />
              CMYK: <strong>{{ brandings.cmyk }}</strong
              ><br />
              RAL: <strong>{{ brandings.ral }}</strong
              ><br />
              Pantone: <strong>{{ brandings.pantone }}</strong>
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-4">
        <div class="card">
          <div class="card-body">
            <h4>{{ $t(brandings.name2) }}</h4>
            <h5 class="card-title">
              <span class="correct"><img src="/static/img/correct.png"/></span>
              {{ brandings.brandname }}
            </h5>
            <p>
              <span v-for="(item, index) in brandings.item" :key="index">
                <img src="/static/img/wrong.png" /><span class="wrong"> {{ item.name }}</span
                >,<br />
              </span>
              ...
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-4">
        <div class="card font">
          <div class="card-body">
            <h4>{{ $t(brandings.name3) }}</h4>
            <h6>
              <small>{{ $t("branding_font_text") }}</small> &rarr; Noto Sans
            </h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ligula diam,
              vulputate ut diam vel, fringilla pharetra nulla.
            </p>
            <a href="https://www.google.com/get/noto/" target="_blank"
              >&darr; {{ $t("branding_font_download") }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BrandingVue",
  props: ["brandings"],
  data() {
    return {};
  }
};
</script>
