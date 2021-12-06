import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import 'vue-global-api'

export function createApp() {
	const app = createSSRApp(App);
	return {
		app,
	};
}
