# Lexical Decision Task (LDT) – Cross-Linguistic Influence in Turkish-English Bilinguals

This repository contains the complete experimental code and stimuli for an offline lexical decision task (LDT) built using the [PCIbex](https://farm.pcibex.net/) platform. The study investigates how L2 English proficiency and L1 Turkish influence bilingual lexical access.

## 📚 Project Summary

**Title:** Cross-Linguistic Influence and Proficiency Effects in Bilingual Lexical Access  
**Researcher:** Ahmet Emre Keser  
**Affiliation:** University of Georgia  
**Platform:** PCIbex (PennController for IBEX)

This experiment examines:
- Word recognition accuracy and reaction times (RTs)
- Effects of word frequency and lexicality (real vs. pseudoword)
- Influence of language background (Turkish, English, possibly Kurdish or German)
- Predictions based on the BIA+ (Bilingual Interactive Activation Plus) model

---

## 📂 Folder Structure


---

## 🧪 How to Run

1. Visit [https://farm.pcibex.net/](https://farm.pcibex.net/)
2. Create a new experiment
3. Upload all files from this repo (including `main.js` and `stimuli.csv`)
4. Preview or publish to test
5. (Optional) Download your PCIbex project and push changes here via Git

---

## 🧠 Theoretical Framework

This study is grounded in the **Bilingual Interactive Activation Plus (BIA+) model** of lexical access (Dijkstra & van Heuven, 2002), which proposes non-selective activation of both languages in bilinguals. It uses a lexical decision paradigm to explore how L1 and L2 lexical systems interact under varying levels of proficiency.

---

## 📊 Stimuli Details

- 20 English real words  
- 20 English pseudowords  
- 20 Turkish real words  
- 20 Turkish pseudowords  
- Balanced by word frequency (5 bins) and length

---

## 📈 Data Logging

The following are logged on each trial:

- `item`: stimulus word  
- `language`: English or Turkish  
- `type`: real or pseudoword  
- `answer`: participant keypress (F or J)  
- `correct`: 1 or 0  
- `RT`: response time in ms

---

## 🔐 License

MIT License. You are free to modify and use this experiment design with proper attribution.

---

## 🙌 Acknowledgments

- Dijkstra, T., & van Heuven, W. J. B. (2002). The architecture of the bilingual word recognition system.
- Brysbaert, M., & New, B. (2009). SUBTLEX-US frequency norms.
- Turkish National Corpus (TNC)

---

## 📬 Contact (aekeser@uga.edu)

Ahmet Emre Keser  
Department of Linguistics  
University of Georgia  
