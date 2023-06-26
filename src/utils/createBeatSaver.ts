import { createApp, h } from 'vue'
import BeatSaver from '../components/BeatSaver.vue'
import { waitForElement } from './waitForElement';

export const createBeatSaver = () => {
  waitForElement('.g-mn.one', () => {
    const targetElement = document.querySelector('.g-mn.one');
    const observer = new MutationObserver(function (mutations) {
      var tdColTitles = document.querySelectorAll('.td.col.title');
      tdColTitles.forEach(function (tdColTitle) {
        const existingDiv = tdColTitle.querySelector('.tit.s-fc1 + div');
        const title = tdColTitle.querySelector('.tit')?.childNodes[0]?.nodeValue?.trim();

        if (!existingDiv) {
          const newDiv = document.createElement('div');
          createApp({
            render: () => h(BeatSaver, { title: title })
          }).mount(newDiv);
          const titSfc1 = tdColTitle.querySelector('.tit.s-fc1');
          titSfc1?.insertAdjacentElement('afterend', newDiv);
        }
      });
    });

    // @ts-ignore
    observer.observe(targetElement, { attributes: true, childList: true, subtree: true });
  });
}
