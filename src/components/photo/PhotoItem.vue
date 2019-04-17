<template>
    <div>
        <h5>{{ $t(title)}}</h5>
        <p><a @click="showmodal()">{{ $t('photos_view_photos') }}</a></p>
        <div class="modalPhoto" v-if="show === true">
            <div class="container" id="photoItem">
                <h4 class="text-center" style="padding: 5%;">{{ $t(images.title) }}</h4>
                <img src="/img/icons/icons8-cancel-48.png" @click="showmodal()" class="closingcross">
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-3 photos-card" v-for="image in images.item" :key="image.name">
                        <div class="ratio">
                            <img :src="'https://marketing.cellar.services.clever-cloud.com/photos/' + brand + '/small/' + image.name" alt="images.subtitle" class="thumbnail">
                            <p class='text-center' style='margin: 0; padding: 0.5rem; font-size:0.7rem;\'><small>{{ image.name }}</small></p>
                            <a class='text-center' :href="'https://marketing.cellar.services.clever-cloud.com/photos/' + brand + '/original/' + image.name" download target='_blank'><small style='font-weight: bold; padding-bottom: 0.5rem; display: block;'>Download &darr;</small></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'PhotoItemVue',
    props: ['range', 'title', 'brand'],
    data() {
        return {
            show: false,
            images: {}
        }
    },
    created() {
        fetch('/photos/' + this.brand + '/' + this.range + '.json')
            .then(res => res.json())
            .then(data => {
            this.images = data
        })
    },
    methods : {
      showmodal() {
        this.show = !this.show
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .modalPhoto {
        background-color: lightgray;
        opacity: 0.95;
        position: fixed;
        top: 5%;
        right: 10%;
        border: 1px solid black;
        box-shadow: 2px 2px 4px lightgray;
        width: 80%;
        max-height: 100vh;
        z-index: 100;
        overflow-y: scroll;
    }

    .closingcross {
      position: fixed;
      right: 12%;
      top: 7%;
    }

    .ratio {
        display: block; 
        width: 100%; 
        text-align: center;
        height: 100%;
    }

    .thumbnail {
        width: 200px;
        max-height: 150px;
    }

    .photos-card {
        height: 250px;
    }
</style>
