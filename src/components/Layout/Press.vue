<template>
  <div class="container" id="press">
    <a class="anchor" name="press"></a>
    <h3>{{ $t("press_release_title") }}</h3>
    <div class="row pressreleases">
      <div class="col-12">
        <table class="table table-striped table-bordered">
          <thead class="thead-light">
            <tr>
              <th scope="col">{{ $t("press_release_date") }}</th>
              <th scope="col">{{ $t("press_release_subtitle") }}</th>
              <th scope="col">{{ $t("press_release_brand") }}</th>
              <th scope="col">{{ $t("press_release_language") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr scope="row" v-for="pressRelease in pressReleases" :key="pressRelease.date">
              <td>{{ pressRelease.date }}</td>
              <td>
                <a :href="pressRelease.href" style="text-decoration: underline;" download>{{
                  pressRelease.title
                }}</a>
              </td>
              <td>{{ pressRelease.brand }}</td>
              <td>
                <span v-for="langue in pressRelease.langues" :key="langue"
                  >{{ $t(langue.name) }},
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PressVue",
  props: ["pressReleases"],
  data() {
    return {};
  }
};
</script>
