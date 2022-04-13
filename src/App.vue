<script>
import { Api } from './pages/sub/api'

const getApi = () => import('./pages/sub/api')

export default {
  onLaunch: function () {
    console.log('App Launch: ', getApi())
    console.log('App Launch: ', Api)
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
}
</script>
