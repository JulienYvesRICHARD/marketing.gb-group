<template>
  <div class="container" id="video">
    <a class="anchor" name="video"></a>
    <h3>{{ $t(videos.title) }}</h3>
    <div class="row">
      <div class="col" v-for="video in videos.item" :key="video.key">
        <h6 v-if="video.subtitle != undefined">{{ $t(video.subtitle) }}</h6>
        <ul>
          <li v-for="block in video.blocks" :key="block.name">
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
  name: "VideoVue",
  props: ["videos"],
  data() {
    return {};
  }
};
</script>
