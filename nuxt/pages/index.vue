<script setup>
const state = reactive({
  email: '',
  password: '',
});

const validate = (state) => {
  const errors = [];
  if (!state.email) errors.push({ path: 'email', message: 'Required' });
  if (!state.password) errors.push({ path: 'password', message: 'Required' });
  return errors;
};

async function onSubmit(event) {
  if (event.data.email === 'admin' && event.data.password === 'admin') {
    alert('Login Success');
    return navigateTo('/inside');
  } else {
    alert('Login Failed');
  }
}
</script>

<template>
  <UCard>
    <UForm
      :validate="validate"
      :state="state"
      class="space-y-4"
      @submit="onSubmit"
    >
      <UFormGroup label="Email" name="email">
        <UInput v-model="state.email" />
      </UFormGroup>

      <UFormGroup label="Password" name="password">
        <UInput v-model="state.password" type="password" />
      </UFormGroup>

      <UButton type="submit"> Submit </UButton>
    </UForm></UCard
  >
</template>
