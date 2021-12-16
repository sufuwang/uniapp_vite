import { ref, Ref, watch } from 'vue'

interface TypeUseVHtmlArgs {
  content: Ref<string>
}
type TypeUseVHtml = (args: TypeUseVHtmlArgs) => any

/**
 * 用来替换 v-html 语法
 */
const useVHtml: TypeUseVHtml = ({ content }) => {
  const refTarget  = ref<HTMLDivElement>()

  watch(
    () => content.value,
    (d) => {
      refTarget.value!.innerText = d
    }
  )

  return {
    ref: refTarget
  }
}

export default useVHtml
