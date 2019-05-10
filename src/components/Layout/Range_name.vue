/* eslint-disable */
<template>
  <div class="container" id="branding">
    <a class="anchor" name="branding"></a>
    <h3>Range Spelling</h3>
    <div class="row" >
        <div class="col-6 card" v-for="item in range" :key="item">
          <div class="row p-2 ">
            <div class="col-4 range p-3" v-for="machine in item.machine" :key="machine">
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
