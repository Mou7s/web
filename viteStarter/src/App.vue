<template>
  <div class="min-h-screen dark:bg-black dark:text-white">
    <div class="p-16">
      <div class="inline-block w-1/2">
        <img :src="iconURL" alt="" />
      </div>
      <div class="inline-block text-right w-1/2"><p>天气</p></div>
      <div></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const latitude = ref(0);
const longitude = ref(0);
const data = ref();
const iconURL = ref();
const getLocation = () => {
  const success = (pos) => {
    latitude.value = pos.coords.latitude;
    longitude.value = pos.coords.longitude;
    console.log(latitude.value, longitude.value);
    getData();
  };
  const error = (err) => {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };
  navigator.geolocation.getCurrentPosition(success, error, {
    enableHighAccuracy: true,
  });
};

const getData = async () => {
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${latitude.value}%2C${longitude.value}`;
  const option = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'ee0ab0bca8msh8c76cf4d5ba3365p10c475jsn443cc3200aaf',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
  };
  const res = await fetch(url, option);
  data.value = await res.json();
  iconURL.value = data.value.current.condition.icon;
};

onMounted(() => {
  getLocation();
});
</script>
