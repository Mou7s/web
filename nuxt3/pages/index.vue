<template>
  <div class="flex justify-center items-center">
    <UCard>
      <label for="eventListener">Event Listener:</label>
      <UInput @keyup="handleKeyup" type="text" id="eventListener" />
    </UCard>
    <UCard>
      <label for="eventListener2">Event Listener:</label>
      <UInput @keyup="handleKeyup" type="text" id="eventListener2" />
    </UCard>
  </div>
</template>
<script setup>
const handleKeyup = (event) => {
  switch (event.key) {
    case 'x':
      button_x();
      break;
    case 'y':
      button_y();
      break;
    case 'a':
      button_a();
      break;
    case 'b':
      button_b();
      break;
    default:
      console.log(event.key);
  }
};

const button_x = () => {
  jump();
};

const button_y = () => {
  fireGun();
};

const button_a = () => {
  swapWeapon();
};

const button_b = () => {
  lurch();
};
// Game functions
const jump = () => {
  console.log('Jump!');
};

const fireGun = () => {
  console.log('Fire!');
};

const swapWeapon = () => {
  console.log('Swap!');
};

const lurch = () => {
  console.log('Lurch!');
};
</script>
