<template>
  <div id="app">
      <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
          <div class="container">
              <a class="navbar-brand" href="#"><img src="/static/img/logos/logo-gb-group-white-ontranspbg.png" height="75px"></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav mr-auto">
              &nbsp;
              </ul>
              <ul class="navbar-nav">
                  <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" id="gbgroup" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <img src="" width="25"> GB Group
                      </a>
                      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gbgroup">
                          <a class="dropdown-item" href="/#logo">Logos</a>
                          <a class="dropdown-item" href="/#branding">Branding</a>
                          <a class="dropdown-item" href="/#audio">Audio</a>
                          <a class="dropdown-item" href="/#introOutro">Video Intro/Outro</a>
                          <a class="dropdown-item" href="/#link">Links</a>
                          <a class="dropdown-item" href="/#subsidiarie">Subsidiaries</a>
                          <a class="dropdown-item" href="/#press">Press Releases</a>
                          <a class="dropdown-item" href="/#photo">Photos</a>
                          <a class="dropdown-item" href="/#print">Print Graphic Charter</a>
                          <a class="dropdown-item" href="/#powerpoint">Powerpoint Template</a>
                          <a class="dropdown-item" href="/#icon">Icons</a>
                          <router-link to="/"></router-link>
                      </div>
                  </li>
                  <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" id="gregoirebesson" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <img src="" width="25"> Grégoire Besson
                      </a>
                      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gregoirebesson">
                          <a class="dropdown-item" href="/gregoire-besson#logo">Logos</a>
                          <a class="dropdown-item" href="/gregoire-besson#branding">Branding</a>
                          <a class="dropdown-item" href="/gregoire-besson#range">Range</a>
                          <a class="dropdown-item" href="/gregoire-besson#introOutro">Video Intro/Outro</a>
                          <a class="dropdown-item" href="/gregoire-besson#link">Links</a>
                          <a class="dropdown-item" href="/gregoire-besson#photo">Photos</a>
                          <a class="dropdown-item" href="/gregoire-besson#leaflet">Leaflets</a>
                          <a class="dropdown-item" href="/gregoire-besson#video">Videos</a>
                          <a class="dropdown-item" href="/gregoire-besson#price">Pricelists</a>
                          <a class="dropdown-item">Posters</a>
                          <router-link to="/gregoire-besson"></router-link>
                      </div>
                  </li>
                  <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" id="rabe" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <img src="" width="25"> Rabe
                      </a>
                      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="rabe">
                          <a class="dropdown-item" href="/rabe#ogo">Logos</a>
                          <a class="dropdown-item" href="/rabe#branding">Branding</a>
                          <a class="dropdown-item" href="/rabe#introOutro">Video Intro/Outro</a>
                          <a class="dropdown-item" href="/rabe#link">Links</a>
                          <a class="dropdown-item" href="/rabe#photo">Photos</a>
                          <a class="dropdown-item" href="/rabe#leaflet">Leaflets</a>
                          <a class="dropdown-item" href="/rabe#video">Videos</a>
                          <a class="dropdown-item" href="/rabe#price">Pricelists</a>
                          <router-link to="/rabe"></router-link>
                      </div>
                  </li>
                  <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" id="agriway" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <img src="" width="25"> Agriway
                      </a>
                      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="agriway">
                          <a class="dropdown-item" href="/agriway#logo">Logos</a>
                          <a class="dropdown-item" href="/agriway#branding">Branding</a>
                          <a class="dropdown-item" href="/agriway#video">Video Intro/Outro</a>
                          <a class="dropdown-item" href="/agriway#link">Links</a>
                          <router-link to="/agriway"></router-link>
                      </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="languages" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-html="displayLanguage($i18n.locale)">
                    </a>
                    <div  class="dropdown-menu dropdown-menu-right" aria-labelledby="languages">
                        <button v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)" class="dropdown-item">
                             {{entry.title}}
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
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */
import i18n from './i18n'


export default {
  data() {
    return {
      languages: [
        { language: 'fr', title: 'FR' },
        { language: 'en', title: 'EN' },
        { language: 'de', title: 'DE' },
        { language: 'it', title: 'IT' },
        { language: 'pl', title: 'PL' },
        { language: 'ru', title: 'RU' },
        { language: 'uk', title: 'UK' }
      ]
    };
  },
  methods: {
    changeLocale(locale) {
        i18n.locale = locale;
    },
    displayLanguage(language) {
    const lang = ({
      en: 'English',
      fr: 'Français',
      de: 'Deutsch',
      it: 'Italiano',
      pl: 'Polski',
      ru: 'Pусский',
      uk: 'український',
      et: 'eesti keel',
    })[language];
    return lang;
  },
  }
}
</script>

<style>
@import '../static/css/bootstrap.min.css';
@import '../static/css/style.css';
</style>
