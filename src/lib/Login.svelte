<script lang="ts">
  let email = $state('')
  let password = $state('')
  let errorMessage = $state('')

  function loginHandler(event: SubmitEvent) {
    event.preventDefault()
    errorMessage = ''

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      errorMessage = 'Please enter a valid email address.'
      return
    }

    if (password.length < 6) {
      errorMessage = 'Password must be at least 6 characters.'
      return
    }

    console.log('Logging in', { email })
  }
</script>

<form class="login-form" onsubmit={loginHandler} novalidate>
  <label class="field">
    <span>Email</span>
    <input type="email" bind:value={email} autocomplete="email" required />
  </label>

  <label class="field">
    <span>Password</span>
    <input type="password" bind:value={password} autocomplete="current-password" required />
  </label>

  <button type="submit" class="submit">Log In</button>
</form>

{#if errorMessage}
  <p class="error" role="alert">{errorMessage}</p>
{/if}

<style>
  .login-form {
    display: grid;
    gap: 16px;
  }

  .field {
    display: grid;
    gap: 6px;
    font-weight: 600;
    color: #334155;
  }

  .field input {
    padding: 10px 12px;
    border-radius: 10px;
    border: 1px solid #cbd5f5;
    font-size: 1rem;
  }

  .field input:focus {
    outline: 2px solid #6d8bff;
    border-color: transparent;
  }

  .submit {
    border: none;
    border-radius: 10px;
    padding: 12px 16px;
    background: #111827;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
  }

  .submit:hover {
    background: #0f172a;
  }

  .error {
    margin-top: 12px;
    color: #b91c1c;
    font-weight: 600;
  }
</style>
