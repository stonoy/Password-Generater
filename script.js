const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

const capital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const small = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"]

const all = document.querySelector('.all')
const CL = document.querySelector('.CL')
const SL = document.querySelector('.SL')
const N = document.querySelector('.N')
const symbol = document.querySelector('.symbol')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const result = document.querySelector('.result')
const error = document.querySelector('.error')


// CLICK ON PASSWORD GENERETER BUTTON

btn1.addEventListener('click', () => {
    let number = Number(all.value)
    if ((16 > number) && (number > 7)) {
        error.textContent = ''
        final = getRandomOutput(characters, number)
        final = suffle(final)
        result.textContent = final;
    } else {
        error.textContent = 'total characters should be between 8 and 15(including both)'
    }
})


// CLICK ON SELECTED PASSWORD GENERETER BUTTON

btn2.addEventListener('click', () => {
    let n1 = Number(CL.value)
    let n2 = Number(SL.value)
    let n3 = Number(N.value)
    let n4 = Number(symbol.value)
    let nSum = n1 + n2 + n3 + n4
    if ((16 > nSum) && (nSum > 7)) {
        error.textContent = ''
        final1 = getRandomOutput(capital, n1)
        final2 = getRandomOutput(small, n2)
        final3 = getRandomOutput(Numbers, n3)
        final4 = getRandomOutput(symbols, n4)
        Final = final1 + final2 + final3 + final4
        Final = suffle(Final)
        result.textContent = Final;
    } else {
        error.textContent = 'total characters should be between 8 and 15(including both)'
    }
})

// FUNCTION: GIVES RANDOMOUTPUT from a given list

function getRandomOutput(list, number) {
    let random = []
    let password = ''
    for (let i = 0; i < number; i++) {
        let rN = Math.floor(Math.random() * (list.length))
        random.push(rN)
    }
    random.forEach(R => {
        password += list[R]
    })
    return password
}


// FUNCTION: MAKE SURE ALL CHARACTER OF GENERATED PASSWORD SUFFLES EFICIENTLY

function suffle(string) {
    let list = string.split('')
//     console.log(list)
    let random = []
    let final = []
    let suffled = ''
    for (let i = 0; i < list.length; i++) {
        let RN = Math.floor(Math.random() * (list.length))
//         console.log(RN)
        random.push(RN)
        if (random.length > 1) {
            let count = 0
            for (let j = 0; j < (random.length - 1); j++) {
                if (random[j] != RN) {
                    count += 1
                } else {
                    count -= 1
                }

            }
            if (count == (random.length - 1)) {
                final.push(RN)
//                 console.log('ok')
            } else {
//                 console.log('failed')
                random.pop()
                check(list, random, final)
            }
        }
    }
    final.unshift(random[0])
//     console.log(final)
    final.forEach(item => {
        suffled += list[item]
    })
//     console.log(suffled)
    return suffled
}

//FUNCTION: TO PROVIDE UNIQUE RANDOM NUMBERS TO THE ABOVE FUNCTION

function check(list1, list2, list3) {
    let number = Math.floor(Math.random() * (list1.length))
    list2.push(number)
    if (list2.length > 1) {
        let count = 0
        for (let j = 0; j < (list2.length - 1); j++) {
            if (list2[j] != number) {
                count += 1
            } else {
                count -= 1
            }

        }
        if (count == (list2.length - 1)) {
            list3.push(number)
//             console.log('ok')
        } else {
//             console.log('failed')
            list2.pop()
            check(list1, list2, list3)
        }
    }
}


