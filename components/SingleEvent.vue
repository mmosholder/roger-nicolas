<template>
  <div class="flex w-full py-4 px-2 border-b-[.5px]">
    <div class="font-bold text-2xl px-2">{{ formattedDate }}</div>
    <div>
      <p class="px-2 underline font-semibold"><a :href="event.venue_website" target="_blank">{{ event.venue_name }}</a>
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
</script>
