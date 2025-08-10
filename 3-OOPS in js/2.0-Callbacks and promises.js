// Asynchronous programming //

// 1) this is also an example for callback
function hello() {
    console.log("Hello guys");
}
setTimeout(hello, 10000); // 10 secs delay

// 2)
console.log("one");
console.log("two");

setTimeout(() => {
    console.log("hi")
}, 12000); // 12 secs delay

console.log("three");
console.log("four");

/* one to four print on the screen then 
hello guys and hello appears. */

// CALLBACKS //

function sum(a, b) {
    console.log(a + b);
}
function calculate(a, b, sumCallBack) {
    sumCallBack(a, b);
}

calculate(3, 36, sum);

// (or)

calculate(17, 5, (a, b) => {
    console.log(a + b);
});

// Nesting

// 1)
let age = 17;
if (age >= 18) {
    if (age >= 50) {
        console.log("Senior");
    } else {
        console.log("middle");
    }
} else {
    console.log("Child");
}

// 2)
for (let i = 0; i < 5; i++) {
    let str = "";
    for (let j = 0; j < 5; j++) {
        str += j;
    }
    console.log(i, str);
}

// CALLBACK HELL //

// Industry version
function getData(dataId, getNextData) {
    // 2sec delay
    setTimeout(() => {
        console.log("Data ", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}
// This is called callback hell.
getData(1, () => {
    console.log("Getting Data2...");
    getData(2, () => {
        console.log("Getting Data3...");
        getData(3, () => {
            console.log("Getting Data4...");
            getData(4);
        });
    });
});

// My version
// function getData(dataId, time) {
//     // 2sec delay
//     setTimeout(() => {
//         console.log("Data ", dataId)
//     }, time);
// }

// getData(1, 2000);
// getData(2, 4000);
// getData(3, 6000);

// To slove this problem we got promises concept

// PROMISES //
// It is an object in JS

// 1)
let promise1 = new Promise((resolve, reject) => {
    console.log("This is a promise");
    resolve("Success");
});
console.log(promise1);

// 2)
let promise2 = new Promise((resolve, reject) => {
    console.log("This is Python programming");
    reject("Invalid syntax,some error occurred");
    // shows error on console
});
console.log(promise2);

// Real use
function amazonOrder(orderId, getNextOder) {
    return new Promise((resolve, reject) => {
        // 2sec delay
        setTimeout(() => {
            console.log("Data ", orderId);
            resolve("Success");
            console.log(promise);
            if (getNextOder) {
                getNextOder();
            }
        }, 14000);
    })
}

let promise = amazonOrder(5624);

// then and catch methods

// 3)
let getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("Avengers will win in Secret Wars");
        resolve("Success");
    });
}

let prom = getPromise();
prom.then((res) => {
    console.log("Avengers won so it is a", res);
});

// 4)
let getAnotherPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("Print something");
        reject("Network Error");
    })
};

let prom2 = getAnotherPromise();
prom2.catch((err) => {
    console.log("Rejected due", err);
});

// PROMISE CHAIN //

// 1)
function asyncfunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Info-1");
            resolve("Success");
        }, 18000);
    })
}

function asyncfunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Info-2");
            resolve("Success");
        }, 2000);
    })
}

// setTimeout(() => { console.log("Fetching Info-1...") }, 15000);
// asyncfunction1().then((res) => {
//     console.log(res);
//     console.log("Fetching Info-2...");
//     asyncfunction2().then((res) => {
//         console.log(res);
//     });
// });

// (or)

setTimeout(() => {
    console.log("Fetching Info-1...")
}, 15000);
asyncfunction1().then((res) => {
    console.log("Fetching Info-2...");
    return asyncfunction2();
}).then((res) => {
    console.log(res);
});

// 2) Promise chain for getData Function
function getData1(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data ", dataId);
            resolve("Successfully got the Data");
        }, 25000);
    })
}

function getData2(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data ", dataId);
            resolve("Successfully got the Data");
        }, 2000);
    })
}

setTimeout(() => {
    console.log("Getting Data123...");
}, 23000);
getData1(123).then((res) => {
    console.log("Getting Data1234...");
    return getData2(1234);
}).then((res) => {
    console.log("Getting Data12345...");
    return getData2(12345);
}).then((res) => {
    console.log(res);
});
