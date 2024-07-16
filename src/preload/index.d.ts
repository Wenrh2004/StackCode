import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      hideWindow: () => void
      shortCut: (type: string, shortCut: string) => Promise<boolean>
      ignoreMouseEvents: (ignore: boolean, options?: { forward: boolean }) => void
    }
  }
}
