type SaveHandler<T> = (draft: T) => void

function clone<T>(data: T): T {
  return structuredClone(data)
}

export function useInlineEdit<T extends Record<string, unknown>>(
  source: T,
  onSave: SaveHandler<T>
) {
  let original = $state(clone(source))
  let draft = $state(clone(source))

  function isDirty() {
    return JSON.stringify(draft) !== JSON.stringify(original)
  }

  function save() {
    if (!isDirty()) return
    onSave(clone(draft))
    original = clone(draft)
  }

  function cancel() {
    draft = clone(original)
  }

  return { draft, save, cancel, isDirty }
}
