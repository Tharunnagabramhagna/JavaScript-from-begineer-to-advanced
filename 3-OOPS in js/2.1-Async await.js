// 1)
async function hello() {
    console.log("Hello");
};
console.log(hello());

// 2) async-await
function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather Data");
            resolve(200);
        }, 10000);
    });
};

async function getWetherData() {
    await api(); // 1st
    await api(); // 2nd
}

console.log(getWetherData());

// 3) async-await
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataId);
            resolve(200);
        }, 2000);
    });
};

async function getAllData() {
    console.log("getting Data1...");
    await getData(1);
    console.log("getting Data2...");
    await getData(2);
    console.log("getting Data3...");
    await getData(3);
    console.log("getting Data4...");
    await getData(4);
};

console.log(getAllData());

// IIFE //

function getData1(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataId);
            resolve(200);
        }, 32000);
    });
};

setTimeout(() => {
    console.log("getting Data5...")
}, 30000);
(async function () {
    await getData1(5);
    console.log("getting Data6...");
    await getData1(6);
    console.log("getting Data7...");
    await getData1(7);
    console.log("getting Data8...");
    await getData1(8);
})();