<template>
  <main class="h-[100dvh] text-[#1E1E1E]">
    <header class="h-[40dvh] md:h-[70dvh]">
      <div class="texture z-[-2]"></div>
      <div class="texture2 z-[-1]"></div>
      <nav class="contentContainer px-4 py-8">
        <ul class="flex justify-center gap-2">
          <!-- <li><a class="py-2 px-4 hover:underline md:text-sm uppercase transition-underline text-xs" href="/">Home</a>
          </li>
          <li><a class="py-2 px-4 hover:underline md:text-sm uppercase transition-underline text-xs" href="/">Shows</a>
          </li>
          <li><a class="py-2 px-4 hover:underline md:text-sm uppercase transition-underline text-xs" href="/">About</a>
          </li> -->
          <li><a class="py-2 px-4 font-semibold hover:underline md:text-sm uppercase transition-underline text-xs"
              href="mailto:roger.nicolas302@gmail.com" target="_blank">Bookings</a></li>
        </ul>
      </nav>
      <div class="w-full text-center py-6 z-[2]">
        <h1 class="text-4xl md:text-7xl text-black/70 font-oversouth">Roger Nicolas</h1>
      </div>
    </header>
    <div class="w-full flex py-4 justify-center contentContainer items-center">
      <a href="https://www.instagram.com/roger.nicolas302/" target="_blank" class="px-2">
        <i class="fa-brands fa-instagram text-2xl"></i>
      </a>

      <a href="https://www.youtube.com/@rogernicolas8055" target="_blank" class="px-2">
        <i class="fa-brands fa-youtube text-2xl"></i>
      </a>

      <a href="https://open.spotify.com/artist/3uFRO5WoHpFPoFEBg5q4h3?si=jfpuK1a1Qr6zow5Z4UDE2w" target="_blank"
        class="px-2">
        <i class="fa-brands fa-spotify text-2xl"></i>
      </a>

      <a href="https://music.apple.com/us/artist/roger-nicolas/1737109176" target="_blank" class="px-2">
        <i class="fa-brands fa-apple text-2xl"></i>
      </a>
    </div>

    <slot />
  </main>
</template>
