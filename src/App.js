import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "🤣": "Rolling on the Floor Laughing",
  "😂": " Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "❤️": " Red Heart",
  "😕": " Confused Face",
  "😠": " Angry Face",
  "😪": "Sleepy Face",
  "😍": "Smiling Face with Heart-Eyes",
  "🙄": "Face with Rolling Eyes"
};

var knownEmoji = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  var [input, setInput] = useState("");

  function knowName(emoji) {
    var meaning = emojiDictionary[emoji];

    if (meaning === undefined) {
      setMeaning("Emoji not found");
    } else {
      setMeaning(meaning);
      setInput(emoji);
    }
  }

  return (
    <div className="App">
      <h1>Emoji Interpretor</h1>

      <input
        style={{
          fontSize: "1.5rem",
          padding: "1rem",
          width: "60%",
          border: "2px solid red"
        }}
        value={input}
        onChange={(e) => {
          knowName(e.target.value);
          setInput(e.target.value);
        }}
      />
      <h2 style={{ color: "blueviolet" }}>{meaning} </h2>

      <div>
        <h2>We have following emoji in our database</h2>
        {knownEmoji.map((emoji, index) => {
          return (
            <span
              key={index}
              style={{ cursor: "pointer", fontSize: "1.5rem", padding: "5px" }}
              onClick={() => {
                knowName(emoji);
              }}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
