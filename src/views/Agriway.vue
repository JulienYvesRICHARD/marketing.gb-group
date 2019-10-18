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
                        <h2>Agriway</h2>
                    </div>
                </div>
            </div>
            <br>
            <LogoVue :logos="logos"></LogoVue>
            <BrandingVue :brandings="brandings"></BrandingVue>
            <IntroOutroVue :introOutros="introOutros"></IntroOutroVue>
            <LinksVue :socials="socials"></LinksVue>
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
import FooterVue from '@/components/Footer.vue'


export default {    
  name: 'agriway',
  data() {
    return {
    logos: {
        "item":[
            {
            "name": "logo_white_on_color",
            "image": {
                "src": "/static/img/logos/logo-agriway-white-oncolor.png",
                "label": "logo Agriway, couleur sur fon blanc"
            },
            "jpg": "/static/img/logos/logo-agriway-white-oncolor.jpg",
            "png": "/static/img/logos/logo-agriway-white-oncolor.png",
            "eps": "/static/img/logos/logo-agriway-white-oncolor.eps",
            "svg": "/static/img/logos/logo-agriway-white-oncolor.svg"
            },
            {
            "name": "logo_color_on_white",
            "image": {
                "src": "/static/img/logos/logo-agriway-color-onwhite.png",
                "label": "logo Agriway, color on white"
            },
            "jpg": "/static/img/logos/logo-agriway-color-onwhite.jpg",
            "png": "/static/img/logos/logo-agriway-color-onwhite.png",
            "eps": "/static/img/logos/logo-agriway-color-onwhite.eps",
            "svg": "/static/img/logos/logo-agriway-color-onwhite.svg"
            },
            {
            "name": "logo_white_on_transparent",
            "image": {
                "src": "/static/img/logos/logo-agriway-white-ontranspbg.png",
                "label": "logo Agriway, white on transparent"
            },
            "png": "/static/img/logos/logo-agriway-white-ontranspbg.png",
            "eps": "/static/img/logos/logo-agriway-white-ontranspbg.eps",
            "svg": "/static/img/logos/logo-agriway-white-ontranspbg.svg"
            },
            {
            "name": "logo_white_on_black",
            "image": {
                "src": "/static/img/logos/logo-agriway-white-onblack.png",
                "label": "logo Agriway, white on black"
            },
            "jpg": "/static/img/logos/logo-agriway-white-onblack.jpg",
            "png": "/static/img/logos/logo-agriway-white-onblack.png",
            "eps": "/static/img/logos/logo-agriway-white-onblack.eps",
            "svg": "/static/img/logos/logo-agriway-white-onblack.svg"
            }
        ],
        "class": "btn-Agriway"
    },
    brandings: {
        "name1": "branding_color_title",
        "palette": "pal-266D3B",
        "hex": "#266D3B",
        "rgb": "38 109 59",
        "cmyk": "83 33 88 20",
        "ral": "6001",
        "pantone": "349",
        "name2": "branding_spelling_title",
        "brandname": "Agriway",
        "item": [
            {"name": "Agri-way"},
            {"name": "agriway"},
            {"name": "Agri&nbsp;way"},
            {"name": "AGRI-Way"},
            {"name": "AGRIway"},
            {"name": "AGRIWAY"},
        ],
        "name3": "branding_font_title",
        "text": "branding_font_text",
        "download": "branding_font_download"
    },
    introOutros: [
        {
        "title": "video_intro_title",
        "link_youtube": "https://www.youtube.com/embed/dThppLstL-0?rel=0&amp;showinfo=0",
        "link_mp4": "https://marketing.gb-group.co/videos/agriway-intro.mp4",
        "link_mov": "https://marketing.gb-group.co/videos/agriway-intro.mov"
        },
        {
        "title": "video_outro_title",
        "link_youtube": "https://www.youtube.com/embed/fKP9viHB238?rel=0&amp;showinfo=0",
        "link_mp4": "https://marketing.gb-group.co/videos/agriway-outro.mp4",
        "link_mov": "https://marketing.gb-group.co/videos/agriway-outro.mov"
        }
    ],
    socials: [
      {
      "title": "links_agriway_website_title",
      "link": "http://agriway.it",
      "image": {
        "src": "/static/img/screen-captures/agriway-it.png",
        "label": "Website Agriway"
        },
        "description": "links_agriway_website_description"
      }
    ]
    };
  },
  components: {
    LogoVue,
    BrandingVue,
    IntroOutroVue,
    LinksVue,
    FooterVue 
  }
}
</script>

<style>

</style>