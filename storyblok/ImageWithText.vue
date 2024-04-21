<template>
  <section class="contentContainer py-8 md:py-16" id="about">
    <h2
      class="inline-block text-3xl font-semiBold uppercase mb-6 relative after:absolute after:w-full after:h-[10px] after:bottom-[3px] after:left-0 after:z-[-1] after:bg-red-300/70">
      {{ blok.title }}</h2>
    <div
      class="flex md:gap-x-8 w-full md:flex-nowrap flex-wrap flex-col-reverse md:flex-row items-center justify-center md:items-start md:justify-start py-4">
      <div class="w-full md:w-1/2 flex flex-col items-start md:items-end py-2">
        <p v-html="blok.text" class="text-left md:text-right" />
      </div>
      <div class="w-1/2 mb-6 md:mb-0">
        <img class="h-auto w-full" :src="blok.image.filename" :alt="blok.image.name">
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>
