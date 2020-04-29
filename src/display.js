
// export default class Display {
//     constructor() {
//         this.synth = new Tone.PolySynth(3, Tone.Synth).toMaster();
//         this.data = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
//         this.noteUp = this.noteUp.bind(this);
//         this.noteDown = this.noteDown.bind(this);
//     }

//     noteUp(elem, isSharp) {
//         elem.style.background = isSharp ? '#777' : '';
//     }

//     noteDown(elem, isSharp) {
//         var note = elem.dataset.note;

//         elem.style.background = isSharp ? 'black' : '#ccc';
//         this.synth.triggerAttackRelease(note, "16n");
//         event.stopPropagation();
//     }

//     render() {

//         return (
//             <>

//             </>
//         )
//     }
// }

// export default class Display {
//     constructor(canvas) {
//         this.ctx = canvas.getContext("2d");
//         this.dimensions = { width: canvas.width, height: canvas.height };
//         this.drawBackground = this.drawBackground.bind(this);
//         this.drawBackground(this.ctx);
//     }


//     drawBackground(ctx) {
//         ctx.fillStyle = "white";
//         ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
//         ctx.beginPath();
//         ctx.moveTo(150, 0);
//         ctx.lineTo(150, 750);
//         ctx.lineWidth = '1';
//         ctx.strokeStyle = '#000000';
//         ctx.stroke();

//         //---KEYBOARD--------------------
//         let x = 50;

//         while (x <= 750) {
//             ctx.beginPath();
//             ctx.moveTo(0, x);
//             ctx.lineTo(150, x);
//             ctx.lineWidth = '1';
//             ctx.strokeStyle = '#000000';
//             ctx.stroke();
//             x += 50;
//         }
//         //---KEYBOARD--------------------


//         //-------------------------------

//         ctx.fillStyle = 'black';
//         ctx.fillRect(0, 685, 100, 30);
//         ctx.fillRect(0, 635, 100, 30);

//         ctx.fillRect(0, 535, 100, 30);
//         ctx.fillRect(0, 485, 100, 30);
//         ctx.fillRect(0, 435, 100, 30);

//         ctx.fillRect(0, 335, 100, 30);
//         ctx.fillRect(0, 285, 100, 30);

//         ctx.fillRect(0, 185, 100, 30);
//         ctx.fillRect(0, 135, 100, 30);
//         ctx.fillRect(0, 85, 100, 30);
//     }
// }