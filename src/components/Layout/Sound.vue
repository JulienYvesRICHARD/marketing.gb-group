/* eslint-disable */
<template>
  <div class="container" id="sound">
    <a class="anchor" name="sound"></a>
    <h3>{{ $t('sound_title') }}</h3>
    <div class="row links">
      <div class="col-12 col-sm-6 col-md-4">
        <div class="card">
          <div class="card-body">
            <h4>{{ sound.title1 }}</h4>
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" :src="sound.link1"></iframe>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-4">
        <div class="card">
          <div class="card-body">
            <h5>{{ sound.title2 }}</h5>
            <ul>
              <li><a :href="sound.link2" download>{{ (sound.subtitle2) }}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-4">
        <div class="card">
          <div class="card-body">
            <h5>{{ sound.title3 }}</h5>
            <ul>
              <li><a :href="sound.link3_1" download>{{ (sound.subtitle3_1) }}</a></li>
              <li><a :href="sound.link3_2" download>{{ (sound.subtitle3_2) }}</a></li>
              <li><a :href="sound.link3_3" download>{{ (sound.subtitle3_3) }}</a></li>
              <li><a :href="sound.link3_4" download>{{ (sound.subtitle3_4) }}</a></li>
              <li><a :href="sound.link3_5" download>{{ (sound.subtitle3_5) }}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'SoundVue',
  props: ['sound'],
  data () {
    return {}
  }
}
</script>
