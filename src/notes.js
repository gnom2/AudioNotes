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
const fSh4 = document.querySelectorAll('.checkbox-row19');
const g4 = document.querySelectorAll('.checkbox-row18');
const gSh4 = document.querySelectorAll('.checkbox-row17');
const a4 = document.querySelectorAll('.checkbox-row16');
const aSh4 = document.querySelectorAll('.checkbox-row15');
const b4 = document.querySelectorAll('.checkbox-row14');
const c5 = document.querySelectorAll('.checkbox-row13');
const cSh5 = document.querySelectorAll('.checkbox-row12');
const d5 = document.querySelectorAll('.checkbox-row11');
const dSh5 = document.querySelectorAll('.checkbox-row10');
const e5 = document.querySelectorAll('.checkbox-row9');
const f5 = document.querySelectorAll('.checkbox-row8');
const fSh5 = document.querySelectorAll('.checkbox-row7');
const g5 = document.querySelectorAll('.checkbox-row6');
const gSh5 = document.querySelectorAll('.checkbox-row5');
const a5 = document.querySelectorAll('.checkbox-row4');
const aSh5 = document.querySelectorAll('.checkbox-row3');
const b5 = document.querySelectorAll('.checkbox-row2');
const c6 = document.querySelectorAll('.checkbox-row1');

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

for (let i = 0; i < d4.length; i++) {
    d4[i].addEventListener('click', async () => {
        await ToneNote.start();
        synthNote.triggerAttackRelease('D4', '8n').volume.value = 3;
    });
}

for (let i = 0; i < dSh4.length; i++) {
    dSh4[i].addEventListener('click', async () => {
        await ToneNote.start();
        synthNote.triggerAttackRelease('D#4', '8n').volume.value = 3;
    });
}

for (let i = 0; i < e4.length; i++) {
    e4[i].addEventListener('click', async () => {
        await ToneNote.start();
        synthNote.triggerAttackRelease('E4', '8n').volume.value = 3;
    });
}

for (let i = 0; i < f4.length; i++) {
    f4[i].addEventListener('click', async () => {
        await ToneNote.start();
        synthNote.triggerAttackRelease('F4', '8n').volume.value = 3;
    });
}

for (let i = 0; i < fSh4.length; i++) {
    fSh4[i].addEventListener('click', async () => {
        await ToneNote.start();
        synthNote.triggerAttackRelease('F#4', '8n').volume.value = 3;
    });
}

for (let i = 0; i < g4.length; i++) {
    g4[i].addEventListener('click', async () => {
        await ToneNote.start();
        synthNote.triggerAttackRelease('G4', '8n').volume.value = 3;
    });
}

for (let i = 0; i < gSh4.length; i++) {
    gSh4[i].addEventListener('click', async () => {
        await ToneNote.start();
        synthNote.triggerAttackRelease('G#4', '8n').volume.value = 3;
    });
}

for (let i = 0; i < a4.length; i++) {
    a4[i].addEventListener('click', async () => {
        await ToneNote.start();
        synthNote.triggerAttackRelease('A4', '8n').volume.value = 3;
    });
}

for (let i = 0; i < aSh4.length; i++) {
    aSh4[i].addEventListener('click', async () => {
        await ToneNote.start();
        synthNote.triggerAttackRelease('A#4', '8n').volume.value = 3;
    });
}

for (let i = 0; i < b4.length; i++) {
    b4[i].addEventListener('click', async () => {
        await ToneNote.start();
        synthNote.triggerAttackRelease('B4', '8n').volume.value = 3;
    });
}


for (let i = 0; i < c5.length; i++) {
    c5[i].addEventListener('click', async () => {
        await ToneNote.start();
        synthNote.triggerAttackRelease('C5', '8n').volume.value = 3;
    });
}

for (let i = 0; i < cSh5.length; i++) {
    cSh5[i].addEventListener('click', async () => {
        await ToneNote.start();
        synthNote.triggerAttackRelease('C#5', '8n').volume.value = 3;
    });
}

for (let i = 0; i < d5.length; i++) {
    d5[i].addEventListener('click', async () => {
        await ToneNote.start();
        synthNote.triggerAttackRelease('D5', '8n').volume.value = 3;
    });
}

for (let i = 0; i < dSh5.length; i++) {
    dSh5[i].addEventListener('click', async () => {
        await ToneNote.start();
        synthNote.triggerAttackRelease('D#5', '8n').volume.value = 3;
    });
}

for (let i = 0; i < e5.length; i++) {
    e5[i].addEventListener('click', async () => {
        await ToneNote.start();
        synthNote.triggerAttackRelease('E5', '8n').volume.value = 3;
    });
}

for (let i = 0; i < f5.length; i++) {
    f5[i].addEventListener('click', async () => {
        await ToneNote.start();
        synthNote.triggerAttackRelease('F5', '8n').volume.value = 3;
    });
}

for (let i = 0; i < fSh5.length; i++) {
    fSh5[i].addEventListener('click', async () => {
        await ToneNote.start();
        synthNote.triggerAttackRelease('F#5', '8n').volume.value = 3;
    });
}

for (let i = 0; i < g5.length; i++) {
    g5[i].addEventListener('click', async () => {
        await ToneNote.start();
        synthNote.triggerAttackRelease('G5', '8n').volume.value = 3;
    });
}

for (let i = 0; i < gSh5.length; i++) {
    gSh5[i].addEventListener('click', async () => {
        await ToneNote.start();
        synthNote.triggerAttackRelease('G#5', '8n').volume.value = 3;
    });
}

for (let i = 0; i < a5.length; i++) {
    a5[i].addEventListener('click', async () => {
        await ToneNote.start();
        synthNote.triggerAttackRelease('A5', '8n').volume.value = 3;
    });
}

for (let i = 0; i < aSh5.length; i++) {
    aSh5[i].addEventListener('click', async () => {
        await ToneNote.start();
        synthNote.triggerAttackRelease('A#5', '8n').volume.value = 3;
    });
}

for (let i = 0; i < b5.length; i++) {
    b5[i].addEventListener('click', async () => {
        await ToneNote.start();
        synthNote.triggerAttackRelease('B5', '8n').volume.value = 3;
    });
}

for (let i = 0; i < c6.length; i++) {
    c6[i].addEventListener('click', async () => {
        await ToneNote.start();
        synthNote.triggerAttackRelease('C6', '8n').volume.value = 3;
    });
}
