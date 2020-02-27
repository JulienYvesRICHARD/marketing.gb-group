<template>
  <div id="app">
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#"
          ><img src="/static/img/logos/logo-gb-group-white-ontranspbg.png" height="75px"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav mr-auto">
            &nbsp;
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="gbgroup"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src="" width="25" /> GB Group
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gbgroup">
                <a class="dropdown-item" href="/#logo">{{ $t("menu_logos") }}</a>
                <a class="dropdown-item" href="/#branding">{{ $t("menu_branding") }}</a>
                <a class="dropdown-item" href="/#sound">{{ $t("menu_audio") }}</a>
                <a class="dropdown-item" href="/#introOutro">{{ $t("menu_video_intro") }}</a>
                <a class="dropdown-item" href="/#link">{{ $t("menu_links") }}</a>
                <a class="dropdown-item" href="/#subsidiarie">{{ $t("menu_subsidiaries") }}</a>
                <a class="dropdown-item" href="/#press">{{ $t("menu_press") }}</a>
                <a class="dropdown-item" href="/#photo">{{ $t("menu_photos") }}</a>
                <a class="dropdown-item" href="/#print">{{ $t("menu_videos") }}</a>
                <a class="dropdown-item" href="/#powerpoint">{{ $t("menu_print") }}</a>
                <a class="dropdown-item" href="/#icon">{{ $t("menu_icons") }}</a>
                <router-link to="/"></router-link>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="gregoirebesson"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src="" width="25" /> Grégoire Besson
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gregoirebesson">
                <a class="dropdown-item" href="/gregoire-besson#photo">{{ $t("menu_photos") }}</a>
                <a class="dropdown-item" href="/gregoire-besson#video">{{ $t("menu_videos") }}</a>
                <a class="dropdown-item" href="/gregoire-besson#link">{{ $t("menu_links") }}</a>
                <a class="dropdown-item" href="/gregoire-besson#newleaflet">{{
                  $t("menu_new_leaflets")
                }}</a>
                <a class="dropdown-item" href="/gregoire-besson#oldleaflet">{{
                  $t("menu_old_leaflets")
                }}</a>
                <a class="dropdown-item" href="/gregoire-besson#price">{{
                  $t("menu_pricelist")
                }}</a>
                <a class="dropdown-item" href="/gregoire-besson#poster">{{ $t("menu_posters") }}</a>
                <a class="dropdown-item" href="/gregoire-besson#logo">{{ $t("menu_logos") }}</a>
                <a class="dropdown-item" href="/gregoire-besson#branding">{{
                  $t("menu_branding")
                }}</a>
                <a class="dropdown-item" href="/gregoire-besson#range">{{ $t("menu_range") }}</a>
                <a class="dropdown-item" href="/gregoire-besson#introOutro">{{
                  $t("menu_video_intro")
                }}</a>
                <router-link to="/gregoire-besson"></router-link>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="rabe"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src="" width="25" /> Rabe
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="rabe">
                <a class="dropdown-item" href="/rabe#logo">{{ $t("menu_logos") }}</a>
                <a class="dropdown-item" href="/rabe#branding">{{ $t("menu_branding") }}</a>
                <a class="dropdown-item" href="/rabe#introOutro">{{ $t("menu_video_intro") }}</a>
                <a class="dropdown-item" href="/rabe#link">{{ $t("menu_links") }}</a>
                <a class="dropdown-item" href="/rabe#photo">{{ $t("menu_photos") }}</a>
                <a class="dropdown-item" href="/rabe#leaflet">{{ $t("menu_leaflets") }}</a>
                <a class="dropdown-item" href="/rabe#video">{{ $t("menu_videos") }}</a>
                <a class="dropdown-item" href="/rabe#price">{{ $t("menu_pricelist") }}</a>
                <router-link to="/rabe"></router-link>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="agriway"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src="" width="25" /> Agriway
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="agriway">
                <a class="dropdown-item" href="/agriway#logo">{{ $t("menu_logos") }}</a>
                <a class="dropdown-item" href="/agriway#branding">{{ $t("menu_branding") }}</a>
                <a class="dropdown-item" href="/agriway#introOutro">{{ $t("menu_video_intro") }}</a>
                <a class="dropdown-item" href="/agriway#link">{{ $t("menu_links") }}</a>
                <router-link to="/agriway"></router-link>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="languages"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                v-html="displayLanguage($i18n.locale)"
              >
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="languages">
                <button
                  v-for="entry in languages"
                  :key="entry.title"
                  @click="changeLocale(entry.language)"
                  class="dropdown-item"
                >
                  {{ entry.title }}
                </button>
              </div>
            </li>
            <li class="nav-item">
              &nbsp;
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
