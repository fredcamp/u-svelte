export default function numbersOnly(node: HTMLInputElement) {
  function onInput(e) {
    const text: string = e.target.value
    e.target.value = text.replace(/\D/g, '')
  }

  node.addEventListener('input', onInput)
  return {
    destroy() {
      node.removeEventListener('input', onInput)
    },
  }
}
