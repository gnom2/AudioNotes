import "./styles/index.scss";
import "regenerator-runtime/runtime.js";
import Display from './display';
import './synth';
import './notes';

const canvas = document.getElementById('audio-note');
export const display = new Display(canvas);
