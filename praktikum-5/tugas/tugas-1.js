function intersectionSlow(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && !result.includes(arr1[i])) {
        result.push(arr1[i]);
      }
    }
  }
  return result;
}
function intersectionFast(arr1, arr2) {
  const set = new Set(arr1);
  const result = [];
  for (let num of arr2) {
    if (set.has(num)) {
      result.push(num);
      set.delete(num); 
    }
  }

  return result;
}
function groupAnagrams(arr) {
  const map = new Map();

  for (let word of arr) {
    const key = word.split("").sort().join("");

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(word);
  }
  return Array.from(map.values());
}
function tripletSlow(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        if (i !== j && j !== k && i !== k) {
          if (arr[i] + arr[j] === arr[k] * arr[k]) {
            return true;
          }
        }
      }
    }
  }

  return false;
}
function tripletFast(arr) {
  arr.sort((a, b) => a - b);

  const n = arr.length;

  for (let k = n - 1; k >= 0; k--) {
    let left = 0;
    let right = k - 1;

    while (left < right) {
      const sum = arr[left] + arr[right];
      const square = arr[k] * arr[k];

      if (sum === square) {
        return true;
      } else if (sum < square) {
        left++;
      } else {
        right--;
      }
    }
  }

  return false;
}

function generateArray(size) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 1000));
}

const arr1 = generateArray(5000);
const arr2 = generateArray(5000);

console.log("=== INTERSECTION ===");
console.time("Slow");
intersectionSlow(arr1, arr2);
console.timeEnd("Slow");

console.time("Fast");
intersectionFast(arr1, arr2);
console.timeEnd("Fast");

console.log("\n=== ANAGRAM ===");
const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(words));

console.log("\n=== TRIPLET ===");
const arr3 = generateArray(2000);

console.time("Triplet Slow");
tripletSlow(arr3);
console.timeEnd("Triplet Slow");

console.time("Triplet Fast");
tripletFast(arr3);
console.timeEnd("Triplet Fast");
