const lotteryButton = document.getElementById("lottery");
const sentence = document.getElementById("sentence");

// sentences

const sentence1 =
	" 'Nie troszczcie się więc zbytnio o jutro, bo jutrzejszy dzień sam o siebie troszczyć się będzie' Biblia Tysiąclecia Mt, 6:34";
const sentence2 =
	" 'I cóż z tego, że człowiek może pochwalić się tym, iż posiada subtelne uczucia znacznie wyższego rzędu niż te, które obserwujemy u zwierząt, skoro to tylko bardziej komplikuje mu życie' Mary Sheley, Frankenstein, rozdz. 10";
const sentence3 = "'Jak ktoś czegoś nie umie, to tego uczy' Risen II";
const sentence4 =
	"'Jeżeli są ci przykre widowiska w amfiteatrze i podobnych miejscach, jako że to samo zawsze przedstawiają, a ich podobieństwo czyni ich obejrzenie nudnym, tak i w życiu całym podobnego doznaje się wrażenia' Marek Aureliusz, Rozmyślania";

const randomSentence = () => {
	const arrayOfSentences = [sentence1, sentence2, sentence3, sentence4];
	return arrayOfSentences[Math.floor(Math.random() * 4)];
};

lotteryButton.addEventListener("click", ()=>  sentence.innerHTML = randomSentence());
