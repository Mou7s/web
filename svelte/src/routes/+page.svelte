<script>
  import Counter from './Counter.svelte';
  import welcome from '../lib/images/svelte-welcome.webp';
  import welcome_fallback from '../lib/images/svelte-welcome.png';
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col justify-center items-center">
  <h1 class="w-full">
    <span
      class=" block relative w-full h-0"
      style="padding-bottom: calc(100% * 495 / 2048);"
    >
      <picture>
        <source srcset={welcome} type="image/webp" />
        <img
          class="absolute w-full h-full top-0 block"
          src={welcome_fallback}
          alt="Welcome"
        />
      </picture>
    </span>

    to your new<br />SvelteKit app
  </h1>

  <h2>
    try editing <strong>src/routes/+page.svelte</strong>
  </h2>

  <Counter />
</section>
