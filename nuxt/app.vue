<script setup>
const removeSmallest = (numbers) => {
  return numbers.filter((n, i) => i !== numbers.indexOf(Math.min(...numbers)));
};
</script>
