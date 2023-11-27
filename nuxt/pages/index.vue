<script setup>
const account = 'admin';
const password = 'admin';

const validate = (state) => {
  return state.email === account && state.password === password;
};

async function onSubmit(event) {
  if (validate(state)) {
    alert('登录成功');
    return navigateTo('/inside');
  } else {
    return alert('账号或密码错误');
  }
}
</script>

<template>
  <UCard class="mt-10">
    <UForm
      :validate="validate"
      :state="state"
      class="space-y-4"
      @submit="onSubmit"
    >
      <h1 class="text-center font-bold text-3xl">公司OA系统</h1>

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
