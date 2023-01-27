export default function clickOutside(node: HTMLElement) {
  function onClick(e) {
    if (node.contains(e.target)) return
    node.dispatchEvent(new CustomEvent('outclick'))
  }

  window.addEventListener('click', onClick, true)
  return {
    destroy() {
      window.removeEventListener('click', onClick, true)
    },
  }
}
