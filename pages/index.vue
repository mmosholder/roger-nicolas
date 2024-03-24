<template>
  <main>
    <header>
      <div class="texture z-[-2]"></div>
      <div class="texture2 z-[-1]"></div>
      <nav class="contentContainer px-4 py-8">
        <ul class="flex justify-center gap-2">
          <li><a class="py-2 px-4 hover:underline text-sm uppercase transition-underline" href="/">Home</a></li>
          <li><a class="py-2 px-4 hover:underline text-sm uppercase transition-underline" href="/">Shows</a>
          </li>
          <li><a class="py-2 px-4 hover:underline text-sm uppercase transition-underline" href="/">YouTube</a></li>
          <li><a class="py-2 px-4 hover:underline text-sm uppercase transition-underline" href="/">Instagram</a></li>
        </ul>
      </nav>
      <div class="w-full text-center py-6 z-[2]">
        <h1 class="text-5xl md:text-7xl text-black/70">Roger Nicolas</h1>
      </div>
    </header>

    <section class="my-16">
      <div class="w-2/3 flex gap-6 mx-auto">

        <img src="~/assets/images/rn.jpg" alt="" class="w-[40%]">
        <div>
          <h2 class="mb-2 text-xl font-bold">About Roger Nicolas</h2>
          <p>A whole lot of text here about you and why you are cool and good at music. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Deserunt quam possimus quis tempore tempora fugiat ea, error et recusandae
            amet earum similique numquam facere aperiam repellendus aliquid perferendis eveniet. Optio.</p>
        </div>
      </div>
    </section>

    <StoryblokComponent v-if="story" :blok="story.content" />
  </main>
</template>

<script setup>
const story = await useAsyncStoryblok('home', { version: 'draft' })
</script>
