function generateLotto(lotto){
    if(lotto >= 42 && lotto <= 58){
        var generatedResults = [];
        for (let i = 1; i <= lotto; i++) {
            var randomNumber = Math.floor(Math.random() * lotto + 1);
            if(generatedResults.indexOf(randomNumber) === -1 && generatedResults.length <= 5){
                generatedResults.push(randomNumber === 0 ? randomNumber + 1 : randomNumber);
            }
        }
        return generatedResults.join('-');
    }

    return '';
}

function selectLotto(number){
    var generatedResult = generateLotto(number);
    document.getElementById('lotto-generated-number').innerText = generatedResult;
}

document.addEventListener("load", selectLotto(42));
