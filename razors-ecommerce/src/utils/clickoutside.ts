export default function clickOutside(node: HTMLElement) {
  function onClick(e) {
    if (node.contains(e.target)) return
    node.dispatchEvent(new CustomEvent('outclick'))
  }

  document.body.addEventListener('click', onClick, true)

  return {
    destroy() {
      document.body.removeEventListener('click', onClick, true)
    },
  }
}
