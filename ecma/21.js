// builtin関数2
// objectでもできるが、forEachのみ不可能（objectはmapを適用した方がいい？）

[1, 2, 3, 4, 5].forEach(function(element, index, array) {
    console.log(index + ":" + element);
});

const find = [1, 2, 3, 4, 5].find(function(element, index, array) {
    return (element >= 3);
})

console.log(find)

const filt = [1, 2, 3, 4, 5].filter(function(element, index, array) {
    return (element >= 3);
})

console.log(filt)

const mapping = [1, 2, 3, 4, 5].map(function(element, index, array) {
    return element * element;
})

console.log(mapping)

const reduce = [1, 2, 3, 4, 5].reduce(function(prev, curr, index, array) {
    return prev + curr;
})

console.log(reduce)

const right = [1, 2, 3, 4, 5].reduceRight(function(prev, curr, index, array) {
    return prev - curr;
})

console.log(right)

const every = [1, 2, 3, 4, 5].every(function(element, index, array) {
    return (element >= 3);
})

console.log(every)

some = [1, 2, 3, ,4, 5].some(function(element, index, array) {
    return (element <= 3);
});

console.log(some); // false
