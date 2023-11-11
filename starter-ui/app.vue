<script setup>
const colorMode = useColorMode();
const date = ref(new Date());

const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  },
});

const label = computed(() =>
  date.value.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
);

console.log(label.value);
</script>

<template>
  <UContainer>
    <UCard class="mt-10">
      <div class="flex justify-between">
        <UButton icon="i-heroicons-calendar-days-20-solid" :label="label" />
        <ClientOnly>
          <UButton
            :icon="
              isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
            "
            color="gray"
            variant="ghost"
            aria-label="Theme"
            @click="isDark = !isDark"
          >
          </UButton>
        </ClientOnly>
      </div>
    </UCard>
    <NuxtPage></NuxtPage>
  </UContainer>
</template>
