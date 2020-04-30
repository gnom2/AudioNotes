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
        "release": 10
    }
})

const gainNote = new ToneNote.Gain(0.5)
gainNote.toMaster()

synthNote.connect(gainNote)

const rows = document.body.querySelectorAll('.note-container > div');
const buttons = document.body.querySelectorAll('#piano-roll div, #piano-roll div div');

const keys = ['C6', 'B5', 'A#5', 'A5', 'G#5', 'G5', 'F#5', 'F5', 'E5', 'D#5', 'D5', 'C#5', 'C5', 'B4', 'A#4', 'A4', 'G#4', 'G4', 'F#4', 'F4', 'E4', 'D#4', 'D4', 'C#4', 'C4']


let pianoKey;
for (let i = 0; i < keys.length; i++) {
    let row = rows[i];
    pianoKey = document.querySelector(`.note-${i + 1}`);

    buttons[i].addEventListener('click', async function (e) {
        e.stopPropagation();
        pianoKey = document.querySelector(`.note-${i + 1}`);
        row.classList.remove(`row${i + 1}-animation`);

        void row.offsetWidth;
        await ToneNote.start();
        synthNote.triggerAttackRelease(keys[i], '8n').volume.value = 3;

        row.classList.add(`row${i + 1}-animation`);
    })
}

let sequencerKey;
for (let i = 0; i < keys.length; i++) {
    sequencerKey = document.querySelectorAll(`.checkbox-row${i + 1}`);
    for (let j = 0; j < sequencerKey.length; j++) {
        sequencerKey[j].addEventListener('click', async () => {
            await ToneNote.start();
            synthNote.triggerAttackRelease(keys[i], '8n').volume.value = 3;
        })

    }
}
