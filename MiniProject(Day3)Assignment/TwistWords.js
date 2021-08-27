let words =
    [
        {
            jumbled: "papel",
            correct: "apple"
        },
        {
            jumbled: "mputcoer",
            correct: "computer"
        },
        {
            jumbled: "boilem",
            correct: "mobile"
        },
        {
            jumbled: "letobt",
            correct: "bottle"
        },
        {
            jumbled: "arphenoe",
            correct: "earphone"
        },
        {
            jumbled: "reowfl",
            correct: "flower"
        },
        {
            jumbled: "natinoum",
            correct: "mountain"
        }
    ]

let currentWord = 0;
let score = 0;

function displayWord() {
    document.querySelector("#j-word").innerText =
        words[currentWord].jumbled;

    document.querySelector("#score").innerText = score;
}


displayWord();


function checkAnswer() {

    let answer = document.querySelector("#inp").value;

    if (answer.toLowerCase() === words[currentWord].correct.toLowerCase()) {

        score++;

    }

    if (currentWord == words.length - 1) {

        let msg = "";

        if (score === 7) {
            msg = "sahi khel gya!!" + score;
        }
        else if (score === 6) {
            msg = "Thik hi hai ek toh glt hogya na!!" + score
        }
        else if (score < 5) {
            msg = "kaha se kharidi esi bakvas dictionary" + score
        }

        alert(msg);

        location.reload();
    }
    else {
        currentWord++;
        displayWord();
        document.querySelector("#inp").value = "";
    }

}















