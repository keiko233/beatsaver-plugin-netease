import { createApp, h } from 'vue'
import './assets/index.less'
import App from './App.vue'
import { isNCMClient } from './utils/clientCheck'
import { createBeatSaver } from './utils/createBeatSaver';

if (isNCMClient()) {
  // @ts-ignore
  plugin.onConfig(() => {
    const container = document.createElement('div');
    createApp(h(App)).mount(container);
    return container;
  });

  // @ts-ignore
  plugin.onAllPluginsLoaded(() => {
    createBeatSaver();
  });
}
else {
  createApp(App).mount('#app')
}
