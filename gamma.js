const scales = {
  major: [1, 1, 0.5, 1, 1, 1, 0.5],
  minor: [1, 0.5, 1, 1, 0.5, 1, 1],
  blues: [1.5, 1, 0.5, 0.5, 1.5, 1]
},

notes = ['A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A'],

getNotesFromTonika = tonika => [...notes.slice(notes.indexOf(tonika)), ...notes.slice(1, notes.indexOf(tonika)), tonika],

getNote = (from, interval) => [...notes].splice(notes.indexOf(from), (interval/0.5)+1).pop(),

getScale = (tonika, type) => {
  // if(type === 'blues'){
  //   const minorScale = getScale(tonika, 'minor');
  //   return minorScale.filter((note, index) => index !== 1 && index !== 5);
  // }
  // else{
    const _notes = getNotesFromTonika(tonika),
           scale = [_notes[0]];
    scales[type].map((value, index) => scale.push(getNote(scale[index], value)));
    chooseAlteration(scale);
    return scale;
//  };
},

chooseAlteration = scale => {
  scale.forEach((note, noteIndex) => {
    if(note.indexOf('/') !== -1){
      const options = note.split('/');
      scale[noteIndex] =  options[scale.indexOf(options.map(n => n[0])[0]) !== -1 ? 1 : 0]
    };
  })
},

logScale = (tonika, type) => console.log(`${type} scale ${tonika}:   ${getScale(tonika, type).join(' ')}`)

//*****************//

logScale('E', 'blues')

//TODO
// make scale from G# etc





