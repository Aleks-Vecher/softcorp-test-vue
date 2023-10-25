<template>
  <div>
    <span>Обновление через: {{ count }}</span> 
  </div>
</template>
<script lang="ts">
import Vue, { type VueConstructor } from 'vue';

export default (Vue as VueConstructor<Vue>).extend({
  name: 'Timer',
  props: {
    count: Number,
  },
});
</script>
<style scoped></style>
