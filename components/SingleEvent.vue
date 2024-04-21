<template>
  <div class="flex w-full py-4 px-2 border-b-[.5px]">
    <div class="px-2">
      <div class="font-bold text-xl md:text-2xl">{{ formattedDate }}</div>
      <div class="font-semibold text-sm md:text-md whitespace-nowrap">{{ formattedTime }}</div>
    </div>

    <div>
      <p class="px-2 font-semibold" :class="{
        'underline': event.venue_website
      }">
        <template v-if="event.venue_website">
          <a :href="event.venue_website" target="_blank">{{ event.venue_name }}</a>
        </template>

        <template v-else>{{ event.venue_name }}</template>
      </p>
      <p class="px-2 italic">{{ event.description }}</p>

    </div>
  </div>
</template>

<script setup>
import { format } from "date-fns";

const props = defineProps({ event: Object })

const formattedDate = computed(() => {
  return format(props.event.date, 'MM/dd')
})

const formattedTime = computed(() => {
  return format(props.event.date, 'h:mm a')
})
</script>
