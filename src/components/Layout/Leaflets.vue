/* eslint-disable */
<template>
  <div class="container" :id="leaflets.id">
    <a class="anchor" :name="leaflets.id"></a>
    <h3>{{ $t(leaflets.title) }}</h3>
    <div class="row">
      <div class="col" v-for="leaflet in leaflets.item" :key="leaflet.key">
        <h6 v-if="leaflet.subtitle != undefined" class="text-center">{{ $t(leaflet.subtitle)}}</h6>
        <div class="text-center m-1">
          <img :src="leaflet.icon" v-if="leaflet.icon" style="height: 50px">
        </div>
        <ul>
          <li v-for="block in leaflet.blocks" :key="block.name">
            <a :href="block.link" download v-if="block.name != undefined" target="_blank">{{ block.name }}</a>
            <a :href="block.link" download v-if="block.trad != undefined" target="_blank">{{ $t(block.trad) }}</a>
          </li>
        </ul>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'LeafletsVue',
  props: ['leaflets'],
  data () {
    return {}
  }
}
</script>
