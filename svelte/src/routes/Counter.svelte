<script>
  import { spring } from 'svelte/motion';

  let count = 0;

  const displayed_count = spring();
  $: displayed_count.set(count);
  $: offset = modulo($displayed_count, 1);

  function modulo(n, m) {
    // handle negative numbers
    return ((n % m) + m) % m;
  }
</script>

<div class="counter flex border-y border-solid border border-opacity-10 my-4">
  <button
    on:click={() => (count -= 1)}
    aria-label="Decrease the counter by one"
  >
    <svg class="w-1/4 h-1/4" aria-hidden="true" viewBox="0 0 1 1">
      <path d="M0,0.5 L1,0.5" />
    </svg>
  </button>

  <div class="counter-viewport w-32 h-16 overflow-hidden text-center relative">
    <div
      class="absolute w-full h-full"
      style="transform: translate(0, {100 * offset}%)"
    >
      <strong class="-top-full select-none" aria-hidden="true"
        >{Math.floor($displayed_count + 1)}</strong
      >
      <strong>{Math.floor($displayed_count)}</strong>
    </div>
  </div>

  <button
    on:click={() => (count += 1)}
    aria-label="Increase the counter by one"
  >
    <svg class="w-1/4 h-1/4" aria-hidden="true" viewBox="0 0 1 1">
      <path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" />
    </svg>
  </button>
</div>

<style>
  .counter button {
    width: 2em;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background-color: transparent;
    touch-action: manipulation;
    font-size: 2rem;
  }

  .counter button:hover {
    background-color: var(--color-bg-1);
  }

  path {
    vector-effect: non-scaling-stroke;
    stroke-width: 2px;
    stroke: #444;
  }

  .counter-viewport strong {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    font-weight: 400;
    color: var(--color-theme-1);
    font-size: 4rem;
    align-items: center;
    justify-content: center;
  }
</style>
