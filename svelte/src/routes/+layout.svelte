<script>
  import Header from './Header.svelte';
  import '../app.css';
  import './styles.css';
</script>

<div class="flex flex-col h-screen">
  <Header />

  <main
    class="flex flex-col flex-1 p-4 w-full my-0 mx-auto box-border"
    style="max-width: 64rem;"
  >
    <slot />
  </main>

  <footer class="flex flex-col justify-center items-center p-3 sm:px-12">
    <p>
      visit
      <a class="font-bold" href="https://kit.svelte.dev">kit.svelte.dev</a>
      to learn SvelteKit
    </p>
  </footer>
</div>
