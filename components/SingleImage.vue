<template>
  <div :class="{
    'col-span-2': item.orientation === 'horizontal',
    'row-span-2': item.orientation === 'vertical',
    'col-span-2 row-span-2': item.orientation === 'square'
  }">
    <img :src="item.image.filename" :alt="item.image.name" class="w-full h-full object-cover object-center">
  </div>
</template>

<script setup>

const props = defineProps({ item: Object })
</script>
