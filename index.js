let rangeLength = document.getElementById("range-length");  
let rangeResult = document.getElementById("range-result");
let generateBtn = document.getElementById("generate-btn");
let passwordResult = document.getElementById("password-result");
let characters = ''

rangeLength.addEventListener("change", getRange)
generateBtn.addEventListener("click", getInfoForPasswordGenerator)

function getRange() {
    rangeResult.innerHTML = rangeLength.value
    return rangeLength.value
}

function getInfoForPasswordGenerator(){

    var boxNumber = parseInt(checkWichBoxesAreChecked())

    if(!isNaN(boxNumber)){
        // console.log(boxNumber)
    
        switch (boxNumber) {
            case 12:
                characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
                break;

            case 13:
                characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
                break;

            case 14:
                characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+=-/*-'
                break;

            case 123:
                characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
                break;

            case 124:
                characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+=-/*-'
                break;

            case 1234:
                characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-/*-'
                break;

            case 134:
                characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=-/*-'
                break;

            case 23:
                characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
                break;

            case 24:
                characters = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+=-/*-'
                break;

            case 34:
                characters = '0123456789!@#$%^&*()_+=-/*-'
                break;

            case 1:
                characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
                break;

            case 2:
                characters = 'abcdefghijklmnopqrstuvwxyz'
                break;

            case 3:
                characters = '0123456789'
                break;

            case 4:
                characters = '!@#$%^&*()_+=-/*-'
                break;

            default:
                break;
        }
        
        var charactersLength = characters.length;
        passwordGenerator(characters, charactersLength)

    } else {
        passwordResult.innerHTML = "escolhe alguma opcao batata!"
    }
    
}


function passwordGenerator(characters, charactersLength){
    var length = getRange()
    var result = '';

    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    passwordResult.innerHTML = result;
}

function checkWichBoxesAreChecked() {
    
    var checkedCheckBoxes = ''
    const checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

    for (var i = 0; i < checkboxes.length; i++) {
        checkedCheckBoxes += checkboxes[i].value
    }

    return checkedCheckBoxes
}


