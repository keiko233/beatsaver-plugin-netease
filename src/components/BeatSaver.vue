<template>
  <div class="beatsaver" @click="click" />
</template>

<script setup lang="ts">
import { openUrl } from '../utils/openUrl.ts';

const props = defineProps({
  title: {
    type: String,
    default: null
  }
});

const click = () => {
  if (props.title != null) openUrl("https://beatsaver.com/?q=" + props.title);
};
</script>