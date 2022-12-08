import type { App, Plugin } from 'vue'
import Decoration14 from './src/index.vue'

export const Decoration14Plugin: Plugin = {
  install(app: App) {
    app.component('DvDecoration14', Decoration14)
  },
}

export {
  Decoration14,
}
