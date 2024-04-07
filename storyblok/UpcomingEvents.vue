<template>
  <section class="contentContainer py-16">
    <h2
      class="px-1 inline-block text-3xl font-semiBold uppercase mb-6 relative after:absolute after:w-full after:h-[10px] after:bottom-[3px] after:left-0 after:z-[-1] after:bg-red-300/70">
      Upcoming Events</h2>
    <ul>
      <li v-for="(event, i) in computedEvents">
        <SingleEvent :event="event" />
      </li>
    </ul>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { isFuture } from "date-fns";

import SingleEvent from '../components/SingleEvent.vue'

const props = defineProps({ blok: Object })

const computedEvents = computed(() => {
  return props.blok.events.filter(event => {
    if (isFuture(event.date)) {
      return event
    }
  })
})
</script>
