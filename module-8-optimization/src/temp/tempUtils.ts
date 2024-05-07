// export const slowFunction2 = () => {
//     if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length !== arr2.length || arr1.length !== arr2.length) {
//         return false;
//     }
//     const sortedArr1 = arr1.slice().sort();
//     const sortedArr2 = arr2.slice().sort();
//     const result = sortedArr1.every((value, index) => {
//         return value === sortedArr2[index]
//     });
//     return result? 'noChanges': 'hasChanges'
// };
//
// const createOrderedArray = (count) => Array.from({length: count}, (_, i) => i);
//
// const createArray = (count) => Array.from({length: count}, () => Math.floor(Math.random() * 1000001));