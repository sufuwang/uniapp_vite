import { onLoad, onShow } from "@dcloudio/uni-app"
import { ref } from 'vue'

export default () => {
  const count = ref({ b: 0 })

  onLoad(() => {
    getApp()!.globalData!.count = {
      a: {
        b: {
          c: {
            count: 1,
            other: [12]
          }
        }
      }
    }
  })
  onShow(() => {
    console.info('getApp:', getApp().globalData)
    const d = getApp()?.globalData?.count.a.b
    count.value = d.c
  })

  return { count }
}