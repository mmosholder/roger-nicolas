<template>
  <div class="flex sm:px-8 flex-wrap sm:flex-nowrap gap-4">
    <div class="w-full sm:w-1/3 mb-4 sm:md-0">
      <img :src="item.image.filename" :alt="item.image.name" class="w-full">
    </div>

    <div class="w-full sm:w-2/3">
      <h3>{{ item.title }}</h3>
      <div v-html="textContent"></div>
    </div>

  </div>
</template>

<script setup>
import cx from "classnames";
import cloneDeep from "clone-deep";

const props = defineProps({ item: Object })

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


const textContent = computed(() => renderRichText(props.item.text, {
  schema: newRichTextSchema,
}));

</script>
