<script setup lang="ts"></script>

<template>
  <div class="bg-blue-100">
    <nav class="grid grid-flow-row w-full place-item-center">
      <Button :to="'/'">Home </Button>
      <Button :to="'/blog'">Blog</Button>
      <Button>Projects</Button>
      <Button :to="'/about'">About</Button>
      <Button to="https://github.com/mou7s"><var-icon name="github" /></Button>
    </nav>
  </div>
</template>
