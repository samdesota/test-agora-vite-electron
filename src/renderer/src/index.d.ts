import { ElectronAPI } from '@electron-toolkit/preload'
import * as sdk from 'agora-electron-sdk'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      getAgora(): typeof sdk
    }
  }
}
