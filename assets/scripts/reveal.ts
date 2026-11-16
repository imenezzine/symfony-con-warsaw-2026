// @ts-ignore
import Reveal from 'reveal.js';
// @ts-ignore
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
// @ts-ignore
import Math from 'reveal.js/plugin/math/math.esm.js';
// @ts-ignore
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
// @ts-ignore
import Zoom from 'reveal.js/plugin/zoom/zoom.esm.js';
// @ts-ignore
import Notes from 'reveal.js/plugin/notes/notes.esm.js';

// Speaker view: the notes take the main area, the current slide and a smaller,
// dimmed upcoming slide sit in a right column. Applies to the "Default" layout
// only, so the other layouts of the dropdown keep working.
const SPEAKER_VIEW_CSS = `
body[data-speaker-layout="default"] #speaker-controls {
    top: 0; left: 0; width: 66%; height: 100%;
    font-size: 20px;
    border-right: 1px solid #ddd;
}
body[data-speaker-layout="default"] .speaker-controls-notes .value {
    font-size: 1.6em; line-height: 1.5;
}
body[data-speaker-layout="default"] #current-slide,
body[data-speaker-layout="default"] #upcoming-slide {
    left: auto; right: 0; height: auto; aspect-ratio: 16 / 9; padding: 8px;
}
body[data-speaker-layout="default"] #current-slide { top: 48px; width: 34%; }
body[data-speaker-layout="default"] #current-slide iframe { border: 3px solid #1a7f37; }
body[data-speaker-layout="default"] #current-slide::before {
    content: 'Now'; position: absolute; top: 8px; left: 8px; z-index: 2;
    padding: 2px 10px; font-size: 13px; text-transform: uppercase;
    color: #fff; background: #1a7f37;
}
body[data-speaker-layout="default"] #upcoming-slide {
    top: calc(48px + 34vw * 9 / 16 + 24px); width: 26%;
}
body[data-speaker-layout="default"] #upcoming-slide iframe {
    border: 2px dashed #b26a00; opacity: 0.55; filter: grayscale(0.6);
}
body[data-speaker-layout="default"] #upcoming-slide .label {
    top: 8px; left: 8px; height: auto; line-height: 1.4; padding: 2px 10px;
    font-size: 13px; text-transform: uppercase; color: #fff; background: #b26a00;
}
`;

// The notes plugin writes its speaker view into a same-origin popup: add the
// styles once it has done so.
const nativeOpen = window.open.bind(window);
window.open = (url?: string | URL, name?: string, features?: string) => {
    const popup = nativeOpen(url, name, features);
    if (popup && name === 'reveal.js - Notes') {
        setTimeout(() => {
            const style = popup.document.createElement('style');
            style.textContent = SPEAKER_VIEW_CSS;
            popup.document.head.appendChild(style);
        }, 0);
    }

    return popup;
};

const deck = new Reveal({
    slideNumber: 'c/t',
    history: true,
    plugins: [
        Markdown,
        Math,
        Highlight,
        Zoom,
        Notes,
    ],
});

deck.initialize({
    navigationMode: 'linear',
    width: 1280,
    height: 720,
});
