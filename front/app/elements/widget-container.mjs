export default function WidgetContainer({ html }) {
    return html`
      <section
        class="
          p2
          mb1
          text0
          text1-lg
          bg-lowlight
          radius5
          border-highlight
          border-solid
          border3
          font-light
          leading5
        "
      >
        <div class="
            mb1
          "
        >
        </div>
        <widget-display></widget-display>
        <p>
          <widget-button>
        </p>
      </section>
      <div
        class="f
         grid-lg
         flow-col
         gap1
         w-full
        "
       >
      </div>
    `
}

