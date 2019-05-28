<template>
  <div class="home">
    <div class="container" id="main">
      <div class="row">
        <div class="col">
          <a class="anchor" name="logo"></a>
          <h1>{{ $t('main_title') }}</h1>
          <p class="lead">{{ $t('main_description') }}<a href="mailto:webmaster@.co">webmaster@.co</a>.</p>
        </div>
      </div>
      <br>
      <div class="container">
        <div class="row">
          <div class="col-12">
              <h2>Grégoire Besson</h2>
          </div>
        </div>
      </div>
      <br>
      <LogoVue :logos="logos"></LogoVue>
      <BrandingVue :brandings="brandings"></BrandingVue>
      <RangeNameVue :range="brandings_range"></RangeNameVue>
      <IntroOutroVue :introOutros="introOutros"></IntroOutroVue>
      <LinksVue :socials="socials"></LinksVue>
      <PhotoVue :photos="photos"></PhotoVue>
      <LeafletsVue :leaflets="leafletsNew"></LeafletsVue>
      <LeafletsVue :leaflets="leafletsOld"></LeafletsVue>
      <VideosVue :videos="videos"></VideosVue>
      <PricesVue :prices="prices"></PricesVue>
      <PostersVue :posters="posters"></PostersVue>
    </div>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */
import LogoVue from '@/components/Layout/Logos.vue'
import BrandingVue from '@/components/Layout/Branding.vue'
import RangeNameVue from '@/components/Layout/Range_name.vue'
import IntroOutroVue from '@/components/Layout/Intro-Outro.vue'
import LinksVue from '@/components/Layout/Links.vue'
import PhotoVue from '@/components/Layout/Photo.vue'
import LeafletsVue from '@/components/Layout/Leaflets.vue'
import VideosVue from '@/components/Layout/Videos.vue'
import PricesVue from '@/components/Layout/Price.vue'
import PostersVue from '@/components/Layout/Poster.vue'
import FooterVue from '@/components/Footer.vue'

export default {
  name: 'gregoire-besson',
  data() {
    return {
      logos: {
        "item":[
          {
            "name": "logo_white_on_color",
            "image": {
                "src": "/static/img/logos/logo-gregoire-besson-white-oncolor.png",
                "label": "Travail du sol logo Gregoire Besson, gradient"
            },
            "jpg": "/static/img/logos/logo-gregoire-besson-white-oncolor.jpg",
            "png": "/static/img/logos/logo-gregoire-besson-white-oncolor.png",
            "eps": "/static/img/logos/logo-gregoire-besson-white-oncolor.eps",
            "svg": "/static/img/logos/logo-gregoire-besson-white-oncolor.svg"
          },
          {
            "name": "logo_color_on_white",
            "image": {
                "src": "/static/img/logos/logo-gregoire-besson-color-onwhite.png",
                "label": "Travail du sol logo Gregoire Besson, color on white"
            },
            "jpg": "/static/img/logos/logo-gregoire-besson-color-onwhite.jpg",
            "png": "/static/img/logos/logo-gregoire-besson-color-onwhite.png",
            "eps": "/static/img/logos/logo-gregoire-besson-color-onwhite.eps",
            "svg": "/static/img/logos/logo-gregoire-besson-color-onwhite.svg"
          },
          {
            "name": "logo_white_on_transparent",
            "image": {
                "src": "/static/img/logos/logo-gregoire-besson-white-ontranspbg.png",
                "label": "Travail du sol logo Gregoire Besson, white on transparent"
            },
            "png": "/static/img/logos/logo-gregoire-besson-white-ontranspbg.png",
            "eps": "/static/img/logos/logo-gregoire-besson-white-ontranspbg.eps",
            "svg": "/static/img/logos/logo-gregoire-besson-white-ontranspbg.svg"
          },
          {
            "name": "logo_white_on_black",
            "image": {
                "src": "/static/img/logos/logo-gregoire-besson-white-onblack.png",
                "label": "Travail du sol logo Gregoire Besson, white on black"
            },
            "jpg": "/static/img/logos/logo-gregoire-besson-white-onblack.jpg",
            "png": "/static/img/logos/logo-gregoire-besson-white-onblack.png",
            "eps": "/static/img/logos/logo-gregoire-besson-white-onblack.eps",
            "svg": "/static/img/logos/logo-gregoire-besson-white-onblack.svg"
          }
        ],
        "href": "/static/img/old-logos-gregoire-besson.zip",
        "class": "btn-Gregoire"
      },
      brandings: {
        "name1": "branding_color_title",
        "palette": "pal-E2001A",
        "hex": "#E2001A",
        "rgb": "226 0 26",
        "cmyk": "0 100 100 0",
        "ral": "3020",
        "pantone": "485 C",
        "name2": "branding_spelling_title",
        "brandname": "Grégoire Besson",
        "item": [
          {"name": "Grégoire-Besson"},
          {"name": "Grégoire and Besson"},
          {"name": "Grégoire et Besson"},
          {"name": "GrégoireBesson"},
          {"name": "GRÉGOIRE BESSON"},
          {"name": "GRÉGOIRE Besson"}
        ],
        "name3": "branding_font_title",
        "text": "branding_font_text",
        "download": "branding_font_download"
      },
      brandings_range: [
        {
          "name": "PRIMA",
          "machine": [
            {
              "name": "Titre",
              "title": [
              {"goodspelling": "PRIMA"},
              {"goodspelling": "PRIMA 40"},
              {"goodspelling": "PRIMA 50"},
              {"goodspelling": "PRIMA 70"},
              {"goodspelling": "PRIMA 80"},
              {"wrongspelling": "PRIMA40"}
            ]},
            {"stickers": [
              {"goodspelling": "PRIMA"},
              {"wrongpelling": "PRIMA 40"},
              {"wrongspelling": "PRIMA40"}
            ]},
            {"texts": [
              {"goodspelling": "Prima"},
              {"goodspelling": "Prima 40"},
              {"goodspelling": "Prima 50"},
              {"goodspelling": "Prima 70"},
              {"goodspelling": "Prima 80"},
              {"wrongspelling": "prima60"},
              {"wrongspelling": "prima 60"},
              {"wrongspelling": "Prima60"}
            ]},
          ]
        },
        {
          "name": "ROVER",
          "machine": [
            {"title": [
              {"goodspelling": "ROVER"},
              {"goodspelling": "ROVER 50"},
              {"goodspelling": "ROVER 60"},
              {"goodspelling": "ROVER 70"},
              {"goodspelling": "ROVER 80"},
              {"wrongspelling": "ROVER50"}
            ]},
            {"stickers": [
              {"goodspelling": "ROVER"},
              {"wrongpelling": "ROVER 50"},
              {"wrongspelling": "ROVER50"}
            ]},
            {"texts": [
              {"goodspelling": "Rover"},
              {"goodspelling": "Rover 50"},
              {"goodspelling": "Rover 60"},
              {"goodspelling": "Rover 70"},
              {"goodspelling": "Rover 80"},
              {"wrongspelling": "rover60"},
              {"wrongspelling": "rover 60"},
              {"wrongspelling": "Rover60"}
            ]}
          ]
        },
        {
          "name": "VOYAGER",
          "machine": [
            {"title": [
              {"goodspelling": "VOYAGER"},
              {"goodspelling": "VOYAGER S60"},
              {"goodspelling": "VOYAGER C60"},
              {"goodspelling": "VOYAGER S70"},
              {"goodspelling": "VOYAGER C80"},
              {"wrongspelling": "Voyager"},
              {"wrongspelling": "VoyagerS60"},
              {"wrongspelling": "VOYAGERs60"},
              {"wrongspelling": "VOYAGERS 60"},
              {"wrongspelling": "VOYAGER S 60"}
            ]},
            {"stickers": [
              {"goodspelling": "VOYAGER"},
              {"wrongpelling": "VOYAGER S60"},
              {"wrongspelling": "VOYAGERs60"},
              {"wrongspelling": "VOYAGER s60"}
            ]},
            {"texts": [
              {"goodspelling": "Voyager"},
              {"goodspelling": "Voyager S60"},
              {"goodspelling": "Voyager C60"},
              {"goodspelling": "Voyager S70"},
              {"goodspelling": "Voyager C80"},
              {"wrongspelling": "voyagers60"},
              {"wrongspelling": "voyager s60"},
              {"wrongspelling": "VoyagerS60"},
            ]}
          ]
        },
        {
          "name": "EXPLOR",
          "machine": [
            {"title": [
              {"goodspelling": "EXPLOR"},
              {"goodspelling": "EXPLOR T70"},
              {"goodspelling": "EXPLOR T80"},
              {"goodspelling": "EXPLOR T90"},
              {"wrongspelling": "Explor"},
              {"wrongspelling": "ExplorT70"},
              {"wrongspelling": "EXPLORt70"},
              {"wrongspelling": "EXPLORT 70"},
              {"wrongspelling": "EXPLOR T 70"}
            ]},
            {"stickers": [
              {"goodspelling": "EXPLOR"},
              {"wrongpelling": "EXPLOR T70"},
              {"wrongspelling": "ExplorT70"},
              {"wrongspelling": "EXPLOR T 70"}
            ]},
            {"texts": [
              {"goodspelling": "Explor"},
              {"goodspelling": "Explor T70"},
              {"goodspelling": "Explor T80"},
              {"goodspelling": "Explor T90"},
              {"wrongspelling": "explorT70"},
              {"wrongspelling": "explor t70"},
              {"wrongspelling": "explor t 70"},
            ]}
          ]
        },
        {
          "name": "EXPLOR",
          "machine": [
            {"title": [
              {"goodspelling": "DISCORDON"},
              {"goodspelling": "DISCORDON 60"},
              {"goodspelling": "DISCORDON T70"},
              {"goodspelling": "DISCORDON T80"},
              {"wrongspelling": "Discordon"},
              {"wrongspelling": "DiscordonT70"},
              {"wrongspelling": "DISCORDONt70"},
              {"wrongspelling": "DISCORDONT 70"},
              {"wrongspelling": "DISCORDON T 70"}
            ]},
            {"stickers": [
              {"goodspelling": "DISCORDON"},
              {"wrongpelling": "DISCORDON T70"},
              {"wrongspelling": "DiscordonT70"},
              {"wrongspelling": "DISCORDON T 70"}
            ]},
            {"texts": [
              {"goodspelling": "Discordon"},
              {"goodspelling": "Discordon T70"},
              {"goodspelling": "Discordon T80"},
              {"goodspelling": "Discordon T90"},
              {"wrongspelling": "discordonT70"},
              {"wrongspelling": "Discordon t70"},
              {"wrongspelling": "discordon t 70"},
            ]}
          ]
        },
        {
          "name": "TETRA",
          "machine": [
            {"title": [
              {"goodspelling": "TETRA"},
              {"goodspelling": "TETRA 50"},
              {"goodspelling": "TETRA 60"},
              {"goodspelling": "TETRA 70"},
              {"goodspelling": "TETRA 80"},
              {"wrongspelling": "TÉTRA"},
              {"wrongspelling": "Tétra"},
              {"wrongspelling": "Tetra70"},
              {"wrongspelling": "Tetra 70"},
              {"wrongspelling": "TETRA70"}
            ]},
            {"stickers": [
              {"goodspelling": "TETRA"},
              {"wrongpelling": "TÉTRA"},
              {"wrongspelling": "Tetra70"},
              {"wrongspelling": "TETRA 70"}
            ]},
            {"texts": [
              {"goodspelling": "Tetra"},
              {"goodspelling": "Tetra 50"},
              {"goodspelling": "Tetra 60"},
              {"goodspelling": "Tetra 70"},
              {"goodspelling": "Tetra 80"},
              {"wrongspelling": "tetraT70"},
              {"wrongspelling": "Tetra70"},
              {"wrongspelling": "Tétra 70"},
            ]}
          ]
        },
        {
          "name": "COVER",
          "machine": [
            {"title": [
              {"goodspelling": "COVER"},
              {"goodspelling": "COVER V"},
              {"goodspelling": "COVER X"},
              {"goodspelling": "COVER XL"},
              {"goodspelling": "COVER V T50"},
              {"goodspelling": "COVER V T60"},
              {"goodspelling": "COVER V T70"},
              {"goodspelling": "COVER X T50"},
              {"goodspelling": "COVER X T60"},
              {"goodspelling": "COVER X T70"},
              {"goodspelling": "COVER X T80"},
              {"goodspelling": "COVER XL T60"},
              {"goodspelling": "COVER XL T70"},
              {"goodspelling": "COVER XL T80"},
              {"goodspelling": "COVER XL T90"},
              {"wrongspelling": "Cover"},
              {"wrongspelling": "CoverX T70"},
              {"wrongspelling": "COVER XT70"},
              {"wrongspelling": "CoverX T 70"}
            ]},
            {"stickers": [
              {"goodspelling": "COVER"},
              {"wrongpelling": "COVER X"},
              {"wrongpelling": "COVER X T70"},
              {"wrongspelling": "CoverT70"},
              {"wrongspelling": "COVER X T 70"},
              {"wrongspelling": "COVER XT 70"},
              {"wrongspelling": "Cover X T 70"}
            ]},
            {"texts": [
            {"goodspelling": "Cover"},
              {"goodspelling": "Cover V"},
              {"goodspelling": "Cover X"},
              {"goodspelling": "Cover XL"},
              {"goodspelling": "Cover V T50"},
              {"goodspelling": "Cover V T60"},
              {"goodspelling": "Cover V T70"},
              {"goodspelling": "Cover X T50"},
              {"goodspelling": "Cover X T60"},
              {"goodspelling": "Cover X T70"},
              {"goodspelling": "Cover X T80"},
              {"goodspelling": "Cover XL T60"},
              {"goodspelling": "Cover XL T70"},
              {"goodspelling": "Cover XL T80"},
              {"goodspelling": "Cover XL T90"},
              {"wrongspelling": "cover"},
              {"wrongspelling": "CoverX T70"},
              {"wrongspelling": "cover XT70"},
              {"wrongspelling": "CoverX T 70"}
            ]}
          ]
        },
        {
          "name": "HELIOS",
          "machine": [
            {"title": [
              {"goodspelling": "HELIOS"},
              {"goodspelling": "HELIOS MONO"},
              {"goodspelling": "HELIOS DUO"},
              {"goodspelling": "HELIOS CRACKER"},
              {"goodspelling": "HELIOS MONO 60"},
              {"goodspelling": "HELIOS MONO 70"},
              {"goodspelling": "HELIOS DUO 60"},
              {"goodspelling": "HELIOS DUO 70"},
              {"goodspelling": "HELIOS DUO T80"},
              {"goodspelling": "HELIOS DUO T90"},
              {"goodspelling": "HELIOS CRACKER 60"},
              {"goodspelling": "HELIOS CRACKER 70"},
              {"goodspelling": "HELIOS CRACKER 80"},
              {"wrongspelling": "Hélios"},
              {"wrongspelling": "HÉLIOS"},
              {"wrongspelling": "HELIOS duo60"},
              {"wrongspelling": "HELIOS duo 60"}
            ]},
            {"stickers": [
              {"goodspelling": "HELIOS"},
              {"wrongpelling": "HÉLIOS DUO"},
              {"wrongpelling": "Helios DUO"},
              {"wrongspelling": "HELIOS DUO70"},
              {"wrongspelling": "Hélios 70"},
              {"wrongspelling": "HELIOS DUO T 80"},
              {"wrongspelling": "HELIOSDUO 70"}
            ]},
            {"texts": [
            {"goodspelling": "Helios"},
              {"goodspelling": "Helios Mono"},
              {"goodspelling": "Helios Duo"},
              {"goodspelling": "Helios Cracker"},
              {"goodspelling": "Helios Mono 60"},
              {"goodspelling": "Helios Mono 70"},
              {"goodspelling": "Helios Duo 60"},
              {"goodspelling": "Helios Duo 70"},
              {"goodspelling": "Helios Duo T80"},
              {"goodspelling": "Helios Duo T90"},
              {"goodspelling": "Helios Cracker 60"},
              {"goodspelling": "Helios Cracker 70"},
              {"goodspelling": "Helios Cracker 80"},
              {"wrongspelling": "Hélios"},
              {"wrongspelling": "hélios"},
              {"wrongspelling": "helios duo"},
              {"wrongspelling": "HeliosDuo 60"},
              {"wrongspelling": "Helios duo 60"},
              {"wrongspelling": "Helios Duo60"},
              {"wrongspelling": "Helios Duo t80"},
            ]}
          ]
        },
        {
          "name": "NORMANDIE",
          "machine": [
            {"title": [
              {"goodspelling": "NORMANDIE"},
              {"goodspelling": "NORMANDIE 40"},
              {"goodspelling": "NORMANDIE 50"},
              {"goodspelling": "NORMANDIE 60"},
              {"goodspelling": "NORMANDIE 70"},
              {"goodspelling": "NORMANDIE T60"},
              {"goodspelling": "NORMANDIE T70"},
              {"goodspelling": "NORMANDIE T80"},
              {"wrongspelling": "Normandie"},
              {"wrongspelling": "Normandie T70"},
              {"wrongspelling": "NORMANDIET70"},
              {"wrongspelling": "NORMANDIE T 70"}
            ]},
            {"stickers": [
              {"goodspelling": "NORMANDIE"},
              {"wrongpelling": "NORMANDIE 40"},
              {"wrongpelling": "NORMANDIE40"},
              {"wrongspelling": "Normandie"},
              {"wrongspelling": "Normandie 40"}
            ]},
            {"texts": [
              {"goodspelling": "Normandie"},
              {"goodspelling": "Normandie 40"},
              {"goodspelling": "Normandie 50"},
              {"goodspelling": "Normandie 60"},
              {"goodspelling": "Normandie 70"},
              {"goodspelling": "Normandie T60"},
              {"goodspelling": "Normandie T70"},
              {"goodspelling": "Normandie T80"},
              {"wrongspelling": "normandie"},
              {"wrongspelling": "NormandieT70"},
              {"wrongspelling": "normandie T70"},
              {"wrongspelling": "Normandie T 70"}
            ]}
          ]
        },
        {
          "name": "CROSSLAND",
          "machine": [
            {"title": [
              {"goodspelling": "CROSSLAND"},
              {"goodspelling": "CROSSLAND 50"},
              {"goodspelling": "CROSSLAND 60"},
              {"goodspelling": "CROSSLAND T60"},
              {"goodspelling": "CROSSLAND T70"},
              {"goodspelling": "CROSSLAND T80"},
              {"wrongspelling": "Crossland"},
              {"wrongspelling": "Crossland T70"},
              {"wrongspelling": "CROSSLANDT70"},
              {"wrongspelling": "CROSSLAND T 70"}
            ]},
            {"stickers": [
              {"goodspelling": "CROSSLAND"},
              {"wrongpelling": "CROSSLAND 50"},
              {"wrongpelling": "CROSSLAND50"},
              {"wrongspelling": "Crossland"},
              {"wrongspelling": "Crossland 40"}
            ]},
            {"texts": [
              {"goodspelling": "Crossland"},
              {"goodspelling": "Crossland 50"},
              {"goodspelling": "Crossland 60"},
              {"goodspelling": "Crossland T60"},
              {"goodspelling": "Crossland T70"},
              {"goodspelling": "Crossland T80"},
              {"wrongspelling": "crossland"},
              {"wrongspelling": "CrosslandT70"},
              {"wrongspelling": "crossland T70"},
              {"wrongspelling": "Crossland T 70"}
            ]}
          ]
        }
      ],
      introOutros: [
        {
          "title": "video_intro_title",
          "link_youtube": "https://www.youtube.com/embed/UTUIye8nFKk?rel=0&amp;showinfo=0",
          "link_mp4": "https://marketing..co/videos/gregoire-besson-intro.mp4",
          "link_mov": "https://marketing..co/videos/gregoire-besson-intro.mov"
        },
        {
          "title": "video_outro_title",
          "link_youtube": "https://www.youtube.com/embed/pMXXboa1h6I?rel=0&amp;showinfo=0",
          "link_mp4": "https://marketing..co/videos/gregoire-besson-outro.mp4",
          "link_mov": "https://marketing..co/videos/gregoire-besson-outro.mov"
        }
      ],
      socials: [
        {
          "title": "links_gregoire_website_title",
          "link": "http://gregoire-besson.com",
          "image": {
            "src": "/static/img/screen-captures/gregoire-besson-com.png",
            "label": "Website Grégoire Besson"
          },
          "description": "links_gregoire_website_description"
        },
        {
          "title": "links_gregoire_facebook_title",
          "link": "https://www.facebook.com/GregoireBessonSAS/",
          "image": {
            "src": "/static/img/screen-captures/facebook-gregoire-besson.png",
            "label": "Facebook Grégoire Besson"
          },
          "description": "links_gregoire_facebook_description"
        },
        {
          "title": "links_gregoire_youtube_title",
          "link": "https://www.youtube.com/c/GregoireBessonSASofficial/",
          "image": {
            "src": "/static/img/screen-captures/youtube-gregoire-besson.png",
            "label": "You Tube Chanel Grégoire Besson"
          },
          "description": "links_gregoire_youtube_description"
        },
        {
          "title": "links_gregoire_twitter_title",
          "link": "https://twitter.com/gbessonsas/",
          "image": {
            "src": "/static/img/screen-captures/twitter-gregoire-besson.png",
            "label": "Twitter Grégoire Besson"
          },
          "description": "links_gregoire_twitter_description"
        },
        {
          "title": "links_gregoire_instagram_title",
          "link": "https://instagram.com/gregoire.besson/",
          "image": {
            "src": "/static/img/screen-captures/instagram-gregoire-besson.png",
            "label": "Instagram Grégoire Besson"
          },
          "description": "links_gregoire_instagram_description"
        }
      ],
      photos: {
        "brand": "gregoire-besson",
        "item" :[
          {
            "title": "photo_prima_title",
            "range": "prima"
          },
          {
            "title": "photo_rover_title",
            "range": "rover"
          },
          {
            "title": "photo_voyager_title",
            "range": "voyager"
          },
          {
            "title": "photo_explor_title",
            "range": "explor"
          },
          {
            "title": "photo_discordon_title",
            "range": "discordon"
          },
          {
            "title": "photo_cover_title",
            "range": "cover"
          },
          {
            "title": "photo_normandie_title",
            "range": "normandie"
          },
          {
            "title": "photo_helios_title",
            "range": "helios"
          },
          {
            "title": "photo_crossland_title",
            "range": "crossland"
          },
          {
            "title": "photo_tetra_title",
            "range": "tetra"
          },
          {
            "title": "photo_3d_details",
            "range": "3d"
          },
          {
            "title": "photo_michelin_title",
            "range": "michelin"
          }
        ]
      },
      leafletsNew: {
        "title": "leaflets_title_new",
        "item":[
          {
            "key": "element1",
            "subtitle": "ploughing_title",
            "icon": "static/img/icons/plough_picto.png",
            "blocks": [
              {
                "name": "Index 40 / 50 [FR]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/ploughing_index_40_50_280519.pdf"
              },
              {
                "name": "Index 60 / 70 [FR]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/ploughing_index_60_70_280519.pdf"
              },
              {
                "name": "Index 80 / 90 [FR]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/ploughing_index_80_90_280519.pdf"
              }
            ],
          },
          {
            "key": "element2"
           //"subtitle": "restructuring_title",
           //"icon": "static/img/icons/restructuration_picto.png"
         },
         {
            "key": "element3"
            //"subtitle": "stubble_cultivation_title",
            //"icon": "static/img/icons/seed_bed_preparation_picto.png"
          },
          {
           "key": "element4"
           //subtitle": "soil_preparation_title",
           //"icon": "static/img/icons/stubble_cultivation_picto.png"
          }
        ]
      },
      leafletsOld: {
        "title": "leaflets_title_old",
        "item":[
          {
            "key": "element1",
            "blocks": [
              {
                "name": "Andpak [EN]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/andpak-en.pdf"
              },
              {
                "name": "Andpak [FR]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/andpak-fr.pdf"
              },
              {
                "name": "Big V [FR]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/bigv-fr.pdf"
              },
              {
                "name": "Big X [EN]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/bigx-en.pdf"
              },
              {
                "name": "Big X [FR]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/bigx-fr.pdf"
              },
              {
                "name": "Big X [RU]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/bigx-ru.pdf"
              },
              {
                "name": "Class V [FR]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/classv-fr.pdf"
              },
              {
                "name": "Combimix [EN]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/combimix-en.pdf"
              },
              {
                "name": "Combimix [ES]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/combimix-es.pdf"
              },
              {
                "name": "Combimix [FR]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/combimix-fr.pdf"
              },
              {
                "name": "Crossland [DE]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/crossland-de.pdf"
              },
              {
                "name": "Crossland [EN]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/crossland-en.pdf"
              },
              {
                "name": "Crossland [FR]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/crossland-fr.pdf"
              },
              {
                "name": "Crossland [IT]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/crossland-it.pdf"
              },
              {
                "name": "Crossland [RU]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/crossland-ru.pdf"
              }
            ],
          },
          {
            "key": "element2",
            "blocks": [
              {
                "name": "Discodent [DE]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/discodent-de.pdf"
              },
              {
                "name": "Discodent [EN]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/discodent-en.pdf"
              },
              {
                "name": "Discodent [FR]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/discodent-fr.pdf"
              },
              {
                "name": "Discodent [IT]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/discodent-it.pdf"
              },
              {
                "name": "Discodent [RU]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/discodent-ru.pdf"
              },
              {
                "name": "Discomix [FR]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/discomix-fr.pdf"
              },
              {
                "name": "Discomix [EN]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/discomix-en.pdf"
              },
              {
                "name": "DXRV [RU]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/dxrv-ru.pdf"
              },
              {
                "name": "Extreme Conditions [EN-FR]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/extremeconditions-fr-en.pdf"
              },
              {
                "name": "Extreme Conditions [RU-UK]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/extremeconditions-ru-uk.pdf"
              },
              {
                "name": "Helios - Heliplow [DE]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/helios-heliplow-de.pdf"
              },
              {
                "name": "Helios - Heliplow [EN]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/helios-heliplow-en.pdf"
              },
              {
                "name": "Helios - Heliplow [FR]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/helios-heliplow-fr.pdf"
              },
              {
                "name": "Helios - Heliplow [RU]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/helios-heliplow-ru.pdf"
              },
              {
                "name": "Helios - Helikrak [RU]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/helios-helikrak-ru.pdf"
              },
              {
                "name": "Normandie [EN]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/normandie-en.pdf"
              },
              {
                "name": "Normandie [FR]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/normandie-fr.pdf"
              },
              {
                "name": "Normandie [IT]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/normandie-it.pdf"
              },
              {
                "name": "Normandie [RU]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/normandie-ru.pdf"
              }
            
            ],
          },
          {
            "key": "element3",
            "blocks": [
              {
                "name": "R4 [DE]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/r4-de.pdf"
              },
              {
                "name": "R4 [EN]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/r4-en.pdf"
              },
              {
                "name": "R4 [FR]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/r4-fr.pdf"
              },
              {
                "name": "R4 RW4 [EN]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/r4-rw4-en.pdf"
              },
              {
                "name": "R4 RW4 [FR]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/r4-rw4-fr.pdf"
              },
              {
                "name": "R4 RW4 [IT]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/r4-rw4-it.pdf"
              },
              {
                "name": "R41 R71 [EN]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/r41-r71-en.pdf"
              },
              {
                "name": "R41 R71 [FR]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/r41-r71-fr.pdf"
              },
              {
                "name": "R41 R71 [RU]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/r41-r71-ru.pdf"
              },
              {
                "name": "R6 R8 [EN]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/r6-r8-en.pdf"
              },
              {
                "name": "R6 R8 [DE]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/r6-r8-de.pdf"
              },
              {
                "name": "R6 R8 [FR]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/r6-r8-fr.pdf"
              },
              {
                "name": "R6 R8 [HU]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/r6-r8-hu.pdf"
              },
              {
                "name": "R6 R8 [IT]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/r6-r8-it.pdf"
              },
              {
                "name": "R6 R8 [RU]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/r6-r8-ru.pdf"
              },
              {
                "name": "RW6 RW8 RW9 [EN]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/rw6-rw8-rw9-en.pdf"
              },
              {
                "name": "RW6 RW8 RW9 [ES]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/rw6-rw8-rw9-es.pdf"
              },
              {
                "name": "RW6 RW8 RW9 [FR]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/rw6-rw8-rw9-fr.pdf"
              },
              {
                "name": "RW6 RW8 RW9 [IT]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/rw6-rw8-rw9-it.pdf"
              },
              {
                "name": "RW6 RW8 RW9 [RU]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/rw6-rw8-rw9-ru.pdf"
              },
              {
                "name": "RW6 RW8 RW9 [DE]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/rw6-rw8-rw9-de.pdf"
              }
            ],
          },
          {
            "key": "element4",
            "blocks": [
              {
                "name": "SP8 [EN]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/sp8-en.pdf"
              },
              {
                "name": "SP8 [FR]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/sp8-fr.pdf"
              },
              {
                "name": "Sper81 [EN]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/sper8-EN.pdf"
              },
              {
                "name": "Sper81 [FR]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/sper8-FR.pdf"
              },
              {
                "name": "SP9 [EN]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/sp9-en.pdf"
              },
              {
                "name": "SP9 [FR]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/sp9-fr.pdf"
              },
              {
                "name": "SP9 [RU]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/sp9-ru.pdf"
              },
              {
                "name": "SPF9 SPL9 [DE]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/spf9-spl9-de.pdf"
              },
              {
                "name": "SPF9 SPL9 [EN]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/spf9-spl9-en.pdf"
              },
              {
                "name": "SPF9 SPL9 [FR]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/spf9-spl9-fr.pdf"
              },
              {
                "name": "SPF9 SPL9 [RU]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/spf9-spl9-ru.pdf"
              },
              {
                "name": "SPMF SPML [RU]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/spmf-spml-de.pdf"
              },
              {
                "name": "SXPro [FR]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/sxpro-fr.pdf"
              },
              {
                "name": "Tetra [FR]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/tetra-fr.pdf"
              },
              {
                "name": "XL XXL XXLWide [DE]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/xl-xxl-xxlwide-de.pdf"
              },
              {
                "name": "XL XXL XXLWide [EN]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/xl-xxl-xxlwide-en.pdf"
              },
              {
                "name": "XL XXL XXLWide [FR]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/xl-xxl-xxlwide-fr.pdf"
              },
              {
                "name": "XL XXL XXLWide [RU]",
                "link": "https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/xl-xxl-xxlwide-ru.pdf"
              },
            ],
          }
        ]
      },
      videos: {
        "title": "videos_title",
        "item": [
          {
            "key": "element1",
            "subtitle": "videos_walkaround_title",
            "blocks": [
              {
                "name": "Prima",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/walkaround-prima.mp4"
              },
              {
                "name": "Rover",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/walkaround-rover.mp4"
              },
              {
                "name": "Voyager",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/walkaround-voyager.mp4"
              },
              {
                "name": "Explor",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/walkaround-explor.mp4"
              },
              {
                "name": "Discordon",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/walkaround-discordon.mp4"
              },
              {
                "name": "Normandie",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/walkaround-normandie.mp4"
              },
              {
                "name": "Helios",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/walkaround-helios.mp4"
              },
              {
                "name": "Crossland",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/walkaround-crossland.mp4"
              }
            ]
          },
          {
            "key": "element2",
            "subtitle": "videos_products_title",
            "blocks": [
              {
                "name": "Prima",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-Product/product-prima.mp4"
              },
              {
                "name": "Rover",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-Product/product-rover.mp4"
              },
              {
                "name": "Voyager",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-Product/product-voyager.mp4"
              },
              {
                "name": "Explor",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-Product/product-explor.mp4"
              },
              {
                "name": "Discordon",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-Product/product-discordon.mp4"
              },
              {
                "name": "Cover",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-Product/product-cover.mp4"
              },
              {
                "name": "Normandie",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-Product/product-normandie.mp4"
              },
              {
                "name": "Helios",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/product-helios.mp4"
              },
              {
                "name": "Crossland",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/product-crossland.mp4"
              },
              {
                "name": "Tetra",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/product-tetra.mp4"
              }
            ]
          },
          {
            "key": "element3",
            "subtitle": "videos_customer_title",
            "blocks": [
              {
                "name": "Prima",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-CustomerTestimonials/prima-thierry-gaec-la-vache-landaise.mp4"
              },
              {
                "name": "Cover",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-CustomerTestimonials/cover-fabrice-gaec-roches-blanches.mp4"
              },
              {
                "name": "Crossland",
                "link": "https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-CustomerTestimonials/crossland-cedric-cuma-isseenne.mp4"
              }
            ]
          },
          {
            "key": "element4",
            "subtitle": "videos_techno_title",
            "blocks": [
              {
                "trad": "videos_techno_1_name",
                "link": "http://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-Product/crank-leg-tendille-deportee.mp4"
              }
            ]
          }
        ]
      },
      prices: [
        {
          "title": "Machines (EN) €",
          "link": "http://marketing.cellar.services.clever-cloud.com/pricelists/gregoire-besson/pricelist-gregoirebesson-en.pdf",
          "image": {
            "src": "/static/img/pricelists/gb.jpg",
            "label": "Price liste Gregoire Besson 2018 in euros, english version"
          }
        },
        {
          "title": "Machines (EN) £",
          "link": "http://marketing.cellar.services.clever-cloud.com/pricelists/gregoire-besson/pricelist-gregoirebesson-en-pounds.pdf",
          "image": {
            "src": "/static/img/pricelists/gb.jpg",
            "label": "Price liste Gregoire Besson 2018 in pounds, english version"
          }
        },
        {
          "title": "Machines (FR)",
          "link": "http://marketing.cellar.services.clever-cloud.com/pricelists/gregoire-besson/pricelist-gregoirebesson-fr.pdf",
          "image": {
            "src": "/static/img/pricelists/pricelist190_gregoire_besson.png",
            "label": "Liste de prix Gregoire Besson 2019 en euros, version française"
          }
        },
        {
          "title": "Machines (IT)",
          "link": "http://marketing.cellar.services.clever-cloud.com/pricelists/gregoire-besson/pricelist-gregoirebesson-it.pdf",
          "image": {
            "src": "/static/img/pricelists/gb.jpg",
            "label": "Listino prezzi Gregoire Besson 2018 in euros in italiano"
          }
        }
      ],
      posters: [
        {
          "title": "Français",
          "link": "https://marketing.cellar.services.clever-cloud.com/poster/Poster-gamme-A3-wb-FR.pdf",
          "image": {
            "src": "/static/img/posters/gb.jpg",
            "label": "Poster de la gamme Gregoire Besson"
          }
        },
        {
          "title": "Anglais",
          "link": "https://marketing.cellar.services.clever-cloud.com/poster/Poster-gamme-A3-wb-EN.pdf",
          "image": {
            "src": "/static/img/posters/gb.jpg",
            "label": "Poster of the range Gregoire Besson"
          }
        },
        {
          "title": "Italiano",
          "link": "https://marketing.cellar.services.clever-cloud.com/poster/Poster-gamme-A3-wb-IT.pdf",
          "image": {
            "src": "/static/img/posters/gb.jpg",
            "label": "Poster de la gamme Gregoire Besson"
          }
        },
        {
          "title": "український",
          "link": "https://marketing.cellar.services.clever-cloud.com/poster/Poster-gamme-A3-wb-UA.pdf",
          "image": {
            "src": "/static/img/posters/gb.jpg",
            "label": "Poster de la gamme Gregoire Besson український"
          }
        },
       
      ]
    };
  },
  components: {
    LogoVue,
    BrandingVue,
    RangeNameVue,
    IntroOutroVue,
    LeafletsVue,
    VideosVue,
    LinksVue,
    PhotoVue,
    PricesVue,
    PostersVue,
    FooterVue
  }
}
</script>
