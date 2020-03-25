import { performance } from 'perf_hooks';

const array = [8, 58, 30, 80, 82, 20];

function bubbleSort(array: number[]) {
  var t0 = performance.now();

  if (array && !array.length) return;

  if (array.length === 1) {
    return array;
  }

  var k = array.length - 1;

  while (--k) {

    array.forEach((number, index) => {
      if (number > array[index + 1]) {
        const temp = array[index + 1];
        array[index + 1] = number;
        array[index] = temp;
      }
    });
  }

  console.log(`Finished: ${(performance.now() - t0) / 1000 } `);
  return array;
}

function bubbleSortWithForLoop(array: number[]) {
  var t0 = performance.now();

  if (array && !array.length) return;

  if (array.length === 1) {
    return array;
  }

  const n = array.length - 1;

  for (let i = 0; n > i; i++) {
    for (let j = 0; n - i - 1 > j; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }

  console.log(`Finished: ${(performance.now() - t0) / 1000 } `);
  return array;
}


console.log(array[-1]);

console.log(bubbleSort(array));
console.log(bubbleSortWithForLoop(array));