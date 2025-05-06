PennController.ResetPrefix(null);

newTrial("intro",
  newText("Welcome", "Press space to begin.")
    .print()
    .center()
  ,
  newKey("start", " ").wait()
);

Template("stimuli.csv", row =>
  newTrial("LDT",
    newText("stim", row.word)
      .css("font-size", "2em")
      .center()
      .print()
    ,
    newKey("FJ").log().wait()
  )
);

newTrial("end",
  newText("Thanks", "Experiment complete.")
    .print()
    .center()
  ,
  newTimer(2000).start().wait()
);
