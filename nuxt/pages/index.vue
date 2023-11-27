<script setup>
const account = 'admin';
const password = 'admin';

const state = reactive({
  account: '',
  password: '',
});

const validate = (state) => {
  return state.account === account && state.password === password;
};

async function onSubmit() {
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
    <UForm :state="state" class="space-y-4" @submit="onSubmit">
      <h1 class="text-center font-bold text-3xl">公司OA系统</h1>

      <UFormGroup label="Account" name="account">
        <UInput v-model="state.account" />
      </UFormGroup>

      <UFormGroup label="Password" name="password">
        <UInput v-model="state.password" type="password" />
      </UFormGroup>

      <UButton type="submit"> Submit </UButton>
    </UForm>
  </UCard>
</template>
