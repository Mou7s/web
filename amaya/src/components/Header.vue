<template>
  <header class="desktop fixed w-full px-4">
    <div class="flex justify-between items-center">
      <div><img src="../assets/images/logoWhite.png" alt="logoWhite" /></div>
      <div>
        <nav>
          <ul class="hidden xl:flex justify-center items-center gap-8">
            <li>Home</li>
            <li>About Us</li>
            <li>Product Center</li>
            <li>Recruitment</li>
            <li>Co-Branding</li>
            <li>Cooperation</li>
            <li>Cantact Us</li>
            <li>Check</li>
          </ul>
        </nav>
      </div>
      <div class="flex gap-2">
        <div><img src="../assets/images/searchWhite.png" alt="" /></div>
        <div>language</div>
        <div class="block xl:hidden">trigger</div>
      </div>
    </div>
  </header>
</template>

<style>
ul > li {
  cursor: pointer;
}

ul > li:hover {
  @apply border-b-2 border-white;
}
</style>
