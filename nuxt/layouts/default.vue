<template>
  <div>{{ upload }}</div>

  <input type="text" v-model="text" />
  {{ text }}

  <UButton @click="uploadFile">upload</UButton>
</template>

<script setup>
const text = ref('');
const upload = ref([]);

onMounted(() => {
  const storedUpload = localStorage.getItem('upload');
  if (storedUpload) {
    upload.value = JSON.parse(storedUpload);
  }
});

const uploadFile = () => {
  upload.value.push(text.value);
  localStorage.setItem('upload', JSON.stringify(upload.value));
};
</script>
