"use strict";

//1.Pattern Printing: Write a function that takes a positive integer n as input and prints a pattern like the following for n = 5:
//1
//2 2
//3 3 3
//4 4 4 4
//5 5 5 5 5

// function printPattern(n) {
//   for (let i = 1; i <= n; i++) {
//     let NewLineChar = `\n`;
//     for (let j = 0; j < i; j++) {
//       NewLineChar = NewLineChar + i + " ";
//     }
//     console.log(NewLineChar);
//   }
// }
// printPattern(5);

//2.Frequency Count: Write a function that takes an array of integers as input and returns an object representing the frequency count of each number in the array.

// function frequencyCount(arr) {
//   const frequency = {};

//   for (let i = 0; i < arr.length; i++) {
//     const num = arr[i];
//     if (frequency[num]) {
//       frequency[num]++;
//     } else {
//       frequency[num] = 1;
//     }
//   }
//   return frequency;
// }
// const numbers = [1, 2, 3, 2, 4, 1, 5, 1];
// const count = frequencyCount(numbers);
// console.log(count);

//3.Remove Duplicates: Write a function that takes an array as input and returns a new array with duplicates removed (maintaining the original order).

// function removeDuplicates(arr) {
//   let newArr = [];
//   let existingArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     const num = arr[i];
//     if (!existingArr[num]) {
//       newArr.push(num);
//       existingArr[num] = true;
//     }
//   }
//   return newArr;
// }
// const numbersOf = [5, 6, 4, 5, 5, 3, 2, 1, 2, 1, 8, 8, 9];
// const removeEl = removeDuplicates(numbersOf);
// console.log(removeEl);

//4.Array Sum: Write a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
// function sumOfArrayNumber(Arr) {
//   const sum = Arr.reduce((acc, currentValue) => {
//     if (currentValue > 0) {
//       return acc + currentValue;
//     } else {
//       return acc;
//     }
//   }, 0);
//   console.log(sum);
// }
// sumOfArrayNumber([4, 8, 10, 10, -10]);
//5.Object Transformation: Given an array of objects with 'id' and 'name' properties, write a function that transforms the array into an object where the keys are the 'id' values and the values are the 'name' values.
// function convertArrObjectToObject(arr) {
//   const result = {};
//   for (let i = 0; i < arr.length; i++) {
//     const { id, name } = arr[i];
//     result[id] = name;
//   }
//   return result;
// }
// let arrOfObject = [
//   { id: "L1S1", name: "rohan" },
//   { id: "L2F6", name: "sharma" },
//   { id: "H7D7", name: "shanayak" },
// ];
// const convertedObject = convertArrObjectToObject(arrOfObject);
// console.log(convertedObject);
//6.Nested Array Sum: Write a function that takes a nested array of numbers as input and returns the sum of all elements in the array.

// function sumOfNestedArray(nestedArray) {
//   let sum = 0;

//   for (let i = 0; i < nestedArray.length; i++) {
//     const internalArr = nestedArray[i];
//     for (let j = 0; j < internalArr.length; j++) {
//       const nestedInternalArr = internalArr[j];
//       console.log(nestedInternalArr);
//       sum += nestedInternalArr;
//     }
//   }

//   console.log(sum);
// }
// sumOfNestedArray([
//   [1, 5, 9, 10],
//   [5, 3, 4, 2, 7],
// ]);
//7.Largest Difference: Write a function that takes an array of numbers as input and returns the largest difference between any two elements in the array.

// function largestDifference(numbers) {
//   const minimumValue = Math.min(...numbers);
//   const maxValue = Math.max(...numbers);
//   return maxValue - minimumValue;
// }
// const numbers = [10, 5, 8, 2, 0, 4, 3, 1];
// const result = largestDifference(numbers);
// console.log(result);

//8.Array Rotation: Write a function that rotates elements of an array to the left by a given number of positions.

// function rotateArrayLeft(arr, position) {
//   let length = arr.length;
//   position = position % length;
//   let portionOne = arr.slice(position);
//   let portionTwo = arr.slice(0, position);
//   let rotatedArray = portionOne.concat(portionTwo);
//   return rotatedArray;
// }
// let array = [1, 2, 3, 4, 5];
// let rotated = rotateArrayLeft(array, 3);
// console.log(rotated);

//9.Object Sorting: Write a function that takes an array of objects with 'name' and 'age' properties and sorts the objects based on age in ascending order.
// function objectSorting() {
//   let arrayOfObj = [
//     { name: "rohan", age: 25 },
//     { name: "jimesh", age: 34 },
//     { name: "kailash", age: 30 },
//     { name: "radhika", age: 31 },
//   ];
//   arrayOfObj.sort((tempOne, tempTwo) => {
//     return tempOne.age - tempTwo.age;
//   });
//   console.log(arrayOfObj);
// }
// objectSorting();

//10.Array Intersection: Write a function that takes two arrays as input and returns an array containing the elements that are present in both arrays.

function arrayInterSection(arrOne, arrTwo) {
  let finalArray = [];
  for (let i = 0; i < arrOne.length; i++) {
    let arrayElementOne = arrOne[i];
    for (let j = 0; j < arrTwo.length; j++) {
      let arrayElementTwo = arrTwo[j];
      if (arrayElementOne == arrayElementTwo) {
        finalArray.push(arrayElementOne);
      }
    }
  }
  console.log(finalArray);
}
arrayInterSection([5, 7, 3, 2, 9, 0], [5, 7, 1, 4, 0]);
