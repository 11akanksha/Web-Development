console.log("Every:");
const arr4 = [1, 2, 3, 4, 5];
const res = arr4.every((element) => {
    return element > 0;
});
console.log(res);

const arr1 = [1, 2, 3, 4, 5];
const res2 = arr1.every((element) => {
    return element > 0;
});
console.log(res2);

console.log("Fill:");
const arr = [1, 2, 3];
console.log(arr.fill(1));
console.log(arr.fill(8, 1, 4));

console.log("Filter:");
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

console.log(words.filter((words) => {
    return words.length > 5;
}));

//O/p:
Every:
true
true
Fill:
[ 1, 1, 1 ]
[ 1, 8, 8 ]
Filter:
[ 'exuberant', 'destruction', 'present' ]
