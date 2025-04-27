var alphabet = 
    [   'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];


const words = [
    'ELMA',
    'ARABA',
    'EV',
    'TELEFON',
    'MASA',
    'TABAK',
    'OLTA',
    'YEMEK'
];

let word, hiddenWord, guessCount;

function NewRandomWord(){
    let randomNum = Math.floor(Math.random() * words.length)
    newWord = words[randomNum];
    word = newWord.split('')
    hiddenWord = newWord.split('').map(()=> '_')
    
    guessCount = (word.length) + 2;
    
    document.querySelector('#screenWord').value = hiddenWord.join('')
    document.querySelector('#screenWordLenght').value = guessCount
}

function takeLetter(value){
    document.querySelector('#showLetter').value = value
    let isCorrectGuess = false; 

    if(guessCount == 0){
        alert('Adam Asildi , Oyun Bitti')
        return;
    }else{
        for (let i = 0; i < word.length; i++) {
            if(value == word[i]){
                hiddenWord[i] = value;
                document.querySelector('#screenWord').value = hiddenWord.join('');
                isCorrectGuess = true
            }
        }

        if(!isCorrectGuess){
            guessCount--
        }

        if (hiddenWord.join('') === word.join('')) {
            alert("Tebrikler, kazandınız!");
        }

        document.querySelector('#screenWordLenght').value = guessCount;
    }
}

NewRandomWord()

