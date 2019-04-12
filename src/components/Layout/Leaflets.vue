<template>
    <div class="container" id="leaflet">
        <a class="anchor" name="leaflet"></a>
      <h3>{{ $t(leaflets.title) }}</h3>
      <div class="row">
        <div class="col" v-for="leaflet in leaflets.item" :key="leaflet.key">
          <h6 v-if="leaflet.subtitle != undefined">{{ $t(leaflet.subtitle)}}</h6>
          <ul>
            <li v-for="block in leaflet.blocks" :key="block.name">
              <a :href="block.link" download v-if="block.name != undefined">{{ block.name }}</a>
              <a :href="block.link" download v-if="block.trad != undefined">{{ $t(block.trad) }}</a>
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
      return {};
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  </style>