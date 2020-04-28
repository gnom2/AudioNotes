// const Tone = require("tone");

import * as Tone from 'tone'

const synth = new Tone.Synth({
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

const gain = new Tone.Gain(0.5)
gain.toMaster()

synth.connect(gain)

let index = 0;

const check = document.body.querySelectorAll('input')
const play = document.body.querySelector('.play-btn');
const pause = document.body.querySelector('.stop-btn');
const rows = document.body.querySelectorAll('.note-container > div');
const notes = ['C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4', 'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A5', 'A#5', 'B5']

Tone.Transport.scheduleRepeat(repeat, '8n')
Tone.Transport.bpm.value = 128

play.addEventListener('click', async () => {
    getAudioContext().resume();
    Tone.Transport.start()
})

pause.addEventListener('click', async () => {
    Tone.Transport.stop()
})

function repeat(time) {
    let step = index % 16;
    for (let i = 0; i < rows.length; i++) {
        note = notes[i],
            row = rows[i],
            input = row.querySelector(`label:nth-child(${step + 1})`);
        checkbox = input.querySelector('input');
        if (checkbox.checked) {
            if (i <= 8 || i === 11) {
                synth.triggerAttackRelease(note, '8n', time);
            } else {
                synth.triggerAttackRelease('8n', time);
            }
        }
    }
    index++;
}