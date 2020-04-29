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

const keys = ['C6', 'B5', 'A#5', 'A5', 'G#5', 'G5', 'F#5', 'F5', 'E5', 'D#5', 'D5', 'C#5', 'C5', 'B4', 'A#4', 'A4', 'G#4', 'G4', 'F#4', 'F4', 'E4', 'D#4', 'D4', 'C#4', 'C4']

let pianoKey;
for (let i = 0; i < keys.length; i++) {
    pianoKey = document.querySelector(`.note-${i + 1}`);
    pianoKey.addEventListener('click', async () => {
        await ToneNote.start();
        synthNote.triggerAttackRelease(keys[i], '8n').volume.value = 3;
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
