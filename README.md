### Background and Overview 

Audionotes is a musical note taker where users can generate 8-beat MIDI melody and save them for reference.

### Functionality and MVPs 

In Audionotes, users can:
- Click in sequences for a 8-beat MIDI
- Save their melodies
- Change BPM settings
- Select from different sound samples

### Wireframes 

This app will feature a minimalistic styled screen with a piano roll on the left, and a grid-like MIDI sequencer to the right.
Top of the screen will consist of a sound sample picker, as well as an option to export and save the sequence.
On the bottom will be buttons to play, stop, clear, control BPM, and links to my Github/LinkedIn. 
Piano roll keys can individually be clicked to hear the note. MIDI sequence grid cells can individually be clicked on and off.

   ![](https://i.imgur.com/H5n6mlD.png)

### Architecture and Technology 

`notes.js` - Holds logic for playing sound when key is pressed on the piano or the sequencer.

`synth.js` - Responsible for sound loop, and various audio manipulation like tempo control, play/pause/rewind/, and clear. 

Javascript / CSS / HTML5 / Tone.js

### Implementation Timeline 

Day 1: 
- Set up basic project skeleton
- Draw 25-key piano keyboard
- Draw 16 x 25 key sequencer
- Create basic synth using Tone.js

Day 2:
- Write logic for playing synth by clicking on sequencer
- Implement code to loop audio
   - Add tempo functionality
   - Add Play/Pause/Rewind Button & Functionalities
- Add core styling (Fonts/Effects)

Day 3:
- Finish adding interactive buttons to piano that play sounds on click
- Add color effects for columns per beat while looping
- Add color effects for rows when piano key is pressed
- Refactor code for sound key-press 
- Finish piano styling

### (Bonus Features) 

