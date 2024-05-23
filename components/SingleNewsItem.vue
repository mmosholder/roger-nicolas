<template>
  <div class="flex sm:px-8 flex-wrap">
    <div class="w-full sm:w-1/3 sm:mr-4 mb-4 sm:md-0">
      <img :src="item.image.filename" :alt="item.image.name" class="w-full">
    </div>

    <div>
      <h3>{{ item.title }}</h3>
      <div v-html="textContent"></div>
    </div>

  </div>
</template>

<script setup>
const props = defineProps({ item: Object })

const textContent = computed(() => renderRichText(props.item.text));

</script>
