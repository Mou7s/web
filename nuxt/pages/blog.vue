<template>
  <div class="grid grid-cols-5">
    <Nav></Nav>
    <div class="bg-blue-100 min-h-screen col-span-4">
      <div class="grid h-16">
        <var-breadcrumbs>
          <NuxtLink to="/"><var-breadcrumb></var-breadcrumb></NuxtLink>
          <NuxtLink to="/blog"><var-breadcrumb>blog</var-breadcrumb></NuxtLink>
        </var-breadcrumbs>
      </div>

      <div class="rounded-3xl w-5/6 my-0 mx-auto bg-white p-4">
        <Vsc></Vsc>
      </div>
    </div>
  </div>
</template>
