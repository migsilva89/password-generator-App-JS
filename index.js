let rangeLength = document.getElementById("range-length");  
let rangeResult = document.getElementById("range-result");
let generateBtn = document.getElementById("generate-btn");
let passwordResult = document.getElementById("password-result");

rangeLength.addEventListener("change", getRange)
generateBtn.addEventListener("click", generatePassword)


function getRange() {
    rangeResult.innerHTML = rangeLength.value
    return rangeLength.value
}

function generatePassword(){
    
    checkWichBoxesAreChecked()
    console.log(checkWichBoxesAreChecked())

    var length = getRange()
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!>=+*/-';
    var charactersLength = characters.length;

    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
    }

    passwordResult.innerHTML = result
}

function checkWichBoxesAreChecked() {

    var checkedCheckBoxes = []
    const checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

    for (var i = 0; i < checkboxes.length; i++) {
        checkedCheckBoxes.push(checkboxes[i].name)
    }
        
    return checkedCheckBoxes
}


