function duplicateEncode(word) {
    const arr = []
    let newArr = word.split('')
    let newArr2 = word.match(/[a-z]/ig)
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] !== word.match(/[a-z]/ig)) {
            console.log(word.match(/[a-z]/ig))
            arr.push('(')
        } else { arr.push(')') }
    } console.log(arr.join(''))
}

duplicateEncode('orange') 
