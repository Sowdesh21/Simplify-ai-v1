const url = "https://quillbot-alternative-advanced-paraphrasing.p.rapidapi.com/article/paraphrase/";
const options = {
  method: 'POST',
  headers: {
    'x-rapidapi-key': '89f3adc32bmsheaa7975a6429cf1p1115bajsnca8822d43920',
    'x-rapidapi-host': 'quillbot-alternative-advanced-paraphrasing.p.rapidapi.com',
    'Content-Type': 'application/json'
  }
};

document.getElementById("paraphraseButton").addEventListener("click", async () => {
  const inputText = document.getElementById("inputText").value;

  if (!inputText) {
    document.getElementById("result").innerText = "Please enter text to summarize.";
    return;
  }

  // Show the spinner and clear the result
  document.getElementById("loadingSpinner").style.display = "block";
  document.getElementById("result").innerText = "";

  const body = JSON.stringify({
    text: inputText,
    language: "English",
    country: "US",
    mode: "creative",
  });

  try {
    const response = await fetch(url, { ...options, body });
    const result = await response.json();
    console.log(result);

    // Hide the spinner and show the result
    document.getElementById("loadingSpinner").style.display = "none";
    document.getElementById("result").innerText = result.rewritten_text || "No summary found.";

    speech.text = result.rewritten_text || "No summary found.";
  } catch (error) {
    console.error(error);

    // Hide the spinner and show the error message
    document.getElementById("loadingSpinner").style.display = "none";
    document.getElementById("result").innerText = "Error fetching summary. Please check your network.";
  }
});

let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.getElementById("voiceSelect");
let pauseButton = document.getElementById("pauseBtn");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach((voice, i) => {
    voiceSelect.options[i] = new Option(voice.name, i);
  });
};

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[parseInt(voiceSelect.value)];
});

document.getElementById("speakButton").addEventListener("click", () => {
  if (document.getElementById("result").innerText) {
    window.speechSynthesis.cancel();
    speech.text = document.getElementById("result").innerText;
    window.speechSynthesis.speak(speech);
  } else {
    alert("Please get a summary first.");
  }
});

pauseButton.addEventListener("click", () => {
  if (window.speechSynthesis.speaking) {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      pauseButton.textContent = "Pause";
    } else {
      window.speechSynthesis.pause();
      pauseButton.textContent = "Resume";
    }
  }
});
