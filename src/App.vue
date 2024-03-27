<template>
  <div id="app">
    <nav class="navbar sticky-top navbar-expand-lg navbar-red">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="/static/img/logos/logo-gregoire-besson-white-oncolor.png" height="75px" />
        </a>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav mr-auto">
            &nbsp;
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="languages" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false" v-html="displayLanguage($i18n.locale)">
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="languages">
                <button v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)"
                  class="dropdown-item">
                  {{ entry.title }}
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import i18n from "./i18n";

export default {
  data() {
    return {
      languages: [
        { language: "fr", title: "FR" },
        { language: "en", title: "EN" },
        { language: "de", title: "DE" },
        { language: "it", title: "IT" },
        { language: "pl", title: "PL" },
        { language: "ru", title: "RU" },
        { language: "ua", title: "UA" }
      ]
    };
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    },
    displayLanguage(language) {
      const lang = {
        en: "English",
        fr: "Français",
        de: "Deutsch",
        it: "Italiano",
        pl: "Polski",
        ru: "Pусский",
        ua: "український",
        et: "eesti keel"
      }[language];
      return lang;
    }
  }
};
</script>

<style>
@import "../static/css/bootstrap.min.css";
@import "../static/css/style.css";
</style>
