<template>
  <section class="contentContainer py-8 md:py-16" id="about">
    <h2
      class="inline-block text-3xl font-semiBold uppercase mb-6 relative after:absolute after:w-full after:h-[10px] after:bottom-[3px] after:left-0 after:z-[-1] after:bg-red-300/70">
      {{ blok.title }}</h2>
    <div
      class="flex md:gap-x-8 w-full md:flex-nowrap flex-wrap flex-col-reverse md:flex-row items-center justify-center md:items-start md:justify-start py-4">
      <div class="w-full md:w-2/3 flex flex-col items-start md:items-end py-2 md:py-0">
        <div v-html="textContent" class="text-left md:text-right" />
      </div>
      <div class="w-full md:w-1/3 mb-6 md:mb-0">
        <img class="h-auto w-full" :src="blok.image.filename" :alt="blok.image.name">
      </div>
    </div>
  </section>
</template>

<script setup>
import cx from "classnames";
import cloneDeep from "clone-deep";

const props = defineProps({ blok: Object })

const newRichTextSchema = cloneDeep(RichTextSchema);

newRichTextSchema.nodes.heading = (node) => ({
  tag: [
    {
      tag: `h${node.attrs.level}`,
      attrs: {
        class: cx("font-bold mb-2", {
          "font-bold text-3xl": node.attrs.level === 1,
          "font-semibold text-2xl": node.attrs.level === 2,
          "font-semibold text-xl": node.attrs.level === 3,
          "font-medium text-lg": node.attrs.level === 4,
          "font-regular text-base": node.attrs.level === 5,
          "font-regular text-sm": node.attrs.level === 6,
        }),
      },
    },
  ],
});

newRichTextSchema.nodes.paragraph = () => {
  return {
    tag: [
      {
        tag: "p",
        attrs: {
          class: "text-dark [&:not(:last-of-type)]:mb-2",
        },
      },
    ],
  };
};

newRichTextSchema.marks.link = (node) => {
  node.attrs.class = "font-semibold underline";
  return RichTextSchema.marks.link(node);
};


const textContent = computed(() => renderRichText(props.blok.text, {
  schema: newRichTextSchema,
}));
</script>
