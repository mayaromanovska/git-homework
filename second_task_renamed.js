// some changes

const str = "Це довільний текст для створення масиву слів ";
function stringToArray(str) {
    let strTrim = str.trim();
    let strLowCase = strTrim.toLowerCase();
    let array = new Array();
    array = strLowCase.split(" ");
    let resultArraySort = array.sort();    
    return resultArraySort;   
}

console.log(stringToArray(str));// виводить [ 'для', 'довільний', 'масиву', 'слів', 'створення', 'текст', 'це' ]

/*
2. Написати функцію, яка видаляє з масива елементи, що дублюються, та повертає масив оригінальних елементів,
відсортованих за зростанням
 */
const initialArray = [1, 4, 6, 6, 7, 5, 34, 5, 1000, 66, 1];
function removeDuplicatesAndSort(arr) {
        // the first way
        let arrayResult = new Array();
        for (i= 0 ; i < arr.length; i++){
            if (!arrayResult.includes(arr[i])) {
                arrayResult.push(arr[i]);
            }
        }
        return arrayResult.sort((a, b) => a - b);
            
        // the second way
        /*let arrayResult = new Array();
        arr.forEach((element) => {
            if (!arrayResult.includes(element)) {
                arrayResult.push(element);
            }
        });    
        return arrayResult.sort((a, b) => a - b);
        */
    
        // the thirs way
        /*let arrayResult = new Array();
        arrayResult = [...new Set(arr)];
        return arrayResult.sort((a, b) => a - b);
        */
      
        // the forth way 
        /*let arrayResult = new Array();   
        arrayResult = arr.filter((item, index) => {
            return arr.indexOf(item) === index
        });
        return arrayResult.sort((a, b) => a - b);
        */
}

console.log(removeDuplicatesAndSort(initialArray)); // виводить [ 1, 4, 5, 6, 7, 34, 66, 1000 ]
/*
3. Написати функцію, яка поверне масив парних чисел
 */
const initialArray2 = [2, 3, 6, 7, 9, 12];
function arrayOfEvens(arr) {
    let arrayResult = arr.filter((x) => x % 2 === 0);  
    return arrayResult;
}

console.log(arrayOfEvens(initialArray2)); // виводить [ 2, 6, 12 ]

/*
4. Написати функцію, яка сформує масив з послідовності чисел, формуючи його з аргумента, який збільшує
кожний наступний елемент послідовності на самого себе. Максимальне значення масиву не повинно перевищувати число 30.
 */
function createArray(element) {
    let resultArray = new Array();
    let arrayItem = element;

    for (i = 0; arrayItem <= 30; i++){
        resultArray[i] = arrayItem;
        arrayItem += element;
    }
    return resultArray;
}

console.log(createArray(5)); // виведе [ 5, 10, 15, 20, 25, 30 ]
console.log(createArray(3)); // виведе [ 3,  6,  9, 12, 15, 18, 21, 24, 27, 30 ]

