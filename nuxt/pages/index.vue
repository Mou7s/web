<script setup>
let password = 'admin';
let admin = 'admin';

const state = () =>
  useState({
    email: admin,
    password: admin,
  });

const validate = (state) => {
  const errors = [];
  if (!state.email) {
    errors.push({ path: 'email', message: 'Required' });
  }
  if (!state.password) {
    errors.push({ path: 'password', message: 'Required' });
  }
  if (state.password) {
  }
};

async function onSubmit(event) {}
</script>

<template>
  <UCard class="mt-10">
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
    </UForm>
  </UCard>
</template>
