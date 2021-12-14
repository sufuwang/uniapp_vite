import { ref, Ref, watch } from 'vue'

interface TypeUseVHtmlArgs {
  content: Ref<string>
  target: Ref<HTMLElement>
}
type TypeUseVHtml = (args: TypeUseVHtmlArgs) => any

/**
 * 用来替换 v-html 语法
 */
const useVHtml: TypeUseVHtml = ({ content, target }) => {
  watch(
    () => target.value,
    (d) => {
      console.info('target: ', d)
    },
    { deep: true }
  )
  watch(
    () => content.value,
    (d) => {
      target.value!.innerText = d
    }
  )
}

export default useVHtml
