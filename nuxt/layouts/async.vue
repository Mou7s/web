<template><div>async</div></template>

<script setup>
import { ref } from 'vue';

let latitude = ref(0);
let longitude = ref(0);

async function getLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

async function getWeather() {
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${latitude.value}%2C${longitude.value}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ee0ab0bca8msh8c76cf4d5ba3365p10c475jsn443cc3200aaf',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
  };
  const response = await fetch(url, options);
  const result = await response.json();
  console.log(result);
}

getLocation()
  .then((position) => {
    latitude.value = position.coords.latitude;
    longitude.value = position.coords.longitude;
    console.log(latitude.value, longitude.value);
    getWeather();
  })
  .catch((error) => {
    console.error('Error getting location:', error);
  });
</script>
