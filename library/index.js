import render from './dom/render.js';
import App from './App.js';

// initial rendering
render(new App().render(), document.getElementById('root'));
