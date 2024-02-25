export const test = ref(false);

export const changeTest = () => {
  test.value = !test.value;
};
