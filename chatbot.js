let chatContainer = document.getElementById("widgetContainer")
let openChat = document.getElementById("openChat")

openChat.addEventListener("click", function() {
	chatContainer.classList.toggle("hidden")
	openChat.classList.toggle("hidden")
	
	const messagesContainer = document.getElementById("messages");
	let botText = document.createElement("span");
	let botDiv = document.createElement("div");
	botDiv.id = "bot";
	botDiv.className = "bot response";
	botText.innerText = "schreibt...";
	botDiv.appendChild(botText);
	messagesContainer.appendChild(botDiv);
	
	setTimeout(() => {
    botText.innerText = `Hallo, Sie sind hier mit dem 48H Chatbot verbunden. Wie kann ich ihnen helfen?`;
  }, 1200);
})

// input abschicken mit Enter
const inputField = document.getElementById("chatInput")
inputField.addEventListener("keydown", function(e) {
if (e.code === "Enter") {
    let input = inputField.value;
    inputField.value = "";
    output(input);
}
});

//entfernt alles außer Buchstaben, Zahlen und Leerzeichen
function output(input) {
  let product;
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  text = text
    .replace(/hallo /g, "")
    .replace(/hi /g, "")
    .replace(/ hi/g, "")
    .replace(/ hallo/g, "");
 
  if (compare(utterances, answers, text)) {
    product = compare(utterances, answers, text);
  } 
  else {
    product = alternatives[Math.floor(Math.random() * alternatives.length)];
  }
 
  //update  DOM
  addChatEntry (input, product);
}

const utterances = [ 
  ["ich habe ein problem", "problem", "ich hab ein problem", "ich habe eine frage", "ich hab eine frage", "frage"],        //0
  ["besucher", "ich bin ein besucher", "kuenstler", "ich bin ein kuenstler"],      //1
  ["ich habe eine frage zur barrierefreiheit", "sind toiletten vorhanden", "ich habe eine frage zum standort", "muss ich mich vorher anmelden"],      //2
  ["sind die events kostenlos", "kosten die events etwas"],					//3
  ["ja", "jo", "yes", "ja"],  //4
  ["nein", "negativ", "nein ich hab noch fragen",], //5
  ["wie kann ich mich als kuenstler anmelden", "ich wuerde gerne ein event veranstalten"], //6
  ["wie kann ich den standort nachträglich ändern?", "der standort auf der webseite stimmt nicht", "es sind falsche informationen angegeben", "ich möchte mein event verschieben", "kann ich mein event auf einen anderen Tag verschieben?"], //7
  ["darf ich für mein event eintritt verlangen", "muss ich etwas von meinen eingenommen spenden abgeben"] //8
]  
 
// Possible responses corresponding to triggers
 
const answers = [
   [
    "Okay, damit ich ihnen weiterhelfen kann, muss ich wissen, ob Sie ein Künstler oder Besucher sind.",
  ],                                                                                  	//0
  [
    "Damit kann ich arbeiten, was für ein Anliegen haben Sie den genau?"
  ],						//1
  [
    "Informationen zu jedem Event finden Sie, indem Sie über das ausgewählte Event hovern und auf die Adresse klicken. Dort finden Sie alle Infos zum Event.\n\nHat ihnen diese Antwort geholfen?"
  ],						//2
  ["Ja alle Events sind kostenlos, aber es gibt die Möglichkeit, die Veranstalter, mit Spenden zu unterstützen.\n\nHat ihnen diese Antwort geholfen?"],					//3
  ["Wenn Sie noch weitere Anliegen haben. Dann checken Sie doch vorher unser FAQ unter 48h-navigotor.de/faq oder stellen Sie einfach weitere Fragen"],	//4
  ["Das tut mir leid!\nVersuchen Sie es einfach nochmal oder wenden Sie sich an unsere FAQ. Dieses finden Sie unter 48h-navigator.de/faq.\n\nWenn Sie lieber mit einem Mitarbeiter direkt Sprechen wollen, dann wenden Sie sich an unseren Service unter 48h-navigator.de/kontakt"], //5
  ["Schön das du auch ein Teil vom 48h Festival werden möchtest!\nAlle Informationen zur Anmeldung findest unter 48h-navigator.de/anmeldung\n\nHat ihnen diese Antwort geholfen?"], //6
  ["Bei Änderungen wenden Sie sich bitte an unsere Servicemitarbeiter. Diese sind rund um die Uhr unter service@48h-festival.de oder 48h-navigator.de/kontakt zu erreichen\n\nHat ihnen diese Antwort geholfen?"], //7
  ["Alle Informationen zu diesem Thema finden Sie unter 48h-navigator.de/faq. Aber grundsätzlich gilt der Eintritt beruht auf Spendenbasis und Sie dürfen 100% davon behalten. Zusätzlich können Sie natürlich auch Getränke oder sonstige Verpflegung anbieten.\n\nHat ihnen diese Antwort geholfen?"], //8
  
  
 
];
 
// For any other user input
 
const alternatives = [
  "Entschuldigung ich habe Sie nicht verstanden, versuchen Sie es bitte erneut.",
  "Versuchen Sie eine andere Formulierung",
];

// weißt dem Input eine Antwort anhand vom einem Index zu
function compare(utterancesArray, answersArray, string) {
  let item;
  for (let x = 0; x < utterancesArray.length; x++) {
    for (let y = 0; y < utterancesArray[x].length; y++) {
      if (utterancesArray[x][y] === string) {
        items = answersArray[x];
        item = items[Math.floor(Math.random() * items.length)];
        }
      }
   }
  return item;
}

function addChatEntry(input, product) {
  const messagesContainer = document.getElementById("messages");
  
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `${input}`;
  messagesContainer.appendChild(userDiv);
 
	let botText = document.createElement("span");
	let botDiv = document.createElement("div");
  botDiv.id = "bot";
  botDiv.className = "bot response";
  botText.innerText = "schreibt...";
  botDiv.appendChild(botText);
  messagesContainer.appendChild(botDiv);
 
 
  setTimeout(() => {
    botText.innerText = `${product}`;
  }, 2000); }