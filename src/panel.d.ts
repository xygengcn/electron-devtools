import { PanelHandle } from 'chrome-extension-ipc/panel';

declare interface Window {
  $panel: PanelHandle;
  __vdevtools_ctx: any;
}

