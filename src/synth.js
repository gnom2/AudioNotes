import * as Tone from "tone";

const synths = [
  new Tone.PolySynth(Tone.Synth, {
    oscillator: {
      type: "sawtooth",
    },
  }),
  new Tone.PolySynth(Tone.Synth, {
    oscillator: {
      type: "sine",
    },
  }),
  new Tone.PolySynth(Tone.Synth, {
    oscillator: {
      type: "triangle",
    },
  }),
  new Tone.PolySynth(Tone.Synth, {
    oscillator: {
      type: "square",
    },
  }),
];

const beatPatterns = ["4n", "8n", "16n"];
let beatPattern = "8n";

const gain = new Tone.Gain(0.5);
gain.toMaster();

let synth = synths[0];

const options = document.body.querySelectorAll(".synth-option");

for (let i = 0; i < options.length; i++) {
  let option = options[i];
  option.addEventListener("click", async () => {
    synth = synths[option.value];
    option.classList.add("active");

    options.forEach((opt) => {
      if (option.value !== opt.value) {
        opt.classList.remove("active");
      }
    });
    synth.connect(gain);
  });
}

synth.connect(gain);

let patternIdx = Tone.Transport.scheduleRepeat(repeat, beatPattern);

const patterns = document.body.querySelectorAll(".pattern-option");

for (let i = 0; i < patterns.length; i++) {
  let pattern = patterns[i];
  pattern.addEventListener("click", async () => {
    beatPattern = beatPatterns[pattern.value];
    Tone.Transport.stop();
    Tone.Transport.clear(patternIdx);
    pattern.classList.add("active");

    patterns.forEach((pat) => {
      if (pattern.value !== pat.value) {
        pat.classList.remove("active");
      }
    });
    patternIdx = Tone.Transport.scheduleRepeat(repeat, beatPattern);
    Tone.Transport.start();
  });
}

Tone.Transport.bpm.value = 128;

let index = 0;

const check = document.body.querySelectorAll("input");
const play = document.body.querySelector(".play-btn");
const pause = document.body.querySelector(".pause-btn");
const rows = document.body.querySelectorAll(".note-container > div");
const tempo = document.body.querySelector(".tempo-control");
const clear = document.body.querySelector(".clear-btn");
const reset = document.body.querySelector(".rewind-btn");
const notes = [
  "C6",
  "B5",
  "A#5",
  "A5",
  "G#5",
  "G5",
  "F#5",
  "F5",
  "E5",
  "D#5",
  "D5",
  "C#5",
  "C5",
  "B4",
  "A#4",
  "A4",
  "G#4",
  "G4",
  "F#4",
  "F4",
  "E4",
  "D#4",
  "D4",
  "C#4",
  "C4",
];

play.addEventListener("click", async () => {
  // debugger
  Tone.start();
  Tone.Transport.start();
});

pause.addEventListener("click", async () => {
  Tone.Transport.stop();
});

tempo.addEventListener("change", (e) => {
  Tone.Transport.bpm.rampTo(e.target.value, 0.1);
});

reset.addEventListener("click", (e) => {
  index = 0;
  for (let i = 0; i < rows.length; i++) {
    let row = rows[i];
    let inputs = row.querySelectorAll("label div");
    for (let j = 0; j < inputs.length; j++) {
      inputs[j].style.boxShadow = "";
    }
  }
});

clear.addEventListener("click", (e) => {
  for (let i = 0; i < check.length; i++) {
    if (check[i].checked === true) {
      check[i].checked = false;
    }

    if (rows[i]) {
      let row = rows[i];
      let inputs = row.querySelectorAll("label div");
      for (let j = 0; j < inputs.length; j++) {
        inputs[j].style.boxShadow = "";
      }
    }
  }
});

function repeat(time) {
  let step = index % 16;
  for (let i = 0; i < rows.length; i++) {
    let note = notes[i];
    let row = rows[i];

    if (step !== 0) {
      let prevInput = row.querySelector(`label:nth-child(${step})`);
      let prevBox = prevInput.querySelector("div");

      prevBox.style.boxShadow = "";
    } else if (step === 0) {
      let lastInput = row.querySelector(`label:last-child`);
      let lastBox = lastInput.querySelector("div");

      lastBox.style.boxShadow = "";
    }

    let input = row.querySelector(`label:nth-child(${step + 1})`);
    let checkbox = input.querySelector("input");
    let box = input.querySelector("div");

    box.style.boxShadow =
      "0 0 0.7px #7fff08, 0 0 2.5px #7fff08, 0 0 6px #7fff08";

    if (checkbox.checked) {
      synth.triggerAttackRelease(note, "8n", time).volume.value = 3;
    }
  }
  index++;
}
