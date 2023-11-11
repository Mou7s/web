<script setup>
const columns = [
  {
    key: 'Name',
    label: 'Name',
  },
  {
    key: 'Architecture',
    label: 'Architecture',
  },
  {
    key: 'Cores',
    label: 'Cores',
    sortable: true,
  },
  {
    key: 'Threads',
    label: 'Threads',
    sortable: true,
  },
  {
    key: 'Overclock',
    label: 'Overclock',
  },

  {
    key: 'L3Cache',
    label: 'L3Cache',
  },
  {
    key: 'Technology',
    label: 'Technology',
  },
  {
    key: 'Threads',
    label: 'Threads',
  },
  {
    key: 'Geekbench6Single',
    label: 'Geekbench6Single',
    sortable: true,
  },
];
const selectedColumns = ref([...columns]);

const cpus = [
  {
    Name: 'i5 12450H',
    Architecture: 'Alder Lake H',
    Cores: 8,
    Threads: 12,
    Overclock: 'No',
    L3Cache: '12 MB',
    Technology: '10 nm',
    Geekbench6Single: 2218,
  },
  {
    Name: 'r5 5600X',
    Architecture: 'Vermeer(Zen 3)',
    Cores: 6,
    Threads: 12,
    Overclock: 'Yes',
    L3Cache: '32 MB',
    Technology: '7 nm',
    Geekbench6Single: 2113,
  },
  {
    Name: 'snapdragon 765',
    Architecture: 'Kryo 475',
    Cores: 8,
    Threads: 8,
    Overclock: 'No',
    L3Cache: '2 MB',
    Technology: '7 nm',
    Geekbench6Single: 782,
  },
  {
    Name: 'r5 1400',
    Architecture: 'Summit Ridge(Zen)',
    Cores: 4,
    Threads: 8,
    Overclock: 'Yes',
    L3Cache: '8 MB',
    Technology: '14 nm',
    Geekbench6Single: 947,
  },
  {
    Name: 'phenom II 955',
    Architecture: 'Deneb(K10)',
    Cores: 4,
    Threads: 4,
    Overclock: 'Yes',
    L3Cache: '6 MB',
    Technology: '45 nm',
    Geekbench6Single: 351,
  },
  {
    Name: 'i7 12700',
    Architecture: 'Alder Lake S',
    Cores: 12,
    Threads: 20,
    Overclock: 'No',
    L3Cache: '25 MB',
    Technology: '10 nm',
    Geekbench6Single: 2500,
  },
];

const q = ref('');

const filteredRows = computed(() => {
  if (!q.value) {
    return cpus;
  }

  return cpus.filter((row) => {
    return Object.values(row).some((value) => {
      return String(value).toLowerCase().includes(q.value.toLowerCase());
    });
  });
});
</script>

<template>
  <UCard class="mt-10">
    <div class="grid grid-cols-2">
      <USelectMenu
        v-model="selectedColumns"
        :options="columns"
        multiple
        placeholder="Columns"
        class="w-48"
      />
      <UInput v-model="q" placeholder="Filter CPUs..." />
    </div>

    <UTable :columns="selectedColumns" :rows="filteredRows" class="w-full" />
  </UCard>
</template>
