let rangeLength = document.getElementById('range-length')
let rangeResult = document.getElementById('range-result')
let generateBtn = document.getElementById('generate-btn')
let passwordResult = document.getElementById('password-result')
let characters = ''

rangeLength.addEventListener('change', getRange)
generateBtn.addEventListener('click', getInfoForPasswordGenerator)

function getRange() {
  rangeResult.innerHTML = rangeLength.value
  return rangeLength.value
}

function getInfoForPasswordGenerator() {
  var boxNumber = parseInt(getCheckedBoxes())

  //IF IS NUMBER IT GOES TROUHG SWITCH
  if (!isNaN(boxNumber)) {
    evaluatePassword()

    switch (boxNumber) {
      case 12:
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        break

      case 13:
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        break

      case 14:
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+=-/*-'
        break

      case 123:
        characters =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        break

      case 124:
        characters =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+=-/*-'
        break

      case 1234:
        characters =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-/*-'
        break

      case 134:
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=-/*-'
        break

      case 23:
        characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
        break

      case 24:
        characters = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+=-/*-'
        break

      case 34:
        characters = '0123456789!@#$%^&*()_+=-/*-'
        break

      case 1:
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        break

      case 2:
        characters = 'abcdefghijklmnopqrstuvwxyz'
        break

      case 3:
        characters = '0123456789'
        break

      case 4:
        characters = '!@#$%^&*()_+=-/*-'
        break

      default:
        break
    }

    evaluatePassword()

    var charactersLength = characters.length
    passwordGenerator(characters, charactersLength)

  // IF NOT
  } else {
    passwordResult.innerHTML = '<div class="font-bold">Please choose at least one option!</div>'
  }
}

function evaluatePassword() {
  var strenghtName = document.getElementById('strenght')
  var strenghtBgColor = document.querySelectorAll('.box')

  if (getCheckedBoxes().length > 3 && getRange() >= 8) {
    strenghtName.innerHTML = 'VERY STORNG'
    strenghtBgColor.forEach((element) => {
      element.classList.add('bg-purple-700')
    })
  } else if (getCheckedBoxes().length >= 3 && getRange() >= 6) {
    strenghtName.innerHTML = 'STRONG'

    for (let i = 0; i < 3; i++) {
      const element = strenghtBgColor[i]
      element.classList.add('bg-purple-700')
    }
    strenghtBgColor[3].classList.remove('bg-purple-700')
  } else if (getCheckedBoxes().length <= 2 && getRange() >= 5) {
    strenghtName.innerHTML = 'MEDIUM'

    for (let i = 0; i < 3; i++) {
      const element = strenghtBgColor[i]
      strenghtBgColor[3].classList.remove('bg-purple-700')
      element.classList.add('bg-purple-700')
    }
    strenghtBgColor[2].classList.remove('bg-purple-700')
  } else if (
    getCheckedBoxes().length <= 4 &&
    getRange() <= 5 &&
    getRange() >= 4
  ) {
    strenghtName.innerHTML = 'WEAK'

    for (let i = 0; i < 2; i++) {
      const element = strenghtBgColor[i]
      strenghtBgColor[2].classList.remove('bg-purple-700')
      element.classList.add('bg-purple-700')
    }
    strenghtBgColor[1].classList.remove('bg-purple-700')
  } else {
    strenghtName.innerHTML = 'VERY WEAK'
    for (let i = 0; i < 4; i++) {
      const element = strenghtBgColor[i]
      element.classList.remove('bg-purple-700')
    }
  }
}

function passwordGenerator(characters, charactersLength) {
  var length = getRange()
  var result = ''

  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  passwordResult.innerHTML = result
}

function getCheckedBoxes() {
  var checkedCheckBoxes = ''
  const checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

  for (var i = 0; i < checkboxes.length; i++) {
    checkedCheckBoxes += checkboxes[i].value
  }

  return checkedCheckBoxes
}
