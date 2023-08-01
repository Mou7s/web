<script setup lang="ts"></script>
<template>
  <header class="sticky top-0 backdrop-blur-sm z-50 w-full">
    <div class="flex justify-between items-center mx-auto px-4 sm:px-8">
      <div class="flex items-center space-x-10">
        <a href="/">
          <span
            class="block text-blue-400 text-3xl transition ease-in-out hover:-translate-y-1 duration-150 hover:scale-110">
            Home
          </span>
        </a>
      </div>

      <div class="flex items-center">
        <nav class="opacity-75">
          <ul class="flex lg:space-x-7 lg:mr-16 sm:space-x-2 space-x-1 text-sm md:text-base items-center">
            <li>
              <a href="/meet" title="Visit Blog Page" class="!inline-flex items-center">
                <span
                  class="md:px-3 md:py-2 px-1 py-1 rounded ease-in-out hover:-translate-y-1 duration-150 hover:scale-110">
                  Blog
                </span>
              </a>
            </li>
            <li>
              <a href="/meet" title="Visit Project Page" class="!inline-flex items-center">
                <span
                  class="md:px-3 md:py-2 px-1 py-1 rounded ease-in-out hover:-translate-y-1 duration-150 hover:scale-110">
                  Projects
                </span>
              </a>
            </li>
          </ul>
        </nav>

        <div class="space-x-1 md:space-x-2 flex items-center">
          <div class="hidden sm:flex md:space-x-2 space-x-1">
            <a href="https://twitter.com/Mou7s1337" title="Visit My Twitter">
              <svg viewBox="0 0 24 24" width="1.2em" height="1.2em" class="icon icon--off" alt="Twitter Logo"
                data-v-bb440e8c="">
                <path fill="none" stroke="currentColor" stroke-dasharray="62" stroke-dashoffset="62"
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19.8906 7.34375C19.7969 7.67188 19.4001 8.50548 18.7219 9.29669C18.2698 17.9717 9.84907 20.7974 4.08456 17.8869C3.29335 16.8414 6.93856 17.2653 8.26666 15.259C3.23684 12.6876 3.63244 5.82103 4.64971 6.1036C7.02333 9.29669 10.8381 9.57926 11.4597 9.29669C11.4597 8.562 11.1489 6.97958 12.8726 5.65148C13.8616 4.94505 15.9297 4.3125 17.8047 6.34375C18.125 6.55469 18.5859 6.64844 19.2734 6.49219C19.6797 6.28125 20.2262 6.427 19.9453 7.15625">
                  <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="62;0"></animate>
                </path>
              </svg>
            </a>

            <a href="https://github.com/Mou7s" title="Visit My Github">

              <svg viewBox="0 0 24 24" width="1.2em" height="1.2em" class="icon icon--off" alt="Github Logo"
                data-v-bb440e8c="">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                  <path stroke-dasharray="30" stroke-dashoffset="30"
                    d="M12 4C13.6683 4 14.6122 4.39991 15 4.5C15.5255 4.07463 16.9375 3 18.5 3C18.8438 4 18.7863 5.21921 18.5 6C19.25 7 19.5 8 19.5 9.5C19.5 11.6875 19.017 13.0822 18 14C16.983 14.9178 15.8887 15.3749 14.5 15.5C15.1506 16.038 15 17.3743 15 18C15 18.7256 15 21 15 21M12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98301 13.0822 6 14C7.01699 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18C9 18.7256 9 21 9 21">
                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="30;0"></animate>
                  </path>
                  <path stroke-dasharray="10" stroke-dashoffset="10"
                    d="M9 19C7.59375 19 6.15625 18.4375 5.3125 17.8125C4.46875 17.1875 4.21875 16.1562 3 15.5">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="10;0">
                    </animate>
                  </path>
                </g>
              </svg>
            </a>
          </div>
          <button></button>
      </div>
    </div>
  </div>
</header>

<main class="min-h-screen">
  Hey, I'm Mou7s. An open-source developer from GuangZhou, China.
</main></template>

<style scoped></style>
