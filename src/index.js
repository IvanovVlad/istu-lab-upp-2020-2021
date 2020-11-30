import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

window.reveal = new Reveal({
   plugins: [ Markdown ]
})
reveal.initialize({
   controls: true,
   controlsLayout: "edges",
   progress: true,
   slideNumber: false,
});