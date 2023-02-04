export default function WidgetButton({ html, state }) {
    const { store } = state
    const { widget } = store
    return html`
      <span 
        class="font-mono font-light inline-flex items-center pr-3 pl-3 border-solid border1 border-highlight radius1"
      >
      ${widget}
      </span>
    `
}
