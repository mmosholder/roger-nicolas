<template>
  <section class="contentContainer py-8 md:py-16" id="shows">
    <h2
      class="inline-block text-3xl font-semiBold uppercase mb-6 relative after:absolute after:w-full after:h-[10px] after:bottom-[3px] after:left-0 after:z-[-1] after:bg-red-300/70">
      News</h2>
    <ul>
      <li v-for="(item, i) in blok.news">
        <SingleNewsItem :item="item" />
      </li>
    </ul>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { isFuture } from "date-fns";

import SingleNewsItem from '../components/SingleNewsItem.vue'

const props = defineProps({ blok: Object })
</script>
