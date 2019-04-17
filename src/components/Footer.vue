<template>
    <div class="cookies" id="bandeau-cookies">
        <div class="row">
            <div class="col-md-8 col-xs-6">
                <small><p>{{ $t('cookies_text')}}</p></small>
            </div>
            <div class="col-md-2 responsive text-center">
                <a class="btn btn-GB" id="cookies" @click="infoRemove()">OK</a>
            </div>
            <div class="col-md-2 responsive text-center">
                <a href="http://marketing.cellar.services.clever-cloud.com/Legal_information/Data%20protection%20policy%20of%20the%20website.pdf" target="_blank" class="btn btn-GB">{{ $t('cookies_more_info')}}</a>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'FooterVue',
  data() {
    return {}
  },
  mounted() {
    let cookies = sessionStorage.getItem('user')
    if (cookies != 'cookiesAccepted') {
        document.getElementById('bandeau-cookies').style.display= 'inline'
    } else {
        sessionStorage.setItem('user', 'cookiesAccepted');
    }
  },
  methods: {
    infoRemove() {
        sessionStorage.setItem('user', 'cookiesAccepted');
        document.getElementById('bandeau-cookies').style.display = 'none'
    }
  }
}
</script>
