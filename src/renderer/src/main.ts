import './assets/style.css'
import App from './App.svelte'

console.log(window.api.getAgora())

const app = new App({
  target: document.getElementById('app')
})

export default app
