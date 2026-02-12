<script lang="ts">
  let { label = '', value = $bindable(''), type = 'text' } = $props()

  let isEditing = $state(false)
  let originalValue = $state(value)
  let buttonRef = $state<HTMLButtonElement | null>(null)

  function startEdit() {
    originalValue = value
    isEditing = true
  }

  function commitEdit() {
    if (!isEditing) return
    isEditing = false
    buttonRef?.focus()
  }

  function cancelEdit() {
    if (!isEditing) return
    value = originalValue
    isEditing = false
    buttonRef?.focus()
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      event.preventDefault()
      cancelEdit()
      return
    }

    if (event.key === 'Enter') {
      const target = event.currentTarget as HTMLElement | null
      const isTextarea = target?.tagName === 'TEXTAREA'
      if (!isTextarea) {
        event.preventDefault()
        commitEdit()
      }
    }
  }
</script>

<div class="inline-field">
  <span class="field-label">{label}</span>

  {#if isEditing}
    {#if type === 'textarea'}
      <textarea
        class="field-input"
        bind:value={value}
        aria-label={label}
        rows="4"
        onblur={commitEdit}
        onkeydown={handleKeyDown}
        autofocus
      ></textarea>
    {:else}
      <input
        class="field-input"
        type={type}
        bind:value={value}
        aria-label={label}
        onblur={commitEdit}
        onkeydown={handleKeyDown}
        autofocus
      />
    {/if}
  {:else}
    <button
      class="field-button"
      type="button"
      aria-label={`Edit ${label}`}
      onclick={startEdit}
      bind:this={buttonRef}
    >
      {value || '—'}
    </button>
  {/if}
</div>

<style>
  .inline-field {
    display: grid;
    gap: 6px;
  }

  .field-label {
    font-size: 0.9rem;
    color: #475569;
    font-weight: 600;
  }

  .field-input {
    padding: 10px 12px;
    border-radius: 10px;
    border: 1px solid #cbd5f5;
    font-size: 1rem;
    font-family: inherit;
  }

  .field-input:focus {
    outline: 2px solid #6d8bff;
    border-color: transparent;
  }

  .field-button {
    background: transparent;
    border: none;
    padding: 0;
    text-align: left;
    font-size: 1rem;
    color: #1f2937;
    cursor: pointer;
  }

  .field-button:hover,
  .field-button:focus-visible {
    text-decoration: underline;
    color: #1d4ed8;
  }
</style>
