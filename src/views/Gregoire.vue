<template>
  <div class='home'>
    <div class='container' id='main'>
      <div class='row'>
        <div class='col'>
          <h1>{{ $t('main_title') }}</h1>
          <p class='lead'>{{ $t('main_description') }}<a href='mailto:webmaster@gb-group.co'>webmaster@gb-group.co</a>.</p>  
        </div>
      </div>
      <br>
      <div class='container'>
        <div class='row'>
          <div class='col-12'>
              <h2>Grégoire Besson</h2>
          </div>
        </div>
      </div>
      <br>
      <LogoVue :logos='logos'></LogoVue>
      <BrandingVue :brandings='brandings'></BrandingVue>
      <IntroOutroVue :introOutros='introOutros'></IntroOutroVue>
      <LinksVue :socials='socials'></LinksVue>
      <PhotoVue :photos='photos'></PhotoVue>
      <LeafletsVue :leaflets='leaflets'></LeafletsVue>
      <VideosVue :videos='videos'></VideosVue>
      <PricesVue :prices='prices'></PricesVue>
      <PostersVue :posters='posters'></PostersVue>
    </div>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
// @ is an alias to /src
import LogoVue from '@/components/Layout/Logos.vue'
import BrandingVue from '@/components/Layout/Branding.vue'
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
        'item':[
          {
            'name': 'logo_white_on_color_description',
            'image': {
                'src': '/img/logos/logo-gregoire-besson-white-oncolor.png',
                'label': 'Travail du sol logo Gregoire Besson, gradient'
            },
            'jpg': '/img/logos/logo-gregoire-besson-white-oncolor.jpg',
            'png': '/img/logos/logo-gregoire-besson-white-oncolor.png',
            'eps': '/img/logos/logo-gregoire-besson-white-oncolor.eps',
            'svg': '/img/logos/logo-gregoire-besson-white-oncolor.svg'
          },
          {
            'name': 'logo_color_on_white',
            'image': {
                'src': '/img/logos/logo-gregoire-besson-color-onwhite.png',
                'label': 'Travail du sol logo Gregoire Besson, color on white'
            },
            'jpg': '/img/logos/logo-gregoire-besson-color-onwhite.jpg',
            'png': '/img/logos/logo-gregoire-besson-color-onwhite.png',
            'eps': '/img/logos/logo-gregoire-besson-color-onwhite.eps',
            'svg': '/img/logos/logo-gregoire-besson-color-onwhite.svg'
          },
          {
            'name': 'logo_white_on_transparent',
            'image': {
                'src': '/img/logos/logo-gregoire-besson-white-ontranspbg.png',
                'label': 'Travail du sol logo Gregoire Besson, white on transparent'
            },
            'png': '/img/logos/logo-gregoire-besson-white-ontranspbg.png',
            'eps': '/img/logos/logo-gregoire-besson-white-ontranspbg.eps',
            'svg': '/img/logos/logo-gregoire-besson-white-ontranspbg.svg'
          },
          {
            'name': 'logo_white_on_black',
            'image': {
                'src': '/img/logos/logo-gregoire-besson-white-onblack.png',
                'label': 'Travail du sol logo Gregoire Besson, white on black'
            },
            'jpg': '/img/logos/logo-gregoire-besson-white-onblack.jpg',
            'png': '/img/logos/logo-gregoire-besson-white-onblack.png',
            'eps': '/img/logos/logo-gregoire-besson-white-onblack.eps',
            'svg': '/img/logos/logo-gregoire-besson-white-onblack.svg'
          }
        ],
        'href': '/img/old-logos-gregoire-besson.zip',
        'class': 'btn-Gregoire'
      },
      brandings: {
        'name1': 'branding_color_title',
        'palette': 'pal-E2001A',
        'hex': '#E2001A',
        'rgb': '226 0 26',
        'cmyk': '0 100 100 0',
        'ral': '3020',
        'pantone': '485 C',
        'name2': 'branding_spelling_title',
        'brandname': 'Grégoire Besson',
        'item': [
          {'name': 'Grégoire-Besson'},
          {'name': 'Grégoire and Besson'},
          {'name': 'Grégoire et Besson'},
          {'name': 'GrégoireBesson'},
          {'name': 'GRÉGOIRE BESSON'},
          {'name': 'GRÉGOIRE Besson'}
        ],
        'name3': 'branding_font_title',
        'text': 'branding_font_text',
        'download': 'branding_font_download'
      },
      introOutros: [
        {
          'title': 'video_intro_title',
          'link_youtube': 'https://www.youtube.com/embed/UTUIye8nFKk?rel=0&amp;showinfo=0',
          'link_mp4': 'https://marketing.gb-group.co/videos/gregoire-besson-intro.mp4',
          'link_mov': 'https://marketing.gb-group.co/videos/gregoire-besson-intro.mov'
        },
        {
          'title': 'video_outro_title',
          'link_youtube': 'https://www.youtube.com/embed/pMXXboa1h6I?rel=0&amp;showinfo=0',
          'link_mp4': 'https://marketing.gb-group.co/videos/gregoire-besson-outro.mp4',
          'link_mov': 'https://marketing.gb-group.co/videos/gregoire-besson-outro.mov'
        }
      ],
      socials: [
        {
          'title': 'links_gregoire_website_title',
          'link': 'http://gregoire-besson.com',
          'image': {
            'src': '/img/screen-captures/gregoire-besson-com.png',
            'label': 'Website Grégoire Besson'
          },
          'description': 'links_gregoire_website_description'
        },
        {
          'title': 'links_gregoire_facebook_title',
          'link': 'https://www.facebook.com/GregoireBessonSAS/',
          'image': {
            'src': '/img/screen-captures/facebook-gregoire-besson.png',
            'label': 'Facebook Grégoire Besson'
          },
          'description': 'links_gregoire_facebook_description'
        },
        {
          'title': 'links_gregoire_youtube_title',
          'link': 'https://www.youtube.com/c/GregoireBessonSASofficial/',
          'image': {
            'src': '/img/screen-captures/youtube-gregoire-besson.png',
            'label': 'You Tube Chanel Grégoire Besson'
          },
          'description': 'links_gregoire_youtube_description'
        },
        {
          'title': 'links_gregoire_twitter_title',
          'link': 'https://twitter.com/gbessonsas/',
          'image': {
            'src': '/img/screen-captures/twitter-gregoire-besson.png',
            'label': 'Twitter Grégoire Besson'
          },
          'description': 'links_gregoire_twitter_description'
        },
        {
          'title': 'links_gregoire_instagram_title',
          'link': 'https://instagram.com/gregoire.besson/',
          'image': {
            'src': '/img/screen-captures/instagram-gregoire-besson.png',
            'label': 'Instagram Grégoire Besson'
          },
          'description': 'links_gregoire_instagram_description'
        }
      ],
      photos: {
        'brand': 'gregoire-besson',
        'item' :[
          {
            'title': 'photo_prima_title',
            'range': 'prima'
          },
          {
            'title': 'photo_rover_title',
            'range': 'rover'
          },
          {
            'title': 'photo_voyager_title',
            'range': 'voyager'
          },
          {
            'title': 'photo_explor_title',
            'range': 'explor'
          },
          {
            'title': 'photo_discordon_title',
            'range': 'discordon'
          },
          {
            'title': 'photo_cover_title',
            'range': 'cover'
          },
          {
            'title': 'photo_normandie_title',
            'range': 'normandie'
          },
          {
            'title': 'photo_helios_title',
            'range': 'helios'
          },
          {
            'title': 'photo_crossland_title',
            'range': 'crossland'
          },
          {
            'title': 'photo_tetra_title',
            'range': 'tetra'
          },
          {
            'title': 'photo_3d_details',
            'range': '3d'
          },
          {
            'title': 'photo_michelin_title',
            'range': 'michelin'
          }
        ]
      },
      leaflets: {
        'title': 'leaflets_title',
        'item':[
          {
            'key': 'element1',
            'blocks': [
              {
                'name': 'Andpak [EN]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/andpak-en.pdf'
              },
              {
                'name': 'Andpak [FR]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/andpak-fr.pdf'
              },
              {
                'name': 'Big V [FR]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/bigv-fr.pdf'
              },
              {
                'name': 'Big X [EN]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/bigx-en.pdf'
              },
              {
                'name': 'Big X [FR]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/bigx-fr.pdf'
              },
              {
                'name': 'Big X [RU]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/bigx-ru.pdf'
              },
              {
                'name': 'Class V [FR]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/classv-fr.pdf'
              },
              {
                'name': 'Combimix [EN]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/combimix-en.pdf'
              },
              {
                'name': 'Combimix [ES]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/combimix-es.pdf'
              },
              {
                'name': 'Combimix [FR]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/combimix-fr.pdf'
              },
              {
                'name': 'Crossland [DE]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/crossland-de.pdf'
              },
              {
                'name': 'Crossland [EN]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/crossland-en.pdf'
              },
              {
                'name': 'Crossland [FR]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/crossland-fr.pdf'
              },
              {
                'name': 'Crossland [IT]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/crossland-it.pdf'
              },
              {
                'name': 'Crossland [RU]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/crossland-ru.pdf'
              }
            ],
          },
          {
            'key': 'element2',
            'blocks': [
              {
                'name': 'Discodent [DE]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/discodent-de.pdf'
              },
              {
                'name': 'Discodent [EN]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/discodent-en.pdf'
              },
              {
                'name': 'Discodent [FR]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/discodent-fr.pdf'
              },
              {
                'name': 'Discodent [IT]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/discodent-it.pdf'
              },
              {
                'name': 'Discodent [RU]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/discodent-ru.pdf'
              },
              {
                'name': 'Discomix [FR]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/discomix-fr.pdf'
              },
              {
                'name': 'Discomix [EN]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/discomix-en.pdf'
              },
              {
                'name': 'DXRV [RU]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/dxrv-ru.pdf'
              },
              {
                'name': 'Extreme Conditions [EN-FR]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/extremeconditions-fr-en.pdf'
              },
              {
                'name': 'Extreme Conditions [RU-UK]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/extremeconditions-ru-uk.pdf'
              },
              {
                'name': 'Helios - Heliplow [DE]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/helios-heliplow-de.pdf'
              },
              {
                'name': 'Helios - Heliplow [EN]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/helios-heliplow-en.pdf'
              },
              {
                'name': 'Helios - Heliplow [FR]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/helios-heliplow-fr.pdf'
              },
              {
                'name': 'Helios - Heliplow [RU]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/helios-heliplow-ru.pdf'
              },
              {
                'name': 'Helios - Helikrak [RU]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/helios-helikrak-ru.pdf'
              },
              {
                'name': 'Normandie [EN]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/normandie-en.pdf'
              },
              {
                'name': 'Normandie [FR]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/normandie-fr.pdf'
              },
              {
                'name': 'Normandie [IT]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/normandie-it.pdf'
              },
              {
                'name': 'Normandie [RU]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/normandie-ru.pdf'
              }
            
            ],
          },
          {
            'key': 'element3',
            'blocks': [
              {
                'name': 'R4 [DE]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/r4-de.pdf'
              },
              {
                'name': 'R4 [EN]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/r4-en.pdf'
              },
              {
                'name': 'R4 [FR]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/r4-fr.pdf'
              },
              {
                'name': 'R4 RW4 [EN]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/r4-rw4-en.pdf'
              },
              {
                'name': 'R4 RW4 [FR]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/r4-rw4-fr.pdf'
              },
              {
                'name': 'R4 RW4 [IT]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/r4-rw4-it.pdf'
              },
              {
                'name': 'R41 R71 [EN]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/r41-r71-en.pdf'
              },
              {
                'name': 'R41 R71 [FR]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/r41-r71-fr.pdf'
              },
              {
                'name': 'R41 R71 [RU]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/r41-r71-ru.pdf'
              },
              {
                'name': 'R6 R8 [EN]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/r6-r8-en.pdf'
              },
              {
                'name': 'R6 R8 [DE]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/r6-r8-de.pdf'
              },
              {
                'name': 'R6 R8 [FR]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/r6-r8-fr.pdf'
              },
              {
                'name': 'R6 R8 [HU]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/r6-r8-hu.pdf'
              },
              {
                'name': 'R6 R8 [IT]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/r6-r8-it.pdf'
              },
              {
                'name': 'R6 R8 [RU]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/r6-r8-ru.pdf'
              },
              {
                'name': 'RW6 RW8 RW9 [EN]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/rw6-rw8-rw9-en.pdf'
              },
              {
                'name': 'RW6 RW8 RW9 [ES]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/rw6-rw8-rw9-es.pdf'
              },
              {
                'name': 'RW6 RW8 RW9 [FR]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/rw6-rw8-rw9-fr.pdf'
              },
              {
                'name': 'RW6 RW8 RW9 [IT]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/rw6-rw8-rw9-it.pdf'
              },
              {
                'name': 'RW6 RW8 RW9 [RU]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/rw6-rw8-rw9-ru.pdf'
              },
              {
                'name': 'RW6 RW8 RW9 [DE]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/rw6-rw8-rw9-de.pdf'
              }
            ],
          },
          {
            'key': 'element4',
            'blocks': [
              {
                'name': 'SP8 [EN]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/sp8-en.pdf'
              },
              {
                'name': 'SP8 [FR]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/sp8-fr.pdf'
              },
              {
                'name': 'Sper81 [EN]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/sper8-EN.pdf'
              },
              {
                'name': 'Sper81 [FR]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/sper8-FR.pdf'
              },
              {
                'name': 'SP9 [EN]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/sp9-en.pdf'
              },
              {
                'name': 'SP9 [FR]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/sp9-fr.pdf'
              },
              {
                'name': 'SP9 [RU]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/sp9-ru.pdf'
              },
              {
                'name': 'SPF9 SPL9 [DE]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/spf9-spl9-de.pdf'
              },
              {
                'name': 'SPF9 SPL9 [EN]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/spf9-spl9-en.pdf'
              },
              {
                'name': 'SPF9 SPL9 [FR]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/spf9-spl9-fr.pdf'
              },
              {
                'name': 'SPF9 SPL9 [RU]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/spf9-spl9-ru.pdf'
              },
              {
                'name': 'SPMF SPML [RU]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/spmf-spml-de.pdf'
              },
              {
                'name': 'SXPro [FR]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/sxpro-fr.pdf'
              },
              {
                'name': 'Tetra [FR]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/tetra-fr.pdf'
              },
              {
                'name': 'XL XXL XXLWide [DE]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/xl-xxl-xxlwide-de.pdf'
              },
              {
                'name': 'XL XXL XXLWide [EN]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/xl-xxl-xxlwide-en.pdf'
              },
              {
                'name': 'XL XXL XXLWide [FR]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/xl-xxl-xxlwide-fr.pdf'
              },
              {
                'name': 'XL XXL XXLWide [RU]',
                'link': 'https://marketing.cellar.services.clever-cloud.com/leaflets/gregoire-besson/xl-xxl-xxlwide-ru.pdf'
              },
            ],
          }
        ]
      },
      videos: {
        'title': 'videos_title',
        'item': [
          {
            'key': 'element1',
            'subtitle': 'videos_walkaround_title',
            'blocks': [
              {
                'name': 'Prima',
                'link': 'https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/walkaround-prima.mp4'
              },
              {
                'name': 'Rover',
                'link': 'https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/walkaround-rover.mp4'
              },
              {
                'name': 'Voyager',
                'link': 'https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/walkaround-voyager.mp4'
              },
              {
                'name': 'Explor',
                'link': 'https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/walkaround-explor.mp4'
              },
              {
                'name': 'Discordon',
                'link': 'https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/walkaround-discordon.mp4'
              },
              {
                'name': 'Normandie',
                'link': 'https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/walkaround-normandie.mp4'
              },
              {
                'name': 'Helios',
                'link': 'https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/walkaround-helios.mp4'
              },
              {
                'name': 'Crossland',
                'link': 'https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/walkaround-crossland.mp4'
              }
            ]
          },
          {
            'key': 'element2',
            'subtitle': 'videos_products_title',
            'blocks': [
              {
                'name': 'Prima',
                'link': 'https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-Product/product-prima.mp4'
              },
              {
                'name': 'Rover',
                'link': 'https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-Product/product-rover.mp4'
              },
              {
                'name': 'Voyager',
                'link': 'https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-Product/product-voyager.mp4'
              },
              {
                'name': 'Explor',
                'link': 'https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-Product/product-explor.mp4'
              },
              {
                'name': 'Discordon',
                'link': 'https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-Product/product-discordon.mp4'
              },
              {
                'name': 'Cover',
                'link': 'https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-Product/product-cover.mp4'
              },
              {
                'name': 'Normandie',
                'link': 'https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-Product/product-normandie.mp4'
              },
              {
                'name': 'Helios',
                'link': 'https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/product-helios.mp4'
              },
              {
                'name': 'Crossland',
                'link': 'https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/product-crossland.mp4'
              },
              {
                'name': 'Tetra',
                'link': 'https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-WalkAround/product-tetra.mp4'
              }
            ]
          },
          {
            'key': 'element3',
            'subtitle': 'videos_customer_title',
            'blocks': [
              {
                'name': 'Prima',
                'link': 'https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-CustomerTestimonials/prima-thierry-gaec-la-vache-landaise.mp4'
              },
              {
                'name': 'Cover',
                'link': 'https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-CustomerTestimonials/cover-fabrice-gaec-roches-blanches.mp4'
              },
              {
                'name': 'Crossland',
                'link': 'https://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-CustomerTestimonials/crossland-cedric-cuma-isseenne.mp4'
              }
            ]
          },
          {
            'key': 'element4',
            'subtitle': 'videos_techno_title',
            'blocks': [
              {
                'trad': 'videos_techno_1_name',
                'link': 'http://marketing.cellar.services.clever-cloud.com/videos/gregoire-besson/Videos-Product/crank-leg-tendille-deportee.mp4'
              }
            ]
          }
        ]
      },
      prices: [
        {
          'title': 'Machines (EN) €',
          'link': 'http://marketing.cellar.services.clever-cloud.com/pricelists/gregoire-besson/pricelist-gregoirebesson-en.pdf',
          'image': {
            'src': '/img/pricelists/gb.jpg',
            'label': 'Price liste Gregoire Besson 2018 in euros, english version'
          }
        },
        {
          'title': 'Machines (EN) £',
          'link': 'http://marketing.cellar.services.clever-cloud.com/pricelists/gregoire-besson/pricelist-gregoirebesson-en-pounds.pdf',
          'image': {
            'src': '/img/pricelists/gb.jpg',
            'label': 'Price liste Gregoire Besson 2018 in pounds, english version'
          }
        },
        {
          'title': 'Machines (FR)',
          'link': 'http://marketing.cellar.services.clever-cloud.com/pricelists/gregoire-besson/pricelist-gregoirebesson-fr.pdf',
          'image': {
            'src': '/img/pricelists/gb.jpg',
            'label': 'Liste de prix Gregoire Besson 2018 en euros, version française'
          }
        },
        {
          'title': 'Machines (IT)',
          'link': 'http://marketing.cellar.services.clever-cloud.com/pricelists/gregoire-besson/pricelist-gregoirebesson-it.pdf',
          'image': {
            'src': '/img/pricelists/gb.jpg',
            'label': 'Listino prezzi Gregoire Besson 2018 in euros in italiano'
          }
        }
      ],
      posters: [
        {
          'title': 'Français',
          'link': 'https://marketing.cellar.services.clever-cloud.com/poster/Poster-gamme-A3-wb-FR.pdf',
          'image': {
            'src': '/img/posters/gb.jpg',
            'label': 'Poster de la gamme Gregoire Besson'
          }
        },
        {
          'title': 'Anglais',
          'link': 'https://marketing.cellar.services.clever-cloud.com/poster/Poster-gamme-A3-wb-EN.pdf',
          'image': {
            'src': '/img/posters/gb.jpg',
            'label': 'Poster of the range Gregoire Besson'
          }
        },
        {
          'title': 'Italiano',
          'link': 'https://marketing.cellar.services.clever-cloud.com/poster/Poster-gamme-A3-wb-IT.pdf',
          'image': {
            'src': '/img/posters/gb.jpg',
            'label': 'Poster de la gamme Gregoire Besson'
          }
        },
        {
          'title': 'український',
          'link': 'https://marketing.cellar.services.clever-cloud.com/poster/Poster-gamme-A3-wb-UA.pdf',
          'image': {
            'src': '/img/posters/gb.jpg',
            'label': 'Poster de la gamme Gregoire Besson український'
          }
        },
       
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
    PostersVue,
    FooterVue
  }
}
</script>
