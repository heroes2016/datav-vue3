import { merge } from 'lodash-es'
import type { Ref } from 'vue'
import { onUnmounted, watchEffect } from 'vue'

export function useMergedColor(defaultColors: string[], colors: Ref<string[]>) {
  let mergedColor = merge(defaultColors, colors.value)

  const stop = watchEffect(() => {
    mergedColor = merge(defaultColors, colors.value)
  })

  onUnmounted(() => {
    stop()
  })

  return mergedColor
}
