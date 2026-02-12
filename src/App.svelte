<script lang="ts">
  import Login from './lib/Login.svelte'
  import UserProfile from './components/UserProfile.svelte'
</script>

<main class="page">
  <header class="hero">
    <h1>Home Units</h1>
    <p>Svelte Editable Components</p>
  </header>

  <section class="panel">
    <h2>Log In</h2>
    <Login />
  </section>

  <section class="panel">
    <h2>User Profile</h2>
    <UserProfile />
  </section>
</main>

<style>
  :global(body) {
    margin: 0;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    background: #f6f7fb;
    color: #1f2937;
  }

  .page {
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 20px 64px;
    display: grid;
    gap: 24px;
  }

  .hero {
    background: #ffffff;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);
  }

  .hero h1 {
    margin: 0 0 6px;
    font-size: 2.2rem;
  }

  .hero p {
    margin: 0;
    color: #526074;
  }

  .panel {
    background: #ffffff;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 10px 20px rgba(15, 23, 42, 0.08);
  }

  .panel h2 {
    margin-top: 0;
    margin-bottom: 16px;
    font-size: 1.4rem;
  }
</style>
