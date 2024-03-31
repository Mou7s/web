<template>
  <footer
    class="border-t border-orange-600 bg-white grid place-content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 text-black p-16"
  >
    <div>
      <h1>About US</h1>
      <h2>Company Profile</h2>
      <h2>Corporate Culture</h2>
    </div>
    <div>
      <h1>Product Center</h1>
      <h2>Earphone</h2>
      <h2>Power Bank</h2>
      <h2>Bluetooth Speaker</h2>
      <h2>Smartwatch</h2>
      <h2>Cable & Charger</h2>
    </div>
    <div>
      <h1>Recruitment</h1>
      <h2>Recruitment</h2>
    </div>
    <div>
      <h1>Co-Branding</h1>
      <h2>Co-Branding</h2>
    </div>
    <div>
      <h1>Cooperation</h1>
      <h2>Amaya Agent</h2>

      <h2>Supplier Cooperation</h2>
    </div>
    <div>
      <h1>Contact Us</h1>
      <h2>Contact Us</h2>
    </div>
  </footer>
</template>

<style lang="less" scoped>
h1 {
  @apply text-xl font-bold py-4;
}

h2 {
  @apply text-gray-500;
}

h1,
h2 {
  cursor: pointer;
  @apply duration-300 transition-all;

  &:hover {
    @apply text-orange-600;
  }
}
</style>
