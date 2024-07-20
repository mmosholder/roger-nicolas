<template>
  <section class="photoContainer py-8 md:py-16">
    <div class="grid grid-cols-photo grid-rows-photo gap-1 grid-flow-dense">
      <template v-for="(item, i) in blok.images">
        <SingleImage :item="item" />
      </template>
    </div>
  </section>
</template>

<script setup>
import SingleImage from '../components/SingleImage.vue'

const props = defineProps({ blok: Object })
</script>
