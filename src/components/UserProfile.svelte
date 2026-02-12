<script lang="ts">
  import InlineField from '../js/components/InlineField.svelte'
  import { useInlineEdit } from './useInlineEdit.svelte'

  const user = {
    name: 'Jane Doe',
    email: 'jane@example.com',
    bio: 'Frontend developer who loves Svelte.'
  }

  function saveProfile(profile: typeof user) {
    console.log('Saved profile', profile)
  }

  const edit = useInlineEdit(user, saveProfile)
</script>

<div class="profile">
  <InlineField label="Name" type="text" bind:value={edit.draft.name} />
  <InlineField label="Email" type="email" bind:value={edit.draft.email} />
  <InlineField label="Bio" type="textarea" bind:value={edit.draft.bio} />

  {#if edit.isDirty()}
    <div class="actions">
      <button type="button" class="primary" onclick={edit.save}>Save</button>
      <button type="button" class="ghost" onclick={edit.cancel}>Cancel</button>
    </div>
  {/if}
</div>

<style>
  .profile {
    display: grid;
    gap: 18px;
  }

  .actions {
    display: flex;
    gap: 12px;
  }

  .primary,
  .ghost {
    border-radius: 10px;
    padding: 10px 16px;
    font-weight: 600;
    cursor: pointer;
  }

  .primary {
    background: #111827;
    color: #fff;
    border: none;
  }

  .primary:hover {
    background: #0f172a;
  }

  .ghost {
    background: transparent;
    border: 1px solid #cbd5f5;
    color: #1f2937;
  }

  .ghost:hover {
    border-color: #94a3b8;
  }
</style>
