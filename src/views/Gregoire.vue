<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col">
          <a class="anchor" name="logo" id="main"></a>
          <h1>{{ $t('main_title') }}</h1>
          <p class="lead">
            {{ $t('main_description')
            }}<a href="mailto:france.marketing@gb-group.co">france.marketing@gb-group.co</a>.
          </p>
        </div>
      </div>
    </div>
    <PhotoVue :photos="photos"></PhotoVue>
    <VideosVue :videos="videos"></VideosVue>
    <LinksVue :socials="socials"></LinksVue>
    <LeafletsVue :leaflets="leafletsNew"></LeafletsVue>
    <LeafletsVue :leaflets="leafletsOld"></LeafletsVue>
    <PricesVue :prices="prices"></PricesVue>
    <LogoVue :logos="logos"></LogoVue>
    <BrandingVue :brandings="brandings"></BrandingVue>
    <RangeNameVue :range="brandings_range"></RangeNameVue>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
// @ is an alias to /src
import PhotoVue from '@/components/Layout/Photo.vue';
import VideosVue from '@/components/Layout/Videos.vue';
import LinksVue from '@/components/Layout/Links.vue';
import LeafletsVue from '@/components/Layout/Leaflets.vue';
import PricesVue from '@/components/Layout/Price.vue';
import PostersVue from '@/components/Layout/Poster.vue';
import LogoVue from '@/components/Layout/Logos.vue';
import BrandingVue from '@/components/Layout/Branding.vue';
import RangeNameVue from '@/components/Layout/Range_name.vue';
import FooterVue from '@/components/Footer.vue';

export default {
  name: 'gregoire-besson',
  data: () => {
    return {
      logos: {
        item: [
          {
            name: 'logo_white_on_color',
            image: {
              src: '/static/img/logos/logo-gregoire-besson-white-oncolor.png',
              label: 'Travail du sol logo Gregoire Besson, gradient'
            },
            jpg: '/static/img/logos/logo-gregoire-besson-white-oncolor.jpg',
            png: '/static/img/logos/logo-gregoire-besson-white-oncolor.png',
            eps: '/static/img/logos/logo-gregoire-besson-white-oncolor.eps',
            svg: '/static/img/logos/logo-gregoire-besson-white-oncolor.svg'
          },
          {
            name: 'logo_color_on_white',
            image: {
              src: '/static/img/logos/logo-gregoire-besson-color-onwhite.png',
              label: 'Travail du sol logo Gregoire Besson, color on white'
            },
            jpg: '/static/img/logos/logo-gregoire-besson-color-onwhite.jpg',
            png: '/static/img/logos/logo-gregoire-besson-color-onwhite.png',
            eps: '/static/img/logos/logo-gregoire-besson-color-onwhite.eps',
            svg: '/static/img/logos/logo-gregoire-besson-color-onwhite.svg'
          },
          {
            name: 'logo_white_on_transparent',
            image: {
              src:
                '/static/img/logos/logo-gregoire-besson-white-ontranspbg.png',
              label: 'Travail du sol logo Gregoire Besson, white on transparent'
            },
            png: '/static/img/logos/logo-gregoire-besson-white-ontranspbg.png',
            eps: '/static/img/logos/logo-gregoire-besson-white-ontranspbg.eps',
            svg: '/static/img/logos/logo-gregoire-besson-white-ontranspbg.svg'
          },
          {
            name: 'logo_white_on_black',
            image: {
              src: '/static/img/logos/logo-gregoire-besson-white-onblack.png',
              label: 'Travail du sol logo Gregoire Besson, white on black'
            },
            jpg: '/static/img/logos/logo-gregoire-besson-white-onblack.jpg',
            png: '/static/img/logos/logo-gregoire-besson-white-onblack.png',
            eps: '/static/img/logos/logo-gregoire-besson-white-onblack.eps',
            svg: '/static/img/logos/logo-gregoire-besson-white-onblack.svg'
          }
        ],
        href: '/static/img/old-logos-gregoire-besson.zip',
        class: 'btn-Gregoire'
      },
      brandings: {
        name1: 'branding_color_title',
        palette: 'pal-E2001A',
        hex: '#E2001A',
        rgb: '226 0 26',
        cmyk: '0 100 100 0',
        ral: '3020',
        pantone: '485 C',
        name2: 'branding_spelling_title',
        brandname: 'Grégoire Besson',
        item: [
          { name: 'Grégoire-Besson' },
          { name: 'Grégoire and Besson' },
          { name: 'Grégoire et Besson' },
          { name: 'GrégoireBesson' },
          { name: 'GRÉGOIRE BESSON' },
          { name: 'GRÉGOIRE Besson' }
        ],
        name3: 'branding_font_title',
        text: 'branding_font_text',
        download: 'branding_font_download'
      },
      brandings_range: [
        {
          name: 'PRIMA',
          machine: [
            {
              name: 'Titre',
              title: [
                { goodspelling: 'PRIMA' },
                { goodspelling: 'PRIMA 40' },
                { goodspelling: 'PRIMA 50' },
                { goodspelling: 'PRIMA 70' },
                { goodspelling: 'PRIMA 80' },
                { wrongspelling: 'PRIMA40' }
              ]
            },
            {
              stickers: [
                { goodspelling: 'PRIMA' },
                { wrongpelling: 'PRIMA 40' },
                { wrongspelling: 'PRIMA40' }
              ]
            },
            {
              texts: [
                { goodspelling: 'Prima' },
                { goodspelling: 'Prima 40' },
                { goodspelling: 'Prima 50' },
                { goodspelling: 'Prima 70' },
                { goodspelling: 'Prima 80' },
                { wrongspelling: 'prima60' },
                { wrongspelling: 'prima 60' },
                { wrongspelling: 'Prima60' }
              ]
            }
          ]
        },
        {
          name: 'ROVER',
          machine: [
            {
              title: [
                { goodspelling: 'ROVER' },
                { goodspelling: 'ROVER 50' },
                { goodspelling: 'ROVER 60' },
                { goodspelling: 'ROVER 70' },
                { goodspelling: 'ROVER 80' },
                { wrongspelling: 'ROVER50' }
              ]
            },
            {
              stickers: [
                { goodspelling: 'ROVER' },
                { wrongpelling: 'ROVER 50' },
                { wrongspelling: 'ROVER50' }
              ]
            },
            {
              texts: [
                { goodspelling: 'Rover' },
                { goodspelling: 'Rover 50' },
                { goodspelling: 'Rover 60' },
                { goodspelling: 'Rover 70' },
                { goodspelling: 'Rover 80' },
                { wrongspelling: 'rover60' },
                { wrongspelling: 'rover 60' },
                { wrongspelling: 'Rover60' }
              ]
            }
          ]
        },
        {
          name: 'VOYAGER',
          machine: [
            {
              title: [
                { goodspelling: 'VOYAGER' },
                { goodspelling: 'VOYAGER S60' },
                { goodspelling: 'VOYAGER C60' },
                { goodspelling: 'VOYAGER S70' },
                { goodspelling: 'VOYAGER C80' },
                { wrongspelling: 'Voyager' },
                { wrongspelling: 'VoyagerS60' },
                { wrongspelling: 'VOYAGERs60' },
                { wrongspelling: 'VOYAGERS 60' },
                { wrongspelling: 'VOYAGER S 60' }
              ]
            },
            {
              stickers: [
                { goodspelling: 'VOYAGER' },
                { wrongpelling: 'VOYAGER S60' },
                { wrongspelling: 'VOYAGERs60' },
                { wrongspelling: 'VOYAGER s60' }
              ]
            },
            {
              texts: [
                { goodspelling: 'Voyager' },
                { goodspelling: 'Voyager S60' },
                { goodspelling: 'Voyager C60' },
                { goodspelling: 'Voyager S70' },
                { goodspelling: 'Voyager C80' },
                { wrongspelling: 'voyagers60' },
                { wrongspelling: 'voyager s60' },
                { wrongspelling: 'VoyagerS60' }
              ]
            }
          ]
        },
        {
          name: 'EXPLOR',
          machine: [
            {
              title: [
                { goodspelling: 'EXPLOR' },
                { goodspelling: 'EXPLOR T70' },
                { goodspelling: 'EXPLOR T80' },
                { goodspelling: 'EXPLOR T90' },
                { wrongspelling: 'Explor' },
                { wrongspelling: 'ExplorT70' },
                { wrongspelling: 'EXPLORt70' },
                { wrongspelling: 'EXPLORT 70' },
                { wrongspelling: 'EXPLOR T 70' }
              ]
            },
            {
              stickers: [
                { goodspelling: 'EXPLOR' },
                { wrongpelling: 'EXPLOR T70' },
                { wrongspelling: 'ExplorT70' },
                { wrongspelling: 'EXPLOR T 70' }
              ]
            },
            {
              texts: [
                { goodspelling: 'Explor' },
                { goodspelling: 'Explor T70' },
                { goodspelling: 'Explor T80' },
                { goodspelling: 'Explor T90' },
                { wrongspelling: 'explorT70' },
                { wrongspelling: 'explor t70' },
                { wrongspelling: 'explor t 70' }
              ]
            }
          ]
        },
        {
          name: 'DISCORDON',
          machine: [
            {
              title: [
                { goodspelling: 'DISCORDON' },
                { goodspelling: 'DISCORDON 60' },
                { goodspelling: 'DISCORDON T70' },
                { goodspelling: 'DISCORDON T80' },
                { wrongspelling: 'Discordon' },
                { wrongspelling: 'DiscordonT70' },
                { wrongspelling: 'DISCORDONt70' },
                { wrongspelling: 'DISCORDONT 70' },
                { wrongspelling: 'DISCORDON T 70' }
              ]
            },
            {
              stickers: [
                { goodspelling: 'DISCORDON' },
                { wrongpelling: 'DISCORDON T70' },
                { wrongspelling: 'DiscordonT70' },
                { wrongspelling: 'DISCORDON T 70' }
              ]
            },
            {
              texts: [
                { goodspelling: 'Discordon' },
                { goodspelling: 'Discordon T70' },
                { goodspelling: 'Discordon T80' },
                { goodspelling: 'Discordon T90' },
                { wrongspelling: 'discordonT70' },
                { wrongspelling: 'Discordon t70' },
                { wrongspelling: 'discordon t 70' }
              ]
            }
          ]
        },
        {
          name: 'TETRA',
          machine: [
            {
              title: [
                { goodspelling: 'TETRA' },
                { goodspelling: 'TETRA 50' },
                { goodspelling: 'TETRA 60' },
                { goodspelling: 'TETRA 70' },
                { goodspelling: 'TETRA 80' },
                { wrongspelling: 'TÉTRA' },
                { wrongspelling: 'Tétra' },
                { wrongspelling: 'Tetra70' },
                { wrongspelling: 'Tetra 70' },
                { wrongspelling: 'TETRA70' }
              ]
            },
            {
              stickers: [
                { goodspelling: 'TETRA' },
                { wrongpelling: 'TÉTRA' },
                { wrongspelling: 'Tetra70' },
                { wrongspelling: 'TETRA 70' }
              ]
            },
            {
              texts: [
                { goodspelling: 'Tetra' },
                { goodspelling: 'Tetra 50' },
                { goodspelling: 'Tetra 60' },
                { goodspelling: 'Tetra 70' },
                { goodspelling: 'Tetra 80' },
                { wrongspelling: 'tetraT70' },
                { wrongspelling: 'Tetra70' },
                { wrongspelling: 'Tétra 70' }
              ]
            }
          ]
        },
        {
          name: 'COVER',
          machine: [
            {
              title: [
                { goodspelling: 'COVER' },
                { goodspelling: 'COVER V' },
                { goodspelling: 'COVER X' },
                { goodspelling: 'COVER XL' },
                { goodspelling: 'COVER V T50' },
                { goodspelling: 'COVER V T60' },
                { goodspelling: 'COVER V T70' },
                { goodspelling: 'COVER X T50' },
                { goodspelling: 'COVER X T60' },
                { goodspelling: 'COVER X T70' },
                { goodspelling: 'COVER X T80' },
                { goodspelling: 'COVER XL T60' },
                { goodspelling: 'COVER XL T70' },
                { goodspelling: 'COVER XL T80' },
                { goodspelling: 'COVER XL T90' },
                { wrongspelling: 'Cover' },
                { wrongspelling: 'CoverX T70' },
                { wrongspelling: 'COVER XT70' },
                { wrongspelling: 'CoverX T 70' }
              ]
            },
            {
              stickers: [
                { goodspelling: 'COVER' },
                { wrongpelling: 'COVER X' },
                { wrongpelling: 'COVER X T70' },
                { wrongspelling: 'CoverT70' },
                { wrongspelling: 'COVER X T 70' },
                { wrongspelling: 'COVER XT 70' },
                { wrongspelling: 'Cover X T 70' }
              ]
            },
            {
              texts: [
                { goodspelling: 'Cover' },
                { goodspelling: 'Cover V' },
                { goodspelling: 'Cover X' },
                { goodspelling: 'Cover XL' },
                { goodspelling: 'Cover V T50' },
                { goodspelling: 'Cover V T60' },
                { goodspelling: 'Cover V T70' },
                { goodspelling: 'Cover X T50' },
                { goodspelling: 'Cover X T60' },
                { goodspelling: 'Cover X T70' },
                { goodspelling: 'Cover X T80' },
                { goodspelling: 'Cover XL T60' },
                { goodspelling: 'Cover XL T70' },
                { goodspelling: 'Cover XL T80' },
                { goodspelling: 'Cover XL T90' },
                { wrongspelling: 'cover' },
                { wrongspelling: 'CoverX T70' },
                { wrongspelling: 'cover XT70' },
                { wrongspelling: 'CoverX T 70' }
              ]
            }
          ]
        },
        {
          name: 'HELIOS',
          machine: [
            {
              title: [
                { goodspelling: 'HELIOS' },
                { goodspelling: 'HELIOS MONO' },
                { goodspelling: 'HELIOS DUO' },
                { goodspelling: 'HELIOS CRACKER' },
                { goodspelling: 'HELIOS MONO 60' },
                { goodspelling: 'HELIOS MONO 70' },
                { goodspelling: 'HELIOS DUO 60' },
                { goodspelling: 'HELIOS DUO 70' },
                { goodspelling: 'HELIOS DUO T80' },
                { goodspelling: 'HELIOS DUO T90' },
                { goodspelling: 'HELIOS CRACKER 60' },
                { goodspelling: 'HELIOS CRACKER 70' },
                { goodspelling: 'HELIOS CRACKER 80' },
                { wrongspelling: 'Hélios' },
                { wrongspelling: 'HÉLIOS' },
                { wrongspelling: 'HELIOS duo60' },
                { wrongspelling: 'HELIOS duo 60' }
              ]
            },
            {
              stickers: [
                { goodspelling: 'HELIOS' },
                { wrongpelling: 'HÉLIOS DUO' },
                { wrongpelling: 'Helios DUO' },
                { wrongspelling: 'HELIOS DUO70' },
                { wrongspelling: 'Hélios 70' },
                { wrongspelling: 'HELIOS DUO T 80' },
                { wrongspelling: 'HELIOSDUO 70' }
              ]
            },
            {
              texts: [
                { goodspelling: 'Helios' },
                { goodspelling: 'Helios Mono' },
                { goodspelling: 'Helios Duo' },
                { goodspelling: 'Helios Cracker' },
                { goodspelling: 'Helios Mono 60' },
                { goodspelling: 'Helios Mono 70' },
                { goodspelling: 'Helios Duo 60' },
                { goodspelling: 'Helios Duo 70' },
                { goodspelling: 'Helios Duo T80' },
                { goodspelling: 'Helios Duo T90' },
                { goodspelling: 'Helios Cracker 60' },
                { goodspelling: 'Helios Cracker 70' },
                { goodspelling: 'Helios Cracker 80' },
                { wrongspelling: 'Hélios' },
                { wrongspelling: 'hélios' },
                { wrongspelling: 'helios duo' },
                { wrongspelling: 'HeliosDuo 60' },
                { wrongspelling: 'Helios duo 60' },
                { wrongspelling: 'Helios Duo60' },
                { wrongspelling: 'Helios Duo t80' }
              ]
            }
          ]
        },
        {
          name: 'NORMANDIE',
          machine: [
            {
              title: [
                { goodspelling: 'NORMANDIE' },
                { goodspelling: 'NORMANDIE 40' },
                { goodspelling: 'NORMANDIE 50' },
                { goodspelling: 'NORMANDIE 60' },
                { goodspelling: 'NORMANDIE 70' },
                { goodspelling: 'NORMANDIE T60' },
                { goodspelling: 'NORMANDIE T70' },
                { goodspelling: 'NORMANDIE T80' },
                { wrongspelling: 'Normandie' },
                { wrongspelling: 'Normandie T70' },
                { wrongspelling: 'NORMANDIET70' },
                { wrongspelling: 'NORMANDIE T 70' }
              ]
            },
            {
              stickers: [
                { goodspelling: 'NORMANDIE' },
                { wrongpelling: 'NORMANDIE 40' },
                { wrongpelling: 'NORMANDIE40' },
                { wrongspelling: 'Normandie' },
                { wrongspelling: 'Normandie 40' }
              ]
            },
            {
              texts: [
                { goodspelling: 'Normandie' },
                { goodspelling: 'Normandie 40' },
                { goodspelling: 'Normandie 50' },
                { goodspelling: 'Normandie 60' },
                { goodspelling: 'Normandie 70' },
                { goodspelling: 'Normandie T60' },
                { goodspelling: 'Normandie T70' },
                { goodspelling: 'Normandie T80' },
                { wrongspelling: 'normandie' },
                { wrongspelling: 'NormandieT70' },
                { wrongspelling: 'normandie T70' },
                { wrongspelling: 'Normandie T 70' }
              ]
            }
          ]
        },
        {
          name: 'CROSSLAND',
          machine: [
            {
              title: [
                { goodspelling: 'CROSSLAND' },
                { goodspelling: 'CROSSLAND 50' },
                { goodspelling: 'CROSSLAND 60' },
                { goodspelling: 'CROSSLAND T60' },
                { goodspelling: 'CROSSLAND T70' },
                { goodspelling: 'CROSSLAND T80' },
                { wrongspelling: 'Crossland' },
                { wrongspelling: 'Crossland T70' },
                { wrongspelling: 'CROSSLANDT70' },
                { wrongspelling: 'CROSSLAND T 70' }
              ]
            },
            {
              stickers: [
                { goodspelling: 'CROSSLAND' },
                { wrongpelling: 'CROSSLAND 50' },
                { wrongpelling: 'CROSSLAND50' },
                { wrongspelling: 'Crossland' },
                { wrongspelling: 'Crossland 40' }
              ]
            },
            {
              texts: [
                { goodspelling: 'Crossland' },
                { goodspelling: 'Crossland 50' },
                { goodspelling: 'Crossland 60' },
                { goodspelling: 'Crossland T60' },
                { goodspelling: 'Crossland T70' },
                { goodspelling: 'Crossland T80' },
                { wrongspelling: 'crossland' },
                { wrongspelling: 'CrosslandT70' },
                { wrongspelling: 'crossland T70' },
                { wrongspelling: 'Crossland T 70' }
              ]
            }
          ]
        }
      ],
      socials: [
        {
          title: 'links_gregoire_website_title',
          link: 'http://gregoire-besson.com',
          image: {
            src: '/static/img/screen-captures/gregoire-besson-com.png',
            label: 'Website Grégoire Besson'
          },
          description: 'links_gregoire_website_description'
        },
        {
          title: 'links_gregoire_facebook_title',
          link: 'https://www.facebook.com/GregoireBessonSAS/',
          image: {
            src: '/static/img/screen-captures/facebook-gregoire-besson.png',
            label: 'Facebook Grégoire Besson'
          },
          description: 'links_gregoire_facebook_description'
        },
        {
          title: 'links_gregoire_youtube_title',
          link: 'https://www.youtube.com/c/GregoireBessonSASofficial/',
          image: {
            src: '/static/img/screen-captures/youtube-gregoire-besson.png',
            label: 'You Tube Chanel Grégoire Besson'
          },
          description: 'links_gregoire_youtube_description'
        },
        {
          title: 'links_gregoire_twitter_title',
          link: 'https://twitter.com/gbessonsas/',
          image: {
            src: '/static/img/screen-captures/twitter-gregoire-besson.png',
            label: 'Twitter Grégoire Besson'
          },
          description: 'links_gregoire_twitter_description'
        },
        {
          title: 'links_gregoire_instagram_title',
          link: 'https://instagram.com/gregoire.besson/',
          image: {
            src: '/static/img/screen-captures/instagram-gregoire-besson.png',
            label: 'Instagram Grégoire Besson'
          },
          description: 'links_gregoire_instagram_description'
        }
      ],
      photos: {
        brand: 'gregoire-besson',
        item: [
          {
            title: 'photo_prima_title',
            range: 'prima'
          },
          {
            title: 'photo_rover_title',
            range: 'rover'
          },
          {
            title: 'photo_voyager_title',
            range: 'voyager'
          },
          {
            title: 'photo_explor_title',
            range: 'explor'
          },
          {
            title: 'photo_discordon_title',
            range: 'discordon'
          },
          {
            title: 'photo_cover_title',
            range: 'cover'
          },
          {
            title: 'photo_normandie_title',
            range: 'normandie'
          },
          {
            title: 'photo_occitan_title',
            range: 'occitan'
          },
          {
            title: 'photo_helios_title',
            range: 'helios'
          },
          {
            title: 'photo_crossland_title',
            range: 'crossland'
          },
          {
            title: 'photo_tetra_title',
            range: 'tetra'
          }
        ]
      },
      leafletsNew: {
        id: 'newleaflet',
        title: 'leaflets_title_new',
        item: [
          {
            key: 'element1',
            subtitle: 'ploughing_title',
            icon: 'static/img/icons/plough_picto.png',
            blocks: [
              {
                name: 'Labour 40 / 50 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/ploughing-index-40-50-fr.pdf'
              },
              {
                name: 'Labour 60 / 70 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/ploughing-index-60-70-fr.pdf'
              },
              {
                name: 'Labour 80 / 90 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/ploughing-index-80-90-fr.pdf'
              },
              {
              },
              {
                name: 'Ploughing 40 / 50 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/ploughing-index-40-50-en.pdf'
              },
              {
                name: 'Ploughing 60 / 70 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/ploughing-index-60-70-en.pdf'
              },
              {
                name: 'Ploughing 80 / 90 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/ploughing-index-80-90-en.pdf'
              }
            ]
          },
          {
            key: 'element2',
            subtitle: 'stubble_cultivation_title',
            icon: 'static/img/icons/stubble_cultivation_picto.png',
            blocks: [
              {
                name: 'Déchaumage 40 / 50 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/stubble-cultivation-index-40-50-fr.pdf'
              },
              {
                name: 'Déchaumage 60 / 70 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/stubble-cultivation-index-60-70-fr.pdf'
              },
              {
                name: 'Déchaumage 80 / 90 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/stubble-cultivation-index-80-90-fr.pdf'
              },
              {
              },
              {
                name: 'Stubble cultivat. 40 / 50 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/stubble-cultivation-index-40-50-en.pdf'
              },
              {
                name: 'Stubble cultivat. 60 / 70 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/stubble-cultivation-index-60-70-en.pdf'
              },
              {
                name: 'Stubble cultivat. 80 / 90 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/stubble-cultivation-index-80-90-en.pdf'
              }
            ]
          },
          {
            key: 'element3',
            subtitle: 'restructuring_title',
            icon: 'static/img/icons/restructuration_picto.png',
            blocks: [
              {
                name: 'Restructuration 60 / 70 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/restructuring-index-60-70-fr.pdf'
              },
              {
                name: 'Restructuration 80 / 90 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/restructuring-index-80-90-fr.pdf'
              },
              {
              },
              {
                name: 'Restructuring 60 / 70 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/restructuring-index-60-70-en.pdf'
              },
              {
                name: 'Restructuring 80 / 90 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/restructuring-index-80-90-en.pdf'
              }
            ]
          },
          {
            key: 'element4',
            subtitle: 'soil_preparation_title',
            icon: 'static/img/icons/seed_bed_preparation_picto.png',
            blocks: [
              {
                name: 'Prépa. de sol 40 / 50 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/soil-preparation-index-40-50-fr.pdf'
              },
              {
                name: 'Prépa. de sol 60 / 70 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/soil-preparation-index-60-70-fr.pdf'
              },
              {
                name: 'Prépa. de sol 80 / 90 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/soil-preparation-index-80-90-fr.pdf'
              },
              {
              },
              {
                name: 'Soil preparation 40 / 50 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/soil-preparation-index-40-50-en.pdf'
              },
              {
                name: 'Soil preparation 60 / 70 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/soil-preparation-index-60-70-en.pdf'
              },
              {
                name: 'Soil preparation 80 / 90 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/soil-preparation-index-80-90-en.pdf'
              }
            ]
          }
        ]
      },
      leafletsOld: {
        id: 'oldleaflet',
        title: 'ranges',
        item: [
          {
            key: 'element1',
            subtitle: 'ploughing_title',
            blocks: [
          {
                name: 'Prima 50 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/prima-50-fr.pdf'
              },
              {
                name: 'Prima 70 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/prima-70-fr.pdf'
              },
              {
                name: 'Rover 40 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/rover-40-fr.pdf'
              },
              {
                name: 'Rover 50 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/rover-50-fr.pdf'
              },
              {
                name: 'Rover 60 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/rover-60-fr.pdf'
              },
              {
                name: 'Rover 70 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/rover-70-fr.pdf'
              },
              {
                name: 'Rover 80 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/rover-80-fr.pdf'
              },
              {
                name: 'Voyager C60 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/voyager-c60-fr.pdf'
              },
              {
                name: 'Voyager C80 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/voyager-c80-fr.pdf'
              },
              {
                name: 'Voyager S60 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/voyager-s60-fr.pdf'
              },
              {
                name: 'Voyager S70 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/voyager-s70-fr.pdf'
              },
              {
                name: 'Prima 50 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/prima-50-en.pdf'
              },
              {
                name: 'Prima 70 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/prima-70-en.pdf'
              },
              {
                name: 'Rover 40 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/rover-40-en.pdf'
              },
              {
                name: 'Rover 50 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/rover-50-en.pdf'
              },
              {
                name: 'Rover 60 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/rover-60-en.pdf'
              },
              {
                name: 'Rover 70 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/rover-70-en.pdf'
              },
              {
                name: 'Rover 80 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/rover-80-en.pdf'
              },
              {
                name: 'Voyager C60 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/voyager-c60-en.pdf'
              },
              {
                name: 'Voyager C80 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/voyager-c80-en.pdf'
              },
              {
                name: 'Voyager S60 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/voyager-s60-en.pdf'
              },
              {
                name: 'Voyager S70 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/voyager-s70-en.pdf'
              },
              {
                name: 'R6 R8 [DE]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/r6-r8-de.pdf'
              },
              {
                name: 'RW6 RW8 RW9 [DE]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/rw6-rw8-rw9-de.pdf'
              },
              {
                name: 'SPF9 SPL9 [DE]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/spf9-spl9-de.pdf'
              },
              {
                name: 'RW6 RW8 RW9 [ES]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/rw6-rw8-rw9-es.pdf'
              },
              {
                name: 'R6 R8 [IT]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/r6-r8-it.pdf'
              },
              {
                name: 'RW6 RW8 RW9 [IT]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/rw6-rw8-rw9-it.pdf'
              },
              {
                name: 'R6 R8 [HU]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/r6-r8-hu.pdf'
              },
              {
                name: 'Prima 70 [RU]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/pl-prima-70-ru.pdf'
              },
              {
                name: 'Rover [RU]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/pl-rover-ru.pdf'
              },
              {
                name: 'Voyager S70 [RU]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/pl-voyager-s70-ru.pdf'
              },
              {
                name: 'Voyager C80 [RU]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/pl-voyager-c80-ru.pdf'
              }
            ]
          },
          {
            key: 'element2',
            subtitle: 'stubble_cultivation_title',
            blocks: [
          {
                name: 'Dekoflex 60 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/dekoflex-60-fr.pdf'
              },
              {
                name: 'Crossland 50 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/crossland-50-fr.pdf'
              },
              {
                name: 'Crossland 60 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/crossland-60-fr.pdf'
              },
              {
                name: 'Crossland T60 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/crossland-t60-fr.pdf'
              },
              {
                name: 'Crossland T70 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/crossland-t70-fr.pdf'
              },
              {
                name: 'Crossland T80 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/crossland-t80-fr.pdf'
              },
              {
                name: 'Cover V T50 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/cover-v-t50-fr.pdf'
              },
              {
                name: 'Cover V T60 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/cover-v-t60-fr.pdf'
              },
              {
                name: 'Cover V T70 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/cover-v-t70-fr.pdf'
              },
              {
                name: 'Cover X T60 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/cover-x-t60-fr.pdf'
              },
              {
                name: 'Cover X T70 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/cover-x-t70-fr.pdf'
              },
              {
                name: 'Cover X T80 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/cover-x-t80-fr.pdf'
              },
              {
                name: 'Cover XL T60 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/cover-xl-t60-fr.pdf'
              },
              {
                name: 'Cover XL T70 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/cover-xl-t70-fr.pdf'
              },
              {
                name: 'Cover XL T80 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/cover-xl-t80-fr.pdf'
              },
              {
                name: 'Cover XL T90 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/cover-xl-t90-fr.pdf'
              },
              {
                name: 'Occitan 50 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/occitan-50-fr.pdf'
              },
              {
                name: 'Occitan 60 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/occitan-60-fr.pdf'
              },
              {
                name: 'Occitan T60 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/occitan-t60-fr.pdf'
              },
              {
                name: 'Normandie 50 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/normandie-50-fr.pdf'
              },
              {
                name: 'Normandie 60 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/normandie-60-fr.pdf'
              },
              {
                name: 'Normandie T60 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/normandie-t60-fr.pdf'
              },
              {
                name: 'Normandie T70 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/normandie-t70-fr.pdf'
              },
              {
                name: 'Normandie T80 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/normandie-t80-fr.pdf'
              },
              {
                name: 'Dekoflex 60 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/dekoflex-60-en.pdf'
              },
              {
                name: 'Crossland 50 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/crossland-50-en.pdf'
              },
              {
                name: 'Crossland 60 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/crossland-60-en.pdf'
              },
              {
                name: 'Crossland T60 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/crossland-t60-en.pdf'
              },
              {
                name: 'Crossland T70 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/crossland-t70-en.pdf'
              },
              {
                name: 'Crossland T80 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/crossland-t80-en.pdf'
              },
              {
                name: 'Cover V T50 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/cover-v-t50-en.pdf'
              },
              {
                name: 'Cover V T60 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/cover-v-t60-en.pdf'
              },
              {
                name: 'Cover V T70 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/cover-v-t70-en.pdf'
              },
              {
                name: 'Cover X T60 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/cover-x-t60-en.pdf'
              },
              {
                name: 'Cover X T70 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/cover-x-t70-en.pdf'
              },
              {
                name: 'Cover X T80 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/cover-x-t80-en.pdf'
              },
              {
                name: 'Cover XL T60 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/cover-xl-t60-en.pdf'
              },
              {
                name: 'Cover XL T70 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/cover-xl-t70-en.pdf'
              },
              {
                name: 'Cover XL T80 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/cover-xl-t80-en.pdf'
              },
              {
                name: 'Cover XL T90 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/cover-xl-t90-en.pdf'
              },
              {
                name: 'Occitan 50 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/occitan-50-en.pdf'
              },
              {
                name: 'Occitan 60 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/occitan-60-en.pdf'
              },
              {
                name: 'Occitan T60 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/occitan-t60-en.pdf'
              },
              {
                name: 'Normandie 50 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/normandie-50-en.pdf'
              },
              {
                name: 'Normandie 60 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/normandie-60-en.pdf'
              },
              {
                name: 'Normandie T60 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/normandie-t60-en.pdf'
              },
              {
                name: 'Normandie T70 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/normandie-t70-en.pdf'
              },
              {
                name: 'Normandie T80 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/normandie-t80-en.pdf'
              },
              {
                name: 'Crossland [DE]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/crossland-de.pdf'
              },
              {
                name: 'XL XXL XXLWide [DE]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/xl-xxl-xxlwide-de.pdf'
              },
              {
                name: 'Crossland [IT]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/crossland-it.pdf'
              },
              {
                name: 'Normandie [IT]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/normandie-it.pdf'
              },
              {
                name: 'Crossland [RU]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/st-crossland-ru.pdf'
              },
              {
                name: 'Cover X [RU]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/st-cover-x-ru.pdf'
              },
              {
                name: 'Cover XL [RU]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/st-cover-xl-ru.pdf'
              },
              {
                name: 'Occitan [RU]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/st-occitan-ru.pdf'
              },
              {
                name: 'Normandie [RU]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/st-normandie-ru.pdf'
              }
            ]
          },
          {
            key: 'element3',
            subtitle: 'restructuring_title',
            blocks: [
              {
                name: 'Helios Mono 60 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/helios-mono-60-fr.pdf'
              },
              {
                name: 'Helios Duo 60 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/helios-duo-60-fr.pdf'
              },
              {
                name: 'Helios Duo 70 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/helios-duo-70-fr.pdf'
              },
              {
                name: 'Helios Duo 80 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/helios-duo-80-fr.pdf'
              },
              {
                name: 'Helios Duo T80 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/helios-duo-t80-fr.pdf'
              },
              {
                name: 'Helios Duo T90 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/helios-duo-t90-fr.pdf'
              },
              {
                name: 'Helios Cracker 70 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/helios-cracker-70-fr.pdf'
              },
              {
                name: 'Helios Cracker 80 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/helios-cracker-80-fr.pdf'
              },
              {
                name: 'Explor T70 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/explor-t70-fr.pdf'
              },
              {
                name: 'Explor T80 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/explor-t80-fr.pdf'
              },
              {
                name: 'Explor T90 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/explor-t90-fr.pdf'
              },
              {
                name: 'Discordon 60 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/discordon-60-fr.pdf'
              },
              {
                name: 'Discordon T70 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/discordon-t70-fr.pdf'
              },
              {
                name: 'Discordon T80 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/discordon-t80-fr.pdf'
              },
              {
                name: 'Helios Mono 60 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/helios-mono-60-en.pdf'
              },
              {
                name: 'Helios Duo 60 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/helios-duo-60-en.pdf'
              },
              {
                name: 'Helios Duo 70 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/helios-duo-70-en.pdf'
              },
              {
                name: 'Helios Duo 80 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/helios-duo-80-en.pdf'
              },
              {
                name: 'Helios Duo T80 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/helios-duo-t80-en.pdf'
              },
              {
                name: 'Helios Duo T90 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/helios-duo-t90-en.pdf'
              },
              {
                name: 'Helios Cracker 70 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/helios-cracker-70-en.pdf'
              },
              {
                name: 'Helios Cracker 80 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/helios-cracker-80-en.pdf'
              },
              {
                name: 'Explor T70 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/explor-t70-en.pdf'
              },
              {
                name: 'Explor T80 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/explor-t80-en.pdf'
              },
              {
                name: 'Explor T90 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/explor-t90-en.pdf'
              },
              {
                name: 'Discordon 60 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/discordon-60-en.pdf'
              },
              {
                name: 'Discordon T70 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/discordon-t70-en.pdf'
              },
              {
                name: 'Discordon T80 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/discordon-t80-en.pdf'
              },
              {
                name: 'Discordon [DE]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/discodent-de.pdf'
              },
              {
                name: 'Helios [DE]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/helios-heliplow-de.pdf'
              },
              {
                name: 'Discordon [IT]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/discodent-it.pdf'
              },
              {
                name: 'Helios [RU]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/re-helios-duo-helikrak.pdf'
              },
              {
                name: 'Explor [RU]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/re-explor-ru.pdf'
              },
              {
                name: 'Discordon [RU]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/re-discordon-t70-t80-ru.pdf'
              }
            ]
          },
          {
            key: 'element4',
            subtitle: 'soil_preparation_title',
            blocks: [
              {
                name: 'Tetra 50 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/tetra-50-fr.pdf'
              },
              {
                name: 'Tetra 60 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/tetra-60-fr.pdf'
              },
              {
                name: 'Tetra 70 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/tetra-70-fr.pdf'
              },
              {
                name: 'Tetra 80 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/tetra-80-fr.pdf'
              },
              {
                name: 'Planipack 50 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/planipack-50-fr.pdf'
              },
              {
                name: 'Planipack 60 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/planipack-60-fr.pdf'
              },
              {
                name: 'Planipack 70 [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/planipack-70-fr.pdf'
              },
              {
                name: 'Tetra 50 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/tetra-50-en.pdf'
              },
              {
                name: 'Tetra 60 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/tetra-60-en.pdf'
              },
              {
                name: 'Tetra 70 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/tetra-70-en.pdf'
              },
              {
                name: 'Tetra 80 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/tetra-80-en.pdf'
              },
              {
                name: 'Planipack 50 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/planipack-50-en.pdf'
              },
              {
                name: 'Planipack 60 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/planipack-60-en.pdf'
              },
              {
                name: 'Planipack 70 [EN]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/planipack-70-en.pdf'
              },
              {
                name: 'Plani-serie [DE]',
                link:
                  'http://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/planiserie_de.pdf'
              },
              {
                name: 'Plani-serie [ES]',
                link:
                  'http://marketing.cellar-c2.services.clever-cloud.com/leaflets/gregoire-besson/planiserie_es.pdf'
              }
            ]
          }
        ]
      },
      videos: {
        title: 'videos_title',
        item: [
          {
            key: 'element1',
            subtitle: 'videos_walkaround_title',
            blocks: [
              {
                name: 'Prima [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/walkaround-prima.mp4'
              },
              {
                name: 'Rover [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/walkaround-rover.mp4'
              },
              {
                name: 'Rover [RU]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/walkaround-ru-rover-60.mp4'
              },
              {
                name: 'Voyager [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/walkaround-voyager.mp4'
              },
              {
                name: 'Voyager [RU]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/walkaround-ru-voyager-s70.mp4'
              },
              {
                name: 'Explor [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/walkaround-explor.mp4'
              },
              {
                name: 'Discordon [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/walkaround-discordon.mp4'
              },
              {
                name: 'Discordon [RU]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/walkaround-ru-discordon-t70.mp4'
              },
              {
                name: 'Normandie [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/walkaround-normandie.mp4'
              },
              {
                name: 'Normandie [RU]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/walkaround-ru-normandie-60.mp4'
              },
              {
                name: 'Helios [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/walkaround-helios.mp4'
              },
              {
                name: 'Helios [RU]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/walkaround-ru-helios-cracker-70.mp4'
              },
              {
                name: 'Crossland [FR]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/walkaround-crossland.mp4'
              },
              {
                name: 'Cover [RU]',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/walkaround-ru-cover-x-t70.mp4'
              }
            ]
          },
          {
            key: 'element2',
            subtitle: 'videos_products_title',
            blocks: [
              {
                name: 'Prima',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/videos/gregoire-besson/Videos-Product/product-prima.mp4'
              },
              {
                name: 'Rover',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/videos/gregoire-besson/Videos-Product/product-rover.mp4'
              },
              {
                name: 'Voyager',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/videos/gregoire-besson/Videos-Product/product-voyager.mp4'
              },
              {
                name: 'Explor',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/videos/gregoire-besson/Videos-Product/product-explor.mp4'
              },
              {
                name: 'Discordon',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/videos/gregoire-besson/Videos-Product/product-discordon.mp4'
              },
              {
                name: 'Cover',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/videos/gregoire-besson/Videos-Product/product-cover.m4v'
              },
              {
                name: 'Normandie',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/videos/gregoire-besson/Videos-Product/product-normandie.mp4'
              },
              {
                name: 'Helios',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/videos/gregoire-besson/Videos-Product/product-helios.mp4'
              },
              {
                name: 'Crossland',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/videos/gregoire-besson/Videos-Product/product-crossland.mp4'
              },
              {
                name: 'Tetra',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/videos/gregoire-besson/Videos-Product/product-tetra.mp4'
              }
            ]
          },
          {
            key: 'element3',
            subtitle: 'videos_customer_title',
            blocks: [
              {
                name: 'Prima',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/videos/gregoire-besson/Videos-CustomerTestimonials/prima-thierry-gaec-la-vache-landaise.mp4'
              },
              {
                name: 'Cover',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/videos/gregoire-besson/Videos-CustomerTestimonials/cover-fabrice-gaec-roches-blanches.mp4'
              },
              {
                name: 'Crossland',
                link:
                  'https://marketing.cellar-c2.services.clever-cloud.com/videos/gregoire-besson/Videos-CustomerTestimonials/crossland-cedric-cuma-isseenne.mp4'
              }
            ]
          },
          {
            key: 'element4',
            subtitle: 'videos_techno_title',
            blocks: [
              {
                trad: 'videos_techno_1_name',
                link:
                  'http://marketing.cellar-c2.services.clever-cloud.com/videos/gregoire-besson/Videos-Product/crank-leg-tendille-deportee.mp4'
              }
            ]
          }
        ]
      },
      prices: [
        {
          title: 'Machines (IN) €',
          link:
            'http://marketing.cellar-c2.services.clever-cloud.com/pricelists/gregoire-besson/2022-06-28-pricelist-gregoirebesson-in.pdf',
          image: {
            src: '/static/img/pricelists/gb-pricelist-in-img.jpg',
            label: 'Price list Gregoire Besson 2022 in euros, english version'
          }
        },
        {
          title: 'Machines (FR) €',
          link:
            'http://marketing.cellar-c2.services.clever-cloud.com/pricelists/gregoire-besson/2022-07-12-pricelist-parts-gregoirebesson-fr.pdf',
          image: {
            src: '/static/img/pricelists/gb-pricelist-fr-img.jpg',
            label: 'Liste de prix Gregoire Besson 2022 en euros, version française'
          }
        },
        {
          title: 'Machines (DE) €',
          link:
            'http://marketing.cellar-c2.services.clever-cloud.com/pricelists/gregoire-besson/2022-06-28-pricelist-gregoirebesson-de.pdf',
          image: {
            src: '/static/img/pricelists/gb-pricelist-de-img.jpg',
            label: 'Preisliste Gregoire Besson 2022 in Euro, deutsche Fassung'
          }
        }
      ],
      posters: [
        // {
        //   title: 'Français',
        //   link:
        //     'https://marketing.cellar-c2.services.clever-cloud.com/poster/Poster-gamme-A3-wb-FR.pdf',
        //   image: {
        //     src: '/static/img/posters/gb.jpg',
        //     label: 'Poster de la gamme Gregoire Besson'
        //   }
        // },
        // {
        //   title: 'Anglais',
        //   link:
        //     'https://marketing.cellar-c2.services.clever-cloud.com/poster/Poster-gamme-A3-wb-EN.pdf',
        //   image: {
        //     src: '/static/img/posters/gb.jpg',
        //     label: 'Poster of the range Gregoire Besson'
        //   }
        // },
        // {
        //   title: 'Italiano',
        //   link:
        //     'https://marketing.cellar-c2.services.clever-cloud.com/poster/Poster-gamme-A3-wb-IT.pdf',
        //   image: {
        //     src: '/static/img/posters/gb.jpg',
        //     label: 'Poster de la gamme Gregoire Besson'
        //   }
        // },
        // {
        //   title: 'русский',
        //   link:
        //     'https://marketing.cellar-c2.services.clever-cloud.com/poster/Poster-gamme-A3-wb-RU.pdf',
        //   image: {
        //     src: '/static/img/posters/gb.jpg',
        //     label: 'Poster de la gamme Gregoire Besson русский'
        //   }
        // },
        // {
        //   title: 'український',
        //   link:
        //     'https://marketing.cellar-c2.services.clever-cloud.com/poster/Poster-gamme-A3-wb-UA.pdf',
        //   image: {
        //     src: '/static/img/posters/gb.jpg',
        //     label: 'Poster de la gamme Gregoire Besson український'
        //   }
        // },
        // {
        //   title: 'Deutsch',
        //   link:
        //     'https://marketing.cellar-c2.services.clever-cloud.com/poster/Poster-gamme-A3-wb-DE.pdf',
        //   image: {
        //     src: '/static/img/posters/gb.jpg',
        //     label: 'Poster de la gamme Gregoire Besson Deutsch'
        //   }
        // }
      ]
    };
  },
  components: {
    LogoVue,
    BrandingVue,
    RangeNameVue,
    LeafletsVue,
    VideosVue,
    LinksVue,
    PhotoVue,
    PricesVue,
    PostersVue,
    FooterVue
  }
};
</script>
