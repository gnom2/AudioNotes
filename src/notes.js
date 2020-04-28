// const ToneNote = require("tone");
import * as ToneNote from 'tone'

const synthNote = new ToneNote.Synth({
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

for (let i = 0; i < c4.length; i++) {
    c4[i].addEventListener('click', async () => {
        await ToneNote.start();
        synthNote.triggerAttackRelease('C4', '8n').volume.value = 3;
    });
}

