
// return the longest substring without repeating characters.
const getLongsetSubStr = (str) => {
    // abcabcbb
    let result = ""
    let search = ""
    for(let i = 0; i <str.length/2; i++) {
        search += str[i]
        const targetStr = str.slice(i)
        if (targetStr.includes(search)) {
            result = search
        }
    }
    return result
}
console.log(getLongsetSubStr("abcabcbb"))

// return multiplying two or more numbers together
const multiplyArr = (arr) => {
    let num = 1;
    for(let i=0; i < arr.length; i++){
        num *= Number(arr[i])
    }

    return num;
}
console.log(multiplyArr([1, 2, 3, 4]))

// sort numbers either asc or desc
const sortArr = (arr, sortType = "asc") => {
        for (let i = 0; i < arr.length; i++){
        for (let j=arr.length - 1; j > i; j--) {
            if ((sortType == "asc" && arr[i] > arr[j]) || (sortType == "desc" && arr[i] < arr[j])) {
                let val_i = arr[i]
                let val_j = arr[j]
                arr[i] = val_j
                arr[j] = val_i
            }
        }
    }
    return arr
}

// get number from object and sort asc
const makeValueArrAndSortAsc = (obj) => {
    const valArr = Object.values(obj)
    return sortArr(valArr, 'asc')
}
console.log(makeValueArrAndSortAsc({a:3, b:1, c:2}))


// return the median value from array of numbers 
const findMedien = (arr) => {
    arr = sortArr(arr)
    let medienIndex = Math.floor(arr.length / 2)
    return arr[medienIndex]
}
console.log(findMedien([1,2,3,4,5]))


// get numbers which only are devided by itself or 1
const getNumbersOnlyDividedByItselfAndOne = (arr) => {
    let result = []
    arr.forEach(number => {
        if (
            number, [2, 3, 5, 7].includes(number) ||
            (
                number != 1  &&
                number % 2 != 0 &&
                number % 3 != 0 &&
                number % 5 != 0 &&
                number % 7 != 0
            )
        ) {
            
            result.push(number)
        }
    });
    return result
}
console.log(getNumbersOnlyDividedByItselfAndOne([1,2,3,4,5,6,7,8,9,10]))


// rotates an array to the right by a given number n
const rotateArrary = (arr, n) => {
    const count = arr.length
    const targetIndex = count - n
    const result = []
    for (let i = targetIndex;i<count;i++) {
        result.push(arr[i])
    }
    for (let i = 0; i<targetIndex; i++) {
        result.push(arr[i])
    }
    return result
}
console.log(rotateArrary([1,2,3,4,5], 2))


// return the longest palindaromic substring within it
const longestPalindrome = (str) => {
    let letterIndexArr = {}
    for(let i=0;i<str.length; i++) {
        if(!letterIndexArr[str[i]]) {
            letterIndexArr[str[i]] = []
        }
        letterIndexArr[str[i]].push(i)
    }
    let result = ""
    Object.entries(letterIndexArr).forEach((charArr) => {
        charCountArr = charArr[1]
        if(result == "" && charCountArr.length >= 2) {
            for(let j=charCountArr[0]; j<charCountArr[1]+1;j++) {
                result += str[j]
            }
        }
    })
    return result
}
console.log(longestPalindrome("cbbd"))

// splite an array into chunks of a specified size
const chunkArray = (arr, chunk) => {
    const result = []
    let chunkArr = []
    arr.forEach((num) => {
        chunkArr.push(num)
        if(chunkArr.length == chunk) {
            result.push(chunkArr)
            chunkArr = []
        }
    })
    if (chunkArr.length > 0) {
        result.push(chunkArr)
    }
    return result
}
console.log(chunkArray([1,2,3,4,5],2))