"use strict";

const words = [
  "ford",
  "form",
  "fort",
  "four",
  "free",
  "from",
  "fuel",
  "full",
  "fund",
  "gain",
  "game",
  "gate",
  "gave",
  "gear",
  "gene",
  "gift",
  "girl",
  "give",
  "glad",
  "goal",
  "goes",
  "gold",
  "Golf",
  "gone",
  "good",
  "gray",
  "grew",
  "grey",
  "grow",
  "gulf",
  "hair",
  "half",
  "hall",
  "hand",
  "hang",
  "hard",
  "harm",
  "hate",
  "have",
  "head",
  "hear",
  "heat",
  "held",
  "hell",
  "help",
  "here",
  "hero",
  "high",
  "hill",
  "hire",
  "hold",
  "hole",
  "holy",
  "home",
  "hope",
  "host",
  "hour",
  "huge",
  "hung",
  "hunt",
  "hurt",
  "idea",
  "inch",
  "into",
  "iron",
  "item",
  "jack",
  "jane",
  "jean",
  "john",
  "join",
  "jump",
  "jury",
  "just",
  "keen",
  "keep",
  "kent",
  "kept",
  "kick",
  "kill",
  "kind",
  "king",
  "knee",
  "knew",
  "know",
  "lack",
  "lady",
  "laid",
  "lake",
  "land",
  "lane",
  "last",
  "late",
  "lead",
  "left",
  "less",
  "life",
  "lift",
  "like",
  "line",
  "link",
  "list",
  "live",
  "load",
  "loan",
  "lock",
  "logo",
  "long",
  "look",
  "lord",
  "lose",
  "loss",
  "lost",
  "love",
  "luck",
  "made",
  "mail",
  "main",
  "make",
  "male",
  "many",
  "Mark",
  "mass",
  "matt",
  "meal",
  "mean",
  "meat",
  "meet",
  "menu",
  "mere",
  "mike",
  "mile",
  "milk",
  "mill",
  "mind",
  "mine",
  "miss",
  "mode",
  "mood",
  "moon",
  "more",
  "most",
  "move",
  "much",
  "must",
  "name",
  "navy",
  "near",
  "neck",
  "need",
  "news",
  "next",
  "nice",
  "nick",
  "nine",
  "none",
  "nose",
  "note",
  "okay",
  "once",
  "only",
  "onto",
  "open",
  "oral",
  "over",
  "pace",
  "pack",
  "page",
  "paid",
  "pain",
  "pair",
  "palm",
  "park",
  "part",
  "pass",
  "past",
  "path",
  "peak",
  "pick",
  "pink",
  "pipe",
  "plan",
  "play",
  "plot",
  "plug",
  "plus",
  "poll",
  "pool",
  "poor",
  "port",
  "post",
  "pull",
  "pure",
  "push",
  "race",
  "rail",
  "rain",
  "rank",
  "rare",
  "rate",
  "read",
  "real",
  "rear",
  "rely",
  "rent",
  "rest",
  "rice",
  "rich",
  "ride",
  "ring",
  "rise",
  "risk",
  "road",
  "rock",
  "role",
  "roll",
  "roof",
  "room",
  "root",
  "rose",
  "rule",
  "rush",
  "ruth",
  "safe",
  "said",
  "sake",
  "sale",
  "salt",
  "same",
  "sand",
  "save",
  "seat",
  "seed",
  "seek",
  "seem",
  "seen",
  "self",
  "sell",
  "send",
  "sent",
  "sept",
  "ship",
  "shop",
  "shot",
  "show",
  "shut",
  "sick",
  "side",
  "sign",
  "site",
  "size",
  "skin",
  "slip",
  "slow",
  "snow",
  "soft",
  "soil",
  "sold",
  "sole",
  "some",
  "song",
  "soon",
  "sort",
  "soul",
  "spot",
  "star",
  "stay",
  "step",
  "stop",
  "such",
  "suit",
  "sure",
  "take",
  "tale",
  "talk",
  "tall",
  "tank",
  "tape",
  "task",
  "team",
  "tech",
  "tell",
  "tend",
  "term",
  "test",
  "text",
  "than",
  "that",
  "them",
  "then",
  "they",
  "thin",
  "this",
  "thus",
  "till",
  "time",
  "tiny",
  "told",
  "toll",
  "tone",
  "tony",
  "took",
  "tool",
  "tour",
  "town",
  "tree",
  "trip",
  "true",
  "tune",
  "turn",
  "twin",
  "type",
  "unit",
  "upon",
  "used",
  "user",
  "vary",
  "vast",
  "very",
  "vice",
  "view",
  "vote",
  "wage",
  "wait",
  "wake",
  "walk",
  "wall",
  "want",
  "ward",
  "warm",
  "wash",
  "wave",
  "ways",
  "weak",
  "wear",
  "week",
  "well",
  "went",
  "were",
  "west",
  "what",
  "when",
  "whom",
  "wide",
  "wife",
  "wild",
  "will",
  "wind",
  "wine",
  "wing",
  "wire",
  "wise",
  "wish",
  "with",
  "wood",
  "word",
  "wore",
  "work",
  "yard",
  "yeah",
  "year",
  "your",
  "zero",
  "zone",
];

const click = document.querySelector(".displayInfo");
const char1 = document.querySelector(".box1");
const char2 = document.querySelector(".box2");
const char3 = document.querySelector(".box3");
const char4 = document.querySelector(".box4");
const answer = document.querySelector(".submit");
const reset = document.querySelector(".reset");
let score = 0;

// const words = ["able", "blow", "camp", "desk", "edge", "ford", "gray", "held"];

let secretWord = words[Math.trunc(Math.random() * words.length - 1)];

const arr = [0, 1, 2, 3];
const randomSequence = arr.sort(() => Math.random() - 0.5);

click.addEventListener("click", function () {
  char1.textContent = `${secretWord[randomSequence[0]]}`;
  char2.textContent = `${secretWord[randomSequence[1]]}`;
  char3.textContent = `${secretWord[randomSequence[2]]}`;
  char4.textContent = `${secretWord[randomSequence[3]]}`;
});

answer.addEventListener("click", function () {
  if (secretWord === document.querySelector(".inputContent").value) {
    score += 10;
    click.textContent = `Correct answer, your score is ${score}`;
  } else {
    click.textContent = `wrong answer, correct answer is ${secretWord}, 
    final score = ${score}`;
    score = 0;
  }
});

reset.addEventListener("click", function () {
  char1.textContent = ``;
  char2.textContent = ``;
  char3.textContent = ``;
  char4.textContent = ``;
  click.textContent = "click here to Start !";
  document.querySelector(".inputContent").value = "";
  secretWord = words[Math.trunc(Math.random() * words.length - 1)];
});
