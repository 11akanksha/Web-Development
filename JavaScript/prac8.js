aa([1, 2, 3, 4], function (i) {
    console.log(i);
});

[1, 2, 3, 4].forEach(function (i) {
    console.log(i);
});

// async
function aa(arr) {
    arr.forEach(function (element) {
        setTimeout(function () {
            console.log(element)
        }, 0);
    });
}

aa([1, 2, 3, 4])

//O/p:
1
2
3
4
1
2
3
4
1
2
3
4
