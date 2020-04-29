// const Tone = require("tone");
// import Synth from 'tone/Tone/instrument/Synth';
import * as Tone from "tone";


const synth = new Tone.PolySynth({
    "oscillator": {
        "type": "sine"
    },
    "envelope": {
        "attack": 0.1,
        "decay": 0.15,
        "sustain": 10.0,
        "release": 5.4
    }
});

const gain = new Tone.Gain(0.5);
gain.toMaster();

synth.connect(gain);

let index = 0;


const check = document.body.querySelectorAll('input');
const play = document.body.querySelector('.play-btn');
const pause = document.body.querySelector('.pause-btn');
const rows = document.body.querySelectorAll('.note-container > div');
const tempo = document.body.querySelector('.tempo-control')
const clear = document.body.querySelector('.clear-btn');
const reset = document.body.querySelector('.rewind-btn');
// const notes = ['C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4', 'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A5', 'A#5', 'B5']
const notes = ['C6', 'B5', 'A#5', 'A5', 'G#5', 'G5', 'F#5', 'F5', 'E5', 'D#5', 'D5', 'C#5', 'C5', 'B4', 'A#4', 'A4', 'G#4', 'G4', 'F#4', 'F4', 'E4', 'D#4', 'D4', 'C#4', 'C4']

Tone.Transport.scheduleRepeat(repeat, '8n');
Tone.Transport.bpm.value = 128;

play.addEventListener('click', async () => {
    // debugger
    Tone.start()
    Tone.Transport.start()
});

pause.addEventListener('click', async () => {
    Tone.Transport.stop()
});

tempo.addEventListener('change', e => {
    Tone.Transport.bpm.rampTo(e.target.value, 0.1);
});

reset.addEventListener('click', e => {
    index = 0;
    spans.forEach(span => span.classList.remove('highlight'))
})

clear.addEventListener('click', e => {
    for (let i = 0; i < check.length; i++) {
        if (check[i].checked === true) {
            check[i].checked = false
        }
    }
})

function repeat(time) {
    let step = index % 16;
    for (let i = 0; i < rows.length; i++) {
        let note = notes[i];
        let row = rows[i];
        let input = row.querySelector(`label:nth-child(${step + 1})`);
        let checkbox = input.querySelector('input');
        // debugger
        if (checkbox.checked) {
            // debugger
            // if (i <= 8 || i === 11) {
            //     synth.triggerAttackRelease(note, '8n', time).volume.value = 3;
            // } else {
            //     synth.triggerAttackRelease('8n', time).volume.value = 3;
            // }
            synth.triggerAttackRelease(note, '8n', time).volume.value = 3;
        }
    }
    index++;
};