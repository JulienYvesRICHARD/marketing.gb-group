<template>
  <div class="home">
    <div class="container" id="main">
      <div class="row">
        <div class="col">
          <h1>{{ $t('main_title') }}</h1>
          <p class="lead">{{ $t('main_description') }}<a href="mailto:webmaster@gb-group.co">webmaster@gb-group.co</a>.</p>
        </div>
      </div>
      <br>
      <div class="container">
        <div class="row">
          <div class="col-12">
              <h2>Rabe</h2>
          </div>
        </div>
      </div>
      <br>
      <LogoVue :logos="logos"></LogoVue>
      <BrandingVue :brandings="brandings"></BrandingVue>
      <IntroOutroVue :introOutros="introOutros"></IntroOutroVue>
      <LinksVue :socials="socials"></LinksVue>
      <PhotoVue :photos="photos"></PhotoVue>
      <LeafletsVue :leaflets="leaflets"></LeafletsVue>
      <VideosVue :videos="videos"></VideosVue>
      <PricesVue :prices="prices"></PricesVue>
    </div>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */
import LogoVue from '@/components/Layout/Logos.vue'
import BrandingVue from '@/components/Layout/Branding.vue'
import IntroOutroVue from '@/components/Layout/Intro-Outro.vue'
import LinksVue from '@/components/Layout/Links.vue'
import PhotoVue from '@/components/Layout/Photo.vue'
import LeafletsVue from '@/components/Layout/Leaflets.vue'
import VideosVue from '@/components/Layout/Videos.vue'
import PricesVue from '@/components/Layout/Price.vue'
import FooterVue from '@/components/Footer.vue'

export default {
  name: 'rabe',
  data() {
    return {
      logos: {
        "item":[
          {
            "name": "logo_white_on_color_description",
            "image": {
                "src": "/static/img/logos/logo-rabe-white-oncolor.png",
                "label": "Travail du sol logo Rabe, blanc sur fond de couleur"
            },
            "jpg": "/static/img/logos/logo-rabe-white-oncolor.jpg",
            "png": "/static/img/logos/logo-rabe-white-oncolor.png",
            "eps": "/static/img/logos/logo-rabe-white-oncolor.eps",
            "svg": "/static/img/logos/logo-rabe-white-oncolor.svg"
          },
          {
            "name": "logo_color_on_white",
            "image": {
                "src": "/static/img/logos/logo-rabe-color-onwhite.png",
                "label": "Travail du sol logo Rabe, color on white"
            },
            "jpg": "/static/img/logos/logo-rabe-color-onwhite.jpg",
            "png": "/static/img/logos/logo-rabe-color-onwhite.png",
            "eps": "/static/img/logos/logo-rabe-color-onwhite.eps",
            "svg": "/static/img/logos/logo-rabe-color-onwhite.svg"
          },
          {
            "name": "logo_white_on_transparent",
            "image": {
                "src": "/static/img/logos/logo-rabe-white-ontranspbg.png",
                "label": "Travail du sol logo Rabe, white on transparent"
            },
            "png": "/static/img/logos/logo-rabe-white-ontranspbg.png",
            "eps": "/static/img/logos/logo-rabe-white-ontranspbg.eps",
            "svg": "/static/img/logos/logo-rabe-white-ontranspbg.svg"
          },
          {
            "name": "logo_white_on_black",
            "image": {
                "src": "/static/img/logos/logo-rabe-white-onblack.png",
                "label": "Travail du sol logo Rabe, white on black"
            },
            "jpg": "/static/img/logos/logo-rabe-white-onblack.jpg",
            "png": "/static/img/logos/logo-rabe-white-onblack.png",
            "eps": "/static/img/logos/logo-rabe-white-onblack.eps",
            "svg": "/static/img/logos/logo-rabe-white-onblack.svg"
          }
        ],
        "class": "btn-Rabe"
      },
      brandings: {
        "name1": "branding_color_title",
        "palette": "pal-0076BD",
        "hex": "#0076BD",
        "rgb": "0 118 189",
        "cmyk": "100 40 0 0",
        "ral": "5015",
        "pantone": "3005",
        "name2": "branding_spelling_title",
        "brandname": "Grégoire Besson",
        "item": [
          {
            "name": "rabe"
          },
          {
            "name": "RABE"
          }
        ],
        "name3": "branding_font_title",
        "text": "branding_font_text",
        "download": "branding_font_download"
      },
      introOutros: [
        {
          "title": "video_intro_title",
          "link_youtube": "https://www.youtube.com/embed/OHJ4RfjAdoQ?rel=0&amp;showinfo=0",
          "link_mp4": "https://marketing.gb-group.co/videos/rabe-intro.mp4",
          "link_mov": "https://marketing.gb-group.co/videos/rabe-intro.mov"
        },
        {
          "title": "video_outro_title",
          "link_youtube": "https://www.youtube.com/embed/eOCvgr0chKI?rel=0&amp;showinfo=0",
          "link_mp4": "https://marketing.gb-group.co/videos/rabe-outro.mp4",
          "link_mov": "https://marketing.gb-group.co/videos/rabe-outro.mov"
        }
      ],
      socials: [
        {
          "title": "links_rabe_website_title",
          "link": "http://rabe-gb.de",
          "image": {
            "src": "/static/img/screen-captures/rabe-gb-de.png",
            "label": "Website Rabe"
          },
          "description": "links_rabe_website_description"
        },
        {
          "title": "links_rabe_facebook_title",
          "link": "https://www.facebook.com/Rabe-Gregoire-Besson-GmbH-817104705125797/",
          "image": {
            "src": "/static/img/screen-captures/facebook-rabe.png",
            "label": "Facebook Rabe"
          },
          "description": "links_rabe_facebook_description"
        },
        {
          "title": "links_rabe_youtube_title",
          "link": "https://www.youtube.com/user/RabeVideos/",
          "image": {
            "src": "/static/img/screen-captures/youtube-rabe.png",
            "label": "You Tube Chanel Rabe"
          },
          "description": "links_rabe_youtube_description"
        }
      ],
      photos: {
        "brand": "rabe",
        "item": [
          {
            "title": "photo_blackbird_title",
            "range": "blackbird"
          },
          {
            "title": "photo_landbird_title",
            "range": "landbird"
          },
          {
            "title": "photo_fieldbird_title",
            "range": "fieldbird"
          },
          {
            "title": "photo_sunbird_title",
            "range": "sunbird"
          },
          {
            "title": "photo_phoenix_title",
            "range": "phoenix"
          },
          {
            "title": "photo_corvus_title",
            "range": "corvus"
          },
          {
            "title": "photo_bluebird_title",
            "range": "bluebird"
          },
          {
            "title": "photo_sturmvogel_title",
            "range": "sturmvogel"
          },
          {
            "title": "photo_albatros_title",
            "range": "albatros"
          },
          {
            "title": "photo_condor_title",
            "range": "condor"
          },
          {
            "title": "photo_kormoran_title",
            "range": "kormoran"
          },
          {
            "title": "photo_marabu_title",
            "range": "marabu"
          },
          {
            "title": "photo_ecodrill_title",
            "range": "ecodrill"
          },
          {
            "title": "photo_turboseed_title",
            "range": "turboseed"
          },
          {
            "title": "photo_pilot_title",
            "range": "pilot"
          },
          {
            "title": "photo_adler_title",
            "range": "adler"
          },
          {
            "title": "photo_digger_title",
            "range": "digger"
          }
        ]
      },
      leaflets: {
        "title": "leaflets_title",
        "item":[
          {
            "key": "element1",
            "blocks": [
              {
                "trad": "leaflets_rabe_title1",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/rabe/bestsellers-de.pdf"
              },
              {
                "trad": "leaflets_rabe_title2",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/rabe/parts-de.pdf"
              },
              {
                "trad": "leaflets_rabe_title3",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/rabe/genuineparts-flyer-de.pdf"
              },
              {
                "trad": "leaflets_rabe_title4",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/rabe/spreader-de.pdf"
              },
              {
                "trad": "leaflets_rabe_title5",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/rabe/striptill-de.pdf"
              }
            ],
          },
          {
            "key": "element2",
            "blocks": [
              {
                "trad": "leaflets_rabe_title6",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/rabe/ploughs-de.pdf"
              },
              {
                "trad": "leaflets_rabe_title7",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/rabe/ploughs-en.pdf"
              },
              {
                "trad": "leaflets_rabe_title8",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/rabe/ploughs-fr.pdf"
              },
            ],
          },
          {
            "key": "element3",
            "blocks": [
              {
                "trad": "leaflets_rabe_title9",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/rabe/seeding-de.pdf"
              },
              {
                "trad": "leaflets_rabe_title10",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/rabe/seeding-en.pdf"
              },
              {
                "trad": "leaflets_rabe_title11",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/rabe/seeding-fr.pdf"
              }
            ],
          },
          {
            "key": "element4",
            "blocks": [
              {
                "trad": "leaflets_rabe_title12",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/rabe/stubble-cultivation-de.pdf"
              },
              {
                "trad": "leaflets_rabe_title13",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/rabe/stubble-cultivation-de.pdf"
              },
              {
                "trad": "leaflets_rabe_title14",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/rabe/stubble-cultivation-de.pdf"
              }
            ],
          }
        ]
      },
      videos: {
        "title": "videos_title",
        "item": [
          {
            "key": "element1",
            "subtitle": "video_general_title",
            "blocks": [
             
              {
                "name": "Albatros",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/rabe/albatros.mp4"
              },
              {
                "name": "Condor",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/rabe/condor.mp4"
              },
              {
                "name": "Marabu",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/rabe/marabu.mp4"
              },
              {
                "name": "Kormoran",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/rabe/kormoran.mp4"
              },
              {
                "name": "Kormoran 2",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/rabe/kormoran-2.mp4"
              }
            ]
          },
          {
            "key": "element2",
            "subtitle": "video_general_title",
            "blocks": [
              {
                "name": "Adler",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/rabe/adler.mp4"
              },
              {
                "name": "Corvus PKE + Turboseed",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/rabe/combi-digger-corvus-vke-turboseed.mp4"
              },
              {
                "name": "Corvus PKE + Planipack",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/rabe/corvus-pke-planipack.mp4"
              },
              {
                "name": "Bluebird",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/rabe/bluebird.mp4"
              },
              {
                "name": "Sturmvogel",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/rabe/sturmvogel.mp4"
              },
              {
                "name": "Sunbird",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/rabe/sunbird.mp4"
              },
              {
                "name": "Tigris",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/rabe/tigris.mp4"
              },
              {
                "name": "Turboseed",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/rabe/turboseed.mp4"
              }
            ]
          },
          {
            "key": "element3",
            "subtitle": "Fieldbird",
            "blocks": [
              {
                "name": "Fieldbird F",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/rabe/fieldbird-f.mp4"
              },
              {
                "name": "Fieldbird R",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/rabe/fieldbird-r.mp4"
              },
              {
                "name": "Fieldbird SP2",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/rabe/fieldbird-sp2.mp4"
              },
              {
                "name": "Fieldbird SP3",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/rabe/fieldbird-sp3.mp4"
              },
              {
                "name": "Fieldbird SP4",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/rabe/fieldbird-sp4.mp4"
              }
            ]
          },
          {
            "key": "element4",
            "subtitle": "Corporate",
            "blocks": [
              {
                "name": "Corporate",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/rabe/corporate.mp4"
              }
            ]
          }
        ]
      },
      prices: [
        {
          "title": "Machines (EN) € 2018",
          "link": "http://marketing.cellar.services.clever-cloud.com/pricelists/gregoire-besson/pricelist-rabe-en-eur.pdf",
          "image": {
            "src": "/static/img/pricelists/rabe_FR_3.png",
            "label": "Price list Rabe 2018 in euros, english version"
          }
        },
        {
          "title": "Machines (EN) £ 2018",
          "link": "http://marketing.cellar.services.clever-cloud.com/pricelists/gregoire-besson/pricelist-rabe-en-pounds.pdf",
          "image": {
            "src": "/static/img/pricelists/rabe_FR_3.png",
            "label": "Price list Rabe 2018 in pounds, english version"
          }
        },
        {
          "title": "Machines (FR) 2018",
          "link": "http://marketing.cellar.services.clever-cloud.com/pricelists/gregoire-besson/pricelist-rabe-fr.pdf",
          "image": {
            "src": "/static/img/pricelists/rabe_FR_3.png",
            "label": "Liste de prix Rabe 2018 en euros, version française"
          }
        },
        {
          "title": "Machines (DE)",
          "link": "http://marketing.cellar.services.clever-cloud.com/pricelists/rabe/pricelist-rabe-de.pdf",
          "image": {
            "src": "/static/img/pricelists/rabe.jpg",
            "label": "PreisListe Rabe 2018 in euros auf Deutsch"
          }
        }
      ]
    };
  },
  components: {
    LogoVue,
    BrandingVue,
    IntroOutroVue,
    LeafletsVue,
    VideosVue,
    LinksVue,
    PhotoVue,
    PricesVue,
    FooterVue
  }
}
</script>
