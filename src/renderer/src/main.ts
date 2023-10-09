import './assets/style.css'
import App from './App.svelte'

const req = eval('window.require')
window.electron = req('@electron-toolkit/preload').electronAPI

const agora = req('agora-electron-sdk')

console.log(agora)

const app = new App({
  target: document.getElementById('app')
})

export default app
