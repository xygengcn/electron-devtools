import { PanelHandle } from "chrome-extension-ipc/panel";
import { PreloadHandle } from "chrome-extension-ipc/preload";

declare global {
  interface Window {
    $devtoolsPanelHandle: PanelHandle;
    $devtoolsPreloadHandle: PreloadHandle;
  }
}
