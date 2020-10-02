<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col">
          <a class="anchor" name="logo" id="main"></a>
          <h1>{{ $t("main_title") }}</h1>
          <p class="lead">
            {{ $t("main_description")
            }}<a href="mailto:webmaster@gb-group.co">webmaster@gb-group.co</a>.
          </p>
        </div>
      </div>
      <br />
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>GB Group</h2>
          </div>
        </div>
      </div>
      <br />
      <LogoVue :logos="logos"></LogoVue>
      <BrandingVue :brandings="brandings"></BrandingVue>
      <SoundVue :sound="sound"></SoundVue>
      <IntroOutroVue :introOutros="introOutros"></IntroOutroVue>
      <LinksVue :socials="socials"></LinksVue>
      <SubsidiariesVue :subsidiaries="subsidiaries"></SubsidiariesVue>
      <PressVue :pressReleases="pressReleases"></PressVue>
      <PhotoVue :photos="photos"></PhotoVue>
      <PrintVue :printCharters="printCharters"></PrintVue>
      <PowerPointVue :powerPointTemplates="powerPointTemplates"></PowerPointVue>
    </div>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
// @ is an alias to /src
import LogoVue from '@/components/Layout/Logos.vue'
import BrandingVue from '@/components/Layout/Branding.vue'
import SoundVue from '@/components/Layout/Sound.vue'
import IntroOutroVue from '@/components/Layout/Intro-Outro.vue'
import LinksVue from '@/components/Layout/Links.vue'
import SubsidiariesVue from '@/components/Layout/Subsidiaries.vue'
import PressVue from '@/components/Layout/Press.vue'
import PhotoVue from '@/components/Layout/Photo.vue'
import PrintVue from '@/components/Layout/Print.vue'
import PowerPointVue from '@/components/Layout/PowerPoint.vue'
import FooterVue from '@/components/Footer.vue'

export default {
  name: "home",
  data() {
    return {
      logos: {
        item: [
          {
            name: "logo_gradient_description",
            image: {
              src: "/static/img/logos/logo-gb-group-gradient-oncolor.jpg",
              label: "logo GB Group, gradient"
            },
            jpg: "/static/img/logos/logo-gb-group-gradient-oncolor.jpg",
            png: "/static/img/logos/logo-gb-group-gradient-oncolor.png",
            eps: "/static/img/logos/logo-gb-group-gradient-oncolor.eps",
            svg: "/static/img/logos/logo-gb-group-gradient-oncolor.svg"
          },
          {
            name: "logo_color_on_white",
            image: {
              src: "/static/img/logos/logo-gb-group-color-onwhite.jpg",
              label: "logo GB Group, color on white"
            },
            jpg: "/static/img/logos/logo-gb-group-color-onwhite.jpg",
            png: "/static/img/logos/logo-gb-group-color-onwhite.png",
            eps: "/static/img/logos/logo-gb-group-color-onwhite.eps",
            svg: "/static/img/logos/logo-gb-group-color-onwhite.svg"
          },
          {
            name: "logo_white_on_transparent",
            image: {
              src: "/static/img/logos/logo-gb-group-white-ontranspbg.jpg",
              label: "logo GB Group, white on transparent"
            },
            png: "/static/img/logos/logo-gb-group-white-ontranspbg.png",
            eps: "/static/img/logos/logo-gb-group-white-ontranspbg.eps",
            svg: "/static/img/logos/logo-gb-group-white-ontranspbg.svg"
          },
          {
            name: "logo_white_on_black",
            image: {
              src: "/static/img/logos/logo-gb-group-white-onblack.jpg",
              label: "logo GB Group, white on black"
            },
            jpg: "/static/img/logos/logo-gb-group-white-onblack.jpg",
            png: "/static/img/logos/logo-gb-group-white-onblack.png",
            eps: "/static/img/logos/logo-gb-group-white-onblack.eps",
            svg: "/static/img/logos/logo-gb-group-white-onblack.svg"
          }
        ],
        class: "btn-GB"
      },
      brandings: {
        name1: "branding_color_title",
        palette: "pal-3C3C3B",
        hex: "#3C3C3B",
        rgb: "60 60 59",
        cmyk: "0 0 2 76",
        ral: "6015",
        pantone: "Black 7 C",
        name2: "branding_spelling_title",
        brandname: "GB Group",
        item: [
          { name: "Groupe GB" },
          { name: "GB Groupe" },
          { name: "GB GROUP" },
          { name: "gb group" },
          { name: "gbGroup" },
          { name: "Gruppe GB" }
        ],
        name3: "branding_font_title",
        text: "branding_font_text",
        download: "branding_font_download"
      },
      sound: {
        title1: "AudioDNA",
        link1:
          "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/399968445&amp;color=%233b3b3c&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=false",
        title2: "MP3",
        subtitle2: "256kpbs.mp3",
        link2: "http://marketing.cellar.services.clever-cloud.com/sound/gbgroup-256kpbs.mp3",
        title3: "WAV",
        subtitle3_1: "CCIT-LOI-A.wav",
        link3_1: "http://marketing.cellar.services.clever-cloud.com/sound/gbgroup-CCITT-Loi-A.wav",
        subtitle3_2: "CCITT-uLaw.wav",
        link3_2: "http://marketing.cellar.services.clever-cloud.com/sound/gbgroup-CCITT-uLaw.wav",
        subtitle3_3: "GSM-6-10.wav",
        link3_3: "http://marketing.cellar.services.clever-cloud.com/sound/gbgroup-GSM-6-10.wav",
        subtitle3_4: "PCM-8kHz-8b-mono.wav",
        link3_4:
          "http://marketing.cellar.services.clever-cloud.com/sound/gbgroup-PCM-8kHz-8b-mono.wav",
        subtitle3_5: "PCM-8kHz-16b-mono.wav",
        link3_5:
          "http://marketing.cellar.services.clever-cloud.com/sound/gbgroup-PCM-8kHz-16b-mono.wav"
      },
      introOutros: [
        {
          title: "video_intro_title",
          link_youtube: "https://www.youtube.com/embed/x4LoyFZWMZU?rel=0&amp;showinfo=0",
          link_mp4: "https://marketing.gb-group.co/static/videos/gb-group-intro.mp4",
          link_mov: "https://marketing.gb-group.co/static/videos/gb-group-intro.mov"
        },
        {
          title: "video_outro_title",
          link_youtube: "https://www.youtube.com/embed/7Ot2YHjemUA?rel=0&amp;showinfo=0",
          link_mp4: "https://marketing.gb-group.co/videoss/gb-group-outro.mp4",
          link_mov: "https://marketing.gb-group.co/static/videos/gb-group-outro.mov"
        }
      ],
      socials: [
        {
          title: "links_group_website_title",
          link: "https://gb-group.co",
          image: {
            src: "/static/img/screen-captures/gb-group-co.png",
            label: "Website GB Group"
          },
          description: "links_group_website_description"
        },
        {
          title: "links_group_twitter_title",
          link: "https://twitter.com/gbgroup_/",
          image: {
            src: "/static/img/screen-captures/twitter-gbgroup.png",
            label: "Twitter GB Group"
          },
          description: "links_group_twitter_description"
        }
      ],
      subsidiaries: [
        {
          name: "GB Group France",
          street: "Rue Victor Gregoire",
          city: "49230 Montigné Montfaucon",
          country: "France",
          phone: "+33 (0)2 41 64 72 67",
          gpscoordinate: "47.084429, -1.135755",
          image: {
            src: "/static/img/teams/gb-group-france-600.jpg",
            label: "Machine de travail du sol Equipe commercial France"
          },
          googlemaps: "rue+Victor+Gregoire,49230+Montigne+Montfaucon,France"
        },
        {
          name: "GB Group Italy",
          street: "Via dell’industria, 9–9/A–9/B",
          city: "Monte Roberto (AN)",
          country: "Italia",
          phone: "+39 0731 375970",
          gpscoordinate: "43.482243, 13.182024",
          image: {
            src: "/static/img/teams/gb-group-italy-600.jpg",
            label: "Soil preparation Salesman Team in Italy"
          },
          googlemaps: "Via+dell’industria+9,Monte+Roberto,Ancona,Italia"
        },
        {
          name: "GB Group Canada",
          street: "4480, Rue Martineau",
          city: "St Hyacinthe (P. Québec) - J2R 1V1",
          country: "Canada",
          phone: "+1 450-799-5615",
          gpscoordinate: "45.652349, -72.945034",
          image: {
            src: "/static/img/teams/gb-group-canada-600.jpg",
            label: "Soil preparation Salesman Team in Canada"
          },
          googlemaps: "4480+Rue+Martineau,Saint-Hyacinthe,QC+J2R,Canada"
        },
        {
          name: "GB Group Poland",
          street: "Kowanówko ul.",
          city: "Obornicka 1A 64-600 Oborniki",
          country: "Polska",
          phone: "+48 61 297 75 30",
          gpscoordinate: "52.667903, 16.846662",
          image: {
            src: "/static/img/teams/gb-group-poland-600.jpg",
            label: "Soil preparation Salesman Team in Poland"
          },
          googlemaps: "Kowanówko+ul.,Obornicka+1a,64-600+Oborniki,Polska"
        },
        {
          name: "GB Group Eastern Europe",
          country: "Hungary",
          country_covered:
            "Hungary, Slovakia, Check Republic, Slovenia, Croatia, Serbia, Romania, Bulgaria.",
          phone: "+36 30 373 9167",
          gpscoordinate: "47.520283, 21.633754",
          image: {
            src: "/static/img/teams/gb-group-eastern-europe-600.jpg",
            label: " Soil preparationSaleman in Eastern Europe"
          },
          googlemaps: "Debrecen,+Híd+u.+4,+4030+Hongrie"
        },
        {
          name: "GB Group Vostok",
          street: "308006, г.Белгород",
          city: " ул. Корочанская 132 А,",
          country: "Russia",
          phone: "+7 472 240-22-10",
          gpscoordinate: "50.590156, 36.627327",
          image: {
            src: "/static/img/teams/gb-group-vostok-600.jpg",
            label: "Soil preparation Salesman team in Russia"
          },
          googlemaps: "Korochanskaya+Ulitsa,132А,Belgorod,Belgorodskaya+oblast,Russia,308006"
        },
        {
          name: "GB Group Ukraine",
          street: "18028, Україна, Черкаська обл., м. Черкаси, вул.",
          city: "Самійла Кішки, буд. 202.",
          country: "Ukraine",
          phone: "+38 0472 712 823",
          gpscoordinate: "49.415296, 32.058639",
          image: {
            src: "/static/img/teams/gb-group-ukraine-600.jpg",
            label: "Soil preparation Salesman team in Ukraine"
          },
          googlemaps:
            "18028,Україна,Черкаська+обл.,м.+Черкаси,+вул.+Рози,Люксембург,буд+202,Ukraine"
        },
        {
          name: "GB Group China",
          street: "法国格力格尔-贝松公司 北京代表处",
          city: "静里中街3号长信大厦220室",
          country: "China",
          phone: "+86 1065 08 06 40",
          gpscoordinate: "39.915814, 116.485848",
          image: {
            src: "/static/img/teams/gb-group-china-600.jpg",
            label: "Soil preparation Salesman team in China"
          },
          googlemaps:
            "%E6%B3%95%E5%9B%BD%E6%A0%BC%E5%8A%9B%E6%A0%BC%E5%B0%94-%E8%B4%9D%E6%9D%BE%E5%85%AC%E5%8F%B8+%E5%8C%97%E4%BA%AC%E4%BB%A3%E8%A1%A8%E5%A4%84++%E9%9D%99%E9%87%8C%E4%B8%AD%E8%A1%973%E5%8F%B7%E9%95%BF%E4%BF%A1%E5%A4%A7%E5%8E%A6220%E5%AE%A4++China"
        }
      ],
      pressReleases: [
        {
          date: "13/05/2019",
          title: "Configurator App mobile",
          brand: "Gregoire Besson",
          langues: [{ name: "press_release_french" }],
          href:
            "http://marketing.cellar.services.clever-cloud.com/press/1905_Application_mobile.pdf"
        },
        {
          date: "05/04/2019",
          title: "Serenity +",
          brand: "Gregoire Besson",
          langues: [{ name: "press_release_french" }],
          href: "http://marketing.cellar.services.clever-cloud.com/press/1904_Serenity_%2B.pdf"
        },
        {
          date: "15/03/2019",
          title: "Journées aux champs",
          brand: "Gregoire Besson",
          langues: [{ name: "press_release_french" }],
          href:
            "http://marketing.cellar.services.clever-cloud.com/press/1903_Journ%C3%A9es_aux_champs.pdf"
        },
        {
          date: "18/01/2019",
          title: "GB Tracking",
          brand: "Gregoire Besson",
          langues: [{ name: "press_release_french" }],
          href: "http://marketing.cellar.services.clever-cloud.com/press/1812%20GB%20Tracking.pdf"
        },
        {
          date: "07/10/2018",
          title: "Les 4 saisons",
          brand: "Gregoire Besson",
          langues: [{ name: "press_release_french" }],
          href:
            "http://marketing.cellar.services.clever-cloud.com/press/1810_communiqu%C3%A9_4_saisons.pdf"
        },
        {
          date: "22/09/2018",
          title: "Le Configurateur",
          brand: "Gregoire Besson",
          langues: [{ name: "press_release_french" }],
          href:
            "https://marketing.cellar.services.clever-cloud.com/press/Configurateur-en-ligne.pdf"
        },
        {
          date: "20/09/2018",
          title: "Nouveau naming",
          brand: "Gregoire Besson",
          langues: [{ name: "press_release_french" }],
          href:
            "https://marketing.cellar.services.clever-cloud.com/press/Naming%20and%20products.zip"
        },
        {
          date: "14/09/2018",
          title: "SIMA 2019",
          brand: "GB Group",
          langues: [{ name: "press_release_french" }],
          href: "https://marketing.cellar.services.clever-cloud.com/press/SIMA-2019.pdf"
        },
        {
          date: "03/09/2018",
          title: "InnovAgri 2018",
          brand: "GB Group",
          langues: [{ name: "press_release_french" }],
          href: "https://marketing.cellar.services.clever-cloud.com/press/innov-agri.pdf"
        },
        {
          date: "25/04/2018",
          title: "GB Dealers Days & DriveTheChange",
          brand: "GB Group",
          langues: [{ name: "press_release_french" }],
          href: "https://marketing.cellar.services.clever-cloud.com/press/gb-dealers-days-fr.zip"
        },
        {
          date: "10/11/2017",
          title: "Agritechnica 2017: Press Book / Dossier de Presse",
          brand: "GB Group",
          langues: [{ name: "press_release_english" }, { name: "press_release_french" }],
          href: "https://marketing.cellar.services.clever-cloud.com/press/agritechnica-2017.zip"
        }
      ],
      photos: {
        brand: "gb-group",
        item: [
          {
            title: "photo_title_gbgroup1",
            range: "prefet"
          }
        ]
      },
      printCharters: [
        {
          image: {
            src: "/static/img/graphic-charter/printgraphiccharter.png",
            label: "Charte graphique GB Group"
          },
          href:
            "https://marketing.cellar.services.clever-cloud.com/graphic-charter/gb-group-graphic-charter.pdf"
        }
      ],
      powerPointTemplates: [
        {
          image: {
            src: "/static/img/powerpoint-template/powerpointtemplate.png",
            label: "Power Point template fdr GB Group"
          },
          href: {
            src1:
              "https://marketing.cellar.services.clever-cloud.com/powerpoint-template/gb-group-powerpoint-template-16-9.pptx",
            src2:
              "https://marketing.cellar.services.clever-cloud.com/powerpoint-template/gb-group-powerpoint-template-4-3.pptx"
          }
        }
      ],
    };
  },
  components: {
    LogoVue,
    BrandingVue,
    SoundVue,
    IntroOutroVue,
    LinksVue,
    SubsidiariesVue,
    PressVue,
    PhotoVue,
    PrintVue,
    PowerPointVue,
    FooterVue
  }
};
</script>

<style></style>
