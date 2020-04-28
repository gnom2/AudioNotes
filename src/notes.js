const ToneNote = require("tone");
import { Synth, Gain } from 'tone'
// import ToneNote from "Tone";

const synthNote = new ToneNote.PolySynth({
    "oscillator": {
        "type": "sine"
    },
    "envelope": {
        "attack": 0.1,
        "decay": 0.15,
        "sustain": 0.3,
        "release": 0.4
    }
})

const gainNote = new ToneNote.Gain(0.5)
gainNote.toMaster()

synthNote.connect(gainNote)


const c4 = document.querySelectorAll('.checkbox-row25');
const cSh4 = document.querySelectorAll('.checkbox-row24');
const d4 = document.querySelectorAll('.checkbox-row23');
const dSh4 = document.querySelectorAll('.checkbox-row22');
const e4 = document.querySelectorAll('.checkbox-row21');
const f4 = document.querySelectorAll('.checkbox-row20');
const fSh4 = document.querySelectorAll('.checkbox-row23');
const g4 = document.querySelectorAll('.checkbox-row22');
const gSh4 = document.querySelectorAll('.checkbox-row21');
const a4 = document.querySelectorAll('.checkbox-row20');
const aSh4 = document.querySelectorAll('.checkbox-row20');
const b4 = document.querySelectorAll('.checkbox-row20');
const c5 = document.querySelectorAll('.checkbox-row20');
const cSh5 = document.querySelectorAll('.checkbox-row20');
const d5 = document.querySelectorAll('.checkbox-row20');
const dSh5 = document.querySelectorAll('.checkbox-row20');
const e5 = document.querySelectorAll('.checkbox-row20');
const f5 = document.querySelectorAll('.checkbox-row20');
const e4 = document.querySelectorAll('.checkbox-row21');
const f4 = document.querySelectorAll('.checkbox-row20');
const fSh4 = document.querySelectorAll('.checkbox-row23');
const g4 = document.querySelectorAll('.checkbox-row22');
const gSh4 = document.querySelectorAll('.checkbox-row21');
const a4 = document.querySelectorAll('.checkbox-row20');
const aSh4 = document.querySelectorAll('.checkbox-row20');
const b4 = document.querySelectorAll('.checkbox-row20');

for (let i = 0; i < c4.length; i++) {
    c4[i].addEventListener('click', async () => {
        await ToneNote.start();
        synthNote.triggerAttackRelease('C4', '8n').volume.value = 3;
    });
}

for (let i = 0; i < cSh4.length; i++) {
    cSh4[i].addEventListener('click', async () => {
        await ToneNote.start();
        synthNote.triggerAttackRelease('C#4', '8n').volume.value = 3;
    });
}
