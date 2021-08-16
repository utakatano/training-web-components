const shadowRoot = document.getElementById('app')?.attachShadow({ mode: 'open' })

if (shadowRoot) {
  shadowRoot.innerHTML = `<style>
  button {
    color: tomato;
  }
  </style>
  <button id="button">
  This will use the CSS color tomato <slot></slot>
  </button>
  `
}