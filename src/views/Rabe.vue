<template>
  <div class="home">
    <div class="container" id="main">
      <div class="row">
        <div class="col">
          <a class="anchor" name="logo"></a>
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
      <RangeVue :range="brandings_range"></RangeVue>
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
import RangeVue from '@/components/Layout/Range_name.vue'
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
            "name": "logo_white_on_color",
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
        "brandname": "Rabe",
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
      brandings_range: [
        {
          "name": "ALBATROS",
          "machine": [
            {
              "name": "Titre",
              "title": [
              {"goodspelling": "ALBATROS"},
              {"goodspelling": "ALBATROS 40"},
              {"goodspelling": "ALBATROS 50"},
              {"goodspelling": "ALBATROS 60"},
              {"goodspelling": "ALBATROS 70"},
              {"wrongspelling": "ALBATROS40"}
            ]},
            {"stickers": [
              {"goodspelling": "ALBATROS"},
              {"wrongpelling": "ALBATROS 40"},
              {"wrongspelling": "ALBATROS40"}
            ]},
            {"texts": [
              {"goodspelling": "Albatros"},
              {"goodspelling": "Albatros 40"},
              {"goodspelling": "Albatros 50"},
              {"goodspelling": "Alabtros 60"},
              {"goodspelling": "Albatros 70"},
              {"wrongspelling": "albatros60"},
              {"wrongspelling": "albatros 60"},
              {"wrongspelling": "Albatros60"}
            ]},
          ]
        },
        {
          "name": "CONDOR",
          "machine": [
            {"title": [
              {"goodspelling": "CONDOR"},
              {"goodspelling": "CONDOR 70"},
              {"wrongspelling": "CONDOR70"},
              {"wrongspelling": "Condor70"},
              {"wrongspelling": "Condor 70"}
            ]},
            {"stickers": [
              {"goodspelling": "CONDOR"},
              {"wrongpelling": "CONDOR 70"},
              {"wrongspelling": "CONDOR50"}
            ]},
            {"texts": [
              {"goodspelling": "Condor"},
              {"goodspelling": "Condor 70"},
              {"wrongspelling": "Condor70"},
              {"wrongspelling": "CONDOR 70"},
              {"wrongspelling": "Condor70"}
            ]}
          ]
        },
        {
          "name": "KORMORAN",
          "machine": [
            {"title": [
              {"goodspelling": "KORMORAN"},
              {"goodspelling": "KORMORAN 70"},
              {"wrongspelling": "Kormoran"},
              {"wrongspelling": "Kormoran 70"},
              {"wrongspelling": "KORMORAN70"}
            ]},
            {"stickers": [
            {"goodspelling": "KORMORAN"},
              {"goodspelling": "KORMORAN 70"},
              {"wrongspelling": "Kormoran"},
              {"wrongspelling": "Kormoran 70"},
              {"wrongspelling": "KORMORAN70"}
            ]},
            {"texts": [
              {"goodspelling": "Kormoran"},
              {"wrongspelling": "Kormoran 70"},
              {"wrongspelling": "kormoran70"},
              {"wrongspelling": "kormoran 70"},
              {"wrongspelling": "Kormoran70"},
            ]}
          ]
        },
        {
          "name": "MARABU",
          "machine": [
            {"title": [
              {"goodspelling": "MARABU"},
              {"goodspelling": "MARABU 80"},
              {"wrongspelling": "Marabu"},
              {"wrongspelling": "Marabu 80"},
              {"wrongspelling": "MARABU80"}
            ]},
            {"stickers": [
              {"goodspelling": "MARABU"},
              {"wrongspelling": "MARABU 80"},
              {"wrongspelling": "Marabu"},
              {"wrongspelling": "Marabu 80"},
              {"wrongspelling": "MARABU80"}
            ]},
            {"texts": [
              {"goodspelling": "Marabu"},
              {"goodspelling": "Marabu 80"},
              {"wrongspelling": "marabu80"},
              {"wrongspelling": "marabu 80"},
              {"wrongspelling": "Marabu80"},
            ]}
          ]
        },
        {
          "name": "COMBIBIRD",
          "machine": [
            {"title": [
              {"goodspelling": "COMBIBIRD"},
              {"goodspelling": "COMBIBIRD 60"},
              {"goodspelling": "COMBIBIRD T70"},
              {"wrongspelling": "Combibird"},
              {"wrongspelling": "CombibirdT70"},
              {"wrongspelling": "COMBIBIRDt70"},
              {"wrongspelling": "COMBIBIRDT 70"},
              {"wrongspelling": "COMBIBIRD T 70"}
            ]},
            {"stickers": [
              {"goodspelling": "COMBIBIRD"},
              {"wrongpelling": "COMBIBIRD T70"},
              {"wrongspelling": "CombibirdT70"},
              {"wrongspelling": "COMBIBIRD T 70"}
            ]},
            {"texts": [
              {"goodspelling": "Combibird"},
              {"goodspelling": "Combibird 60"},
              {"goodspelling": "Combibird T70"},
              {"wrongspelling": "combibirdT70"},
              {"wrongspelling": "combibird t70"},
              {"wrongspelling": "combibird t 70"}
            ]}
          ]
        },
        {
          "name": "SUNBIRD",
          "machine": [
            {"title": [
              {"goodspelling": "SUNBIRD"},
              {"goodspelling": "SUNBIRD 50"},
              {"goodspelling": "SUNBIRD 60"},
              {"goodspelling": "SUNBIRD 70"},
              {"goodspelling": "SUNBIRD T60"},
              {"goodspelling": "SUNBIRD T70"},
              {"wrongspelling": "Sunbird"},
              {"wrongspelling": "Sunbird70"},
              {"wrongspelling": "SunbirdT 70"},
              {"wrongspelling": "SUNBIRDT70"}
            ]},
            {"stickers": [
              {"goodspelling": "SUNBIRD"},
              {"wrongpelling": "SUNBIRD 70"},
              {"wrongspelling": "Sunbird70"},
              {"wrongspelling": "SUNBIRDT70"}
            ]},
            {"texts": [
              {"goodspelling": "Sunbird"},
              {"goodspelling": "Sunbird 50"},
              {"goodspelling": "Sunbird 60"},
              {"goodspelling": "Sunbird 70"},
              {"goodspelling": "Sunbird T60"},
              {"goodspelling": "Sunbird T70"},
              {"wrongspelling": "sunbirdT70"},
              {"wrongspelling": "SunbirdT 70"},
              {"wrongspelling": "Sunbird t70"},
            ]}
          ]
        },
        {
          "name": "BLACKBIRD",
          "machine": [
            {"title": [
              {"goodspelling": "BLACKBIRD"},
              {"goodspelling": "BLACKBIRD T50"},
              {"goodspelling": "BLACKBIRD T60"},
              {"goodspelling": "BLACKBIRD T70"},
              {"goodspelling": "BLACKBIRD T80"},
              {"wrongspelling": "Blackbird"},
              {"wrongspelling": "BLACK BIRD"},
              {"wrongspelling": "BLACKBIRDT70"},
              {"wrongspelling": "BLACKBIRDt70"},
              {"wrongspelling": "BLACKBIRDT 70"},
              {"wrongspelling": "BLACKBIRD T 70"}
            ]},
            {"stickers": [
              {"goodspelling": "BLACKBIRD"},
              {"wrongpelling": "BLACKBIRD T70"},
              {"wrongpelling": "BLACK BIRD T70"},
              {"wrongspelling": "BLACKBIRDT70"},
              {"wrongspelling": "BLACKBIRD T 70"}
            ]},
            {"texts": [
              {"goodspelling": "Blackbird"},
              {"goodspelling": "Blackbird T50"},
              {"goodspelling": "Blackbird T60"},
              {"goodspelling": "Blackbird T80"},
              {"goodspelling": "Blackbird T90"},
              {"wrongspelling": "BlackbirdT70"},
              {"wrongspelling": "blackbird"},
              {"wrongspelling": "Black Bird T70"},
              {"wrongspelling": "Blackbird t70"},
              {"wrongspelling": "Blackbird t 70"},
            ]}
          ]
        },
        {
          "name": "BLUEBIRD",
          "machine": [
            {"title": [
              {"goodspelling": "BLUEBIRD"},
              {"goodspelling": "BLUEBIRD 50"},
              {"goodspelling": "BLUEBIRD 60"},
              {"goodspelling": "BLUEBIRD 70"},
              {"goodspelling": "BLUEBIRD T70"},
              {"goodspelling": "BLUEBIRD T80"},
              {"wrongspelling": "Bluebird"},
              {"wrongspelling": "Bluebird T70"},
              {"wrongspelling": "BLUEBIRDT70"},
              {"wrongspelling": "BLUEBIRD T 70"},
              {"wrongspelling": "BLUE BIRD T70"}
            ]},
            {"stickers": [
              {"goodspelling": "BLUEBIRD"},
              {"wrongpelling": "BLUEBIRD 40"},
              {"wrongpelling": "BLUE BIRD 40"},
              {"wrongpelling": "BLUEBIRD40"},
              {"wrongspelling": "Bluebird"},
              {"wrongspelling": "Bluebird 40"}
            ]},
            {"texts": [
              {"goodspelling": "Bluebird"},
              {"goodspelling": "Bluebird 50"},
              {"goodspelling": "Bluebird 60"},
              {"goodspelling": "Bluebird 70"},
              {"goodspelling": "Bluebird T70"},
              {"goodspelling": "Bluebird T80"},
              {"wrongspelling": "bluebird"},
              {"wrongspelling": "blue bird"},
              {"wrongspelling": "BluebirdT70"},
              {"wrongspelling": "Blue Bird T70"},
              {"wrongspelling": "Bluebird T 70"}
            ]}
          ]
        },
        {
          "name": "FIELDBIRD",
          "machine": [
            {"title": [
              {"goodspelling": "FIELDBIRD"},
              {"goodspelling": "FIELDBIRD 40"},
              {"goodspelling": "FIELDBIRD 50"},
              {"goodspelling": "FIELDBIRD 60"},
              {"goodspelling": "FIELDBIRD 70"},
              {"goodspelling": "FIELDBIRD T60"},
              {"goodspelling": "FIELDBIRD T70"},
              {"goodspelling": "FIELDBIRD T80"},
              {"wrongspelling": "Fieldbird"},
              {"wrongspelling": "FIELD BIRD"},
              {"wrongspelling": "Fieldbird T70"},
              {"wrongspelling": "FIELDBIRDT70"},
              {"wrongspelling": "FIELDBIRD T 70"}
            ]},
            {"stickers": [
              {"goodspelling": "FIELDBIRD"},
              {"wrongpelling": "Fieldbird "},
              {"wrongpelling": "FIELDBIRD T70"},
              {"wrongspelling": "FieldbirdT70"},
              {"wrongspelling": "FIELDBIRD T 70"},
              {"wrongspelling": "Fieldbird T70"}
            ]},
            {"texts": [
            {"goodspelling": "Fieldbird"},
              {"goodspelling": "Fieldbird 40"},
              {"goodspelling": "Fieldbird 50"},
              {"goodspelling": "Fieldbird 60"},
              {"goodspelling": "Fieldbird 70"},
              {"goodspelling": "Fieldbird T60"},
              {"goodspelling": "Fieldbird T70"},
              {"goodspelling": "Fieldbird T80"},
              {"wrongspelling": "fieldbird"},
              {"wrongspelling": "Field bird"},
              {"wrongspelling": "FieldbirdX T70"},
              {"wrongspelling": "fieldbird XT70"},
              {"wrongspelling": "FieldbirdX T 70"}
            ]}
          ]
        },
        {
          "name": "DIGGER",
          "machine": [
            {"title": [
              {"goodspelling": "DIGGER"},
              {"goodspelling": "DIGGER MONO"},
              {"goodspelling": "DIGGER DUO"},
              {"goodspelling": "DIGGER MONO 60"},
              {"goodspelling": "DIGGER MONO 70"},
              {"goodspelling": "DIGGER DUO 60"},
              {"goodspelling": "DIGGER DUO 70"},
              {"goodspelling": "DIGGER DUO T80"},
              {"wrongspelling": "Digger"},
              {"wrongspelling": "DIGGERDUO60"},
              {"wrongspelling": "DIGGER duo60"},
              {"wrongspelling": "DIGGER duo 60"}
            ]},
            {"stickers": [
              {"goodspelling": "DIGGER"},
              {"wrongpelling": "DIGGERDUO"},
              {"wrongpelling": "Digger DUO"},
              {"wrongspelling": "DIGGER DUO70"},
              {"wrongspelling": "Digger 70"},
              {"wrongspelling": "DIGGER DUO T 80"},
              {"wrongspelling": "DIGGERDUO 70"}
            ]},
            {"texts": [
            {"goodspelling": "Digger"},
              {"goodspelling": "Digger Mono"},
              {"goodspelling": "Digger Duo"},
              {"goodspelling": "Digger Mono 60"},
              {"goodspelling": "Digger Mono 70"},
              {"goodspelling": "Digger Duo 60"},
              {"goodspelling": "Digger Duo 70"},
              {"goodspelling": "Digger Duo T80"},
              {"wrongspelling": "digger"},
              {"wrongspelling": "digger duo"},
              {"wrongspelling": "DiggerDuo 60"},
              {"wrongspelling": "Digger duo 60"},
              {"wrongspelling": "Digger Duo60"},
              {"wrongspelling": "Digger Duo t80"},
            ]}
          ]
        },
        {
          "name": "CORVUS PKE",
          "machine": [
            {"title": [
              {"goodspelling": "CORVUS PKE"},
              {"goodspelling": "CORVUS PKE 50"},
              {"goodspelling": "CORVUS PKE 60"},
              {"goodspelling": "CORVUS PKE 70"},
              {"wrongspelling": "Corvus PKE"},
              {"wrongspelling": "Corvus PKE 70"},
              {"wrongspelling": "CORVUS pke70"},
              {"wrongspelling": "CORVUS PKE70"}
            ]},
            {"stickers": [
              {"goodspelling": "CORVUS PKE"},
              {"wrongpelling": "CORVUS PKE 50"},
              {"wrongpelling": "CORVUS PKE50"},
              {"wrongspelling": "Corvus PKE"},
              {"wrongspelling": "Corvus PKE 50"}
            ]},
            {"texts": [
              {"goodspelling": "Corvus PKE"},
              {"goodspelling": "Corvus PKE 50"},
              {"goodspelling": "Corvus PKE 60"},
              {"goodspelling": "Corvus PKE 70"},
              {"wrongspelling": "corvus pke"},
              {"wrongspelling": "Corvus PKE70"},
              {"wrongspelling": "corvus PKE 70"},
              {"wrongspelling": "Corvus Pke 70"}
            ]}
          ]
        },
        {
          "name": "CORVUS PKE",
          "machine": [
            {"title": [
              {"goodspelling": "CORVUS VKE"},
              {"goodspelling": "CORVUS VKE 60"},
              {"goodspelling": "CORVUS VKE 70"},
              {"goodspelling": "CORVUS VKE 80"},
              {"wrongspelling": "Corvus VKE"},
              {"wrongspelling": "Corvus VKE 70"},
              {"wrongspelling": "CORVUS vke70"},
              {"wrongspelling": "CORVUS VKE70"}
            ]},
            {"stickers": [
              {"goodspelling": "CORVUS VKE"},
              {"wrongpelling": "CORVUS VKE 60"},
              {"wrongpelling": "CORVUS VKE60"},
              {"wrongspelling": "Corvus VKE"},
              {"wrongspelling": "Corvus VKE 60"}
            ]},
            {"texts": [
              {"goodspelling": "Corvus VKE"},
              {"goodspelling": "Corvus VKE 60"},
              {"goodspelling": "Corvus VKE 70"},
              {"goodspelling": "Corvus VKE 80"},
              {"wrongspelling": "corvus vke"},
              {"wrongspelling": "Corvus VKE80"},
              {"wrongspelling": "corvus VKE 80"},
              {"wrongspelling": "Corvus Vke 80"}
            ]}
          ]
        },
        {
          "name": "ECODRILL",
          "machine": [
            {
              "name": "Titre",
              "title": [
              {"goodspelling": "ECODRILL"},
              {"goodspelling": "ECODRILL 50"},
              {"goodspelling": "ECODRILL 60"},
              {"wrongspelling": "ECODRILL50"},
              {"wrongspelling": "Ecodrill 50"}
            ]},
            {"stickers": [
              {"goodspelling": "ECODRILL"},
              {"wrongpelling": "ECODRILL 50"},
              {"wrongspelling": "ECODRILL50"}
            ]},
            {"texts": [
              {"goodspelling": "Ecodrill"},
              {"goodspelling": "Ecodrill 50"},
              {"goodspelling": "Ecodrill 60"},
              {"wrongspelling": "ecodrill60"},
              {"wrongspelling": "ecodrill 60"},
              {"wrongspelling": "Ecodrill60"}
            ]},
          ]
        },
        {
          "name": "TURBOSEED",
          "machine": [
            {
              "name": "Titre",
              "title": [
              {"goodspelling": "TURBOSEED"},
              {"goodspelling": "TURBOSEED 60"},
              {"goodspelling": "TURBOSEED 70"},
              {"wrongspelling": "TURBOSEED60"},
              {"wrongspelling": "Turboseed60"}
            ]},
            {"stickers": [
              {"goodspelling": "TURBOSEED"},
              {"wrongpelling": "TURBOSEED 60"},
              {"wrongspelling": "TURBOSEED60"}
            ]},
            {"texts": [
              {"goodspelling": "Turboseed"},
              {"goodspelling": "Turboseed 60"},
              {"goodspelling": "Turboseed 70"},
              {"wrongspelling": "turboseed60"},
              {"wrongspelling": "turboseed 60"},
              {"wrongspelling": "Turboseed60"}
            ]},
          ]
        },
        {
          "name": "ADLER",
          "machine": [
            {"title": [
              {"goodspelling": "ADLER"},
              {"goodspelling": "ADLER 40"},
              {"goodspelling": "ADLER 50"},
              {"goodspelling": "ADLER 60"},
              {"goodspelling": "ADLER 70"},
              {"goodspelling": "ADLER T70"},
              {"wrongspelling": "Adler"},
              {"wrongspelling": "Adler T70"},
              {"wrongspelling": "ADLERT70"},
              {"wrongspelling": "ADLER T 70"}
            ]},
            {"stickers": [
              {"goodspelling": "ADLER"},
              {"wrongpelling": "ADLER 40"},
              {"wrongpelling": "ADLER40"},
              {"wrongspelling": "Adler"},
              {"wrongspelling": "Adler 40"}
            ]},
            {"texts": [
              {"goodspelling": "Adler"},
              {"goodspelling": "Adler 40"},
              {"goodspelling": "Adler 50"},
              {"goodspelling": "Adler 60"},
              {"goodspelling": "Adler 70"},
              {"goodspelling": "Adler T70"},
              {"wrongspelling": "Adler"},
              {"wrongspelling": "AdlerT70"},
              {"wrongspelling": "Adler T70"},
              {"wrongspelling": "Adler T 70"}
            ]}
          ]
        },
        {
          "name": "STURMVOGEL",
          "machine": [
            {"title": [
              {"goodspelling": "STURMVOGEL"},
              {"goodspelling": "STURMVOGEL 50"},
              {"goodspelling": "STURMVOGEL 60"},
              {"goodspelling": "STURMVOGEL 70"},
              {"goodspelling": "STURMVOGEL 80"},
              {"wrongspelling": "Sturmvogel"},
              {"wrongspelling": "Sturmvogel70"},
              {"wrongspelling": "STURMVOGEL70"}
            ]},
            {"stickers": [
              {"goodspelling": "STURMVOGEL"},
              {"wrongpelling": "STURMVOGEL 70"},
              {"wrongpelling": "STURMVOGEL70"},
              {"wrongspelling": "Sturmvogel"},
              {"wrongspelling": "Sturmvogel 70"}
            ]},
            {"texts": [
              {"goodspelling": "Sturmvogel"},
              {"goodspelling": "Sturmvogel 50"},
              {"goodspelling": "Sturmvogel 60"},
              {"goodspelling": "Sturmvogel T60"},
              {"goodspelling": "Sturmvogel T70"},
              {"goodspelling": "Sturmvogel T80"},
              {"wrongspelling": "sturmvogel"},
              {"wrongspelling": "Sturmvogel70"},
              {"wrongspelling": "sturmvogel 70"}
            ]}
          ]
        }
      ],
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
        "id": "leaflet",
        "title": "leaflets_title_old",
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
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/rabe/stubble-cultivation-en.pdf"
              },
              {
                "trad": "leaflets_rabe_title14",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/rabe/stubble-cultivation-fr.pdf"
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
          "title": "Machines (EN) €",
          "link": "http://marketing.cellar.services.clever-cloud.com/pricelists/rabe/pricelist-rabe-en-eur.pdf",
          "image": {
            "src": "/static/img/pricelists/rabe.jpg",
            "label": "Price list Rabe 2019 in euros, english version"
          }
        },
        {
          "title": "Machines (FR) €",
          "link": "http://marketing.cellar.services.clever-cloud.com/pricelists/rabe/pricelist-rabe-fr.pdf",
          "image": {
            "src": "/static/img/pricelists/rabe.jpg",
            "label": "Liste de prix Rabe 2019 en euros, version française"
          }
        },
        {
          "title": "Machines (DE) €",
          "link": "http://marketing.cellar.services.clever-cloud.com/pricelists/rabe/pricelist-rabe-de.pdf",
          "image": {
            "src": "/static/img/pricelists/rabe.jpg",
            "label": "PreisListe Rabe 2019 in euros auf Deutsch"
          }
        }
      ]
    };
  },
  components: {
    LogoVue,
    BrandingVue,
    RangeVue,
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
