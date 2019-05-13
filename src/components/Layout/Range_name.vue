/* eslint-disable */
<template>
  <div class="container" id="range">
    <a class="anchor" name="range"></a>
    <h3>{{ $t('range_spelling_title')}}</h3>
    <div class="row" >
        <div class="col-12 col-sm-6 col_md-6" v-for="item in range" :key="item">
          <h4 class="text-center mt-2">{{ item.name }}</h4>
          <div class="m-1 card">
            <div class="row p-2 ">
              <div class="col-12 col-sm-12 col-lg-4 range p-3" v-for="machine in item.machine" :key="machine">
                <h5 class="text-center" v-if="machine.title">{{ $t('range_spelling_space')}}</h5>
                <div v-for="title in machine.title" :key="title">
                  <h5 v-if="title.goodspelling">
                      <img src="/static/img/correct.png">
                      <span class="correct">{{ title.goodspelling }}</span>
                  </h5>
                  <span v-if="title.wrongspelling">
                      <img src="/static/img/wrong.png">
                      <span class="wrong rangeSpace">{{ title.wrongspelling }}</span><br>
                  </span>
                </div>
                <h5 class="text-center" v-if="machine.stickers">{{ $t('range_spelling_sticker')}}</h5>
                <div v-for="sticker in machine.stickers" :key="sticker">
                  <h5 v-if="sticker.goodspelling">
                      <img src="/static/img/correct.png">
                      <span class="correct">{{ sticker.goodspelling }}</span>
                  </h5>
                  <span v-if="sticker.wrongspelling">
                      <img src="/static/img/wrong.png">
                      <span class="wrong rangeSpace">{{ sticker.wrongspelling }}</span><br>
                  </span>
                </div>
                <h5 class="text-center" v-if="machine.texts">{{ $t('range_spelling_text')}}</h5>
                <div v-for="text in machine.texts" :key="text">
                  <h5 v-if="text.goodspelling">
                      <img src="/static/img/correct.png">
                      <span class="correct">{{ text.goodspelling }}</span>
                  </h5>
                  <span v-if="text.wrongspelling">
                      <img src="/static/img/wrong.png">
                      <span class="wrong rangeSpace">{{ text.wrongspelling }}</span><br>
                  </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RangeNameVue',
  props: ['range'],
  data () {
    return {}
  }
}
</script>

<style>

</style>
