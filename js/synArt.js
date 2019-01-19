function genRGB() {
  var rgb = new Array(3);
  for (var i = 0; i < 3; i++) {
    rgb[i] = Math.floor(Math.random() * 255);
  }

  return rgb;
}

function synart(note, recording) {
  // Update recording
  var time = Date.now() - startTime;
  recording = updateRecording(note_map[note], time, recording);

  // Play note
  $("h1#title").text(note_map[note]);
  playTone(note_map[note]);

  // Paint image
  paintSplat(note, 'canvas-id');

  // Draw
  var colour = genRGB();
  document.getElementById('song').style.color = "rgb(" + colour.toString() + ")";

  return recording;
}
