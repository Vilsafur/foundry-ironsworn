import { VueItemSheet } from '../../vue/vueitemsheet'
import delveThemeDomainSheet from '../../vue/delve-theme-domain-sheet.vue'

export class ThemeDomainSheetV2 extends VueItemSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      height: 650,
      rootComponent: delveThemeDomainSheet,
    } as any)
  }
}
