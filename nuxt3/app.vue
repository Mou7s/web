<template>
  <div>
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->

    {{ totalNumber }}
    {{ winnerList }}
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const totalNumber = config.public.totalNumber;
</script>
