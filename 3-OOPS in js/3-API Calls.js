// Fetch API
// API => Application programming interface

const URL = "https://catfact.ninja/fact";
const factPara = document.querySelector("#fact");
const button = document.querySelector("#but");

const getFacts = async () => {
    console.log("getting data...");
    let response = await fetch(URL);
    console.log(response); // JSON Format
    console.log("Status =", response.status);
    let data = await response.json();
    console.log(data);
    console.log(data.fact);
    factPara.innerText = data.fact;
}

// Same example in promise chain
// function getFacts() {
//     fetch(URL).then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//         factPara.innerText = data.fact;
//     })
// }

button.addEventListener("click", getFacts);

// Requests and Response //

// I) HTTP verbs

// 1)"GET" Method is a default mode for fetch api
const API1 = "https://jsonplaceholder.typicode.com/posts/1";
fetch(API1)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
    });

// 2) "POST" method
const button2 = document.getElementById("postBtn");
const result1 = document.getElementById("result1");

const createPost = async () => {
    const postData = {
        title: "My First Post title is 'BAT-MAN'",
        body: "This is my first post on batman!",
        userId: Math.floor(Math.random() * 100)
    };

    const API2 = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(API2, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
    });

    const data = await response.json();
    console.log(data);
    result1.innerText = `✅ Post created successfully! ID: ${data.id}`;
};

button2.addEventListener("click", createPost);

// 3) "PUT" method
const button3 = document.getElementById("putBtn");
const result2 = document.getElementById("result2");

async function updatePost() {
    result2.innerText = "Updating post...";

    const updatedData = {
        id: 1,
        title: "Updated Post Title is 'IRON-MAN'",
        body: "This post has been fully replaced using PUT.",
        userId: Math.floor(Math.random() * 200)
    };

    try {
        const API3 = "https://jsonplaceholder.typicode.com/posts/1";
        const response = await fetch(API3, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedData)
        });

        const data = await response.json();
        console.log(data);
        result2.innerText = `✅ Post updated! Title: ${data.title}`;
    } catch (error) {
        console.error("Error:", error);
        result2.innerText = "❌ Failed to update post.";
    }
}

button3.addEventListener("click", updatePost);

// 4) PATCH Method
const button4 = document.getElementById("patchBtn");
const result3 = document.getElementById("result3");

async function updateTitle() {
    result3.innerText = "Updating title...";

    const patchData = {
        title: "Updated Title with PATCH Method as 'THOR'"
    };

    try {
        const API4 = "https://jsonplaceholder.typicode.com/posts/1";
        const response = await fetch(API4, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(patchData)
        });

        const data = await response.json();
        console.log(data);
        result3.innerText = `✅ Title updated: "${data.title}"`;
    } catch (error) {
        console.error("Error:", error);
        result3.innerText = "❌ Failed to update title.";
    }
};

button4.addEventListener("click", updateTitle);

// 5) DELETE Method
// It can't delete data permanently
// It is a temporary effect
const button5 = document.getElementById("deleteBtn");
const result4 = document.getElementById("deleteResult");

async function deletePost() {
    result4.innerText = "Deleting post...";

    try {
        const API5 = "https://jsonplaceholder.typicode.com/posts/1";
        const response = await fetch(API5, {
            method: "DELETE"
        });

        if (response.ok) {
            result4.innerText = "✅ Post deleted successfully!";
        } else {
            result4.innerText = "❌ Failed to delete post.";
        }

        console.log("Status:", response.status);
    } catch (error) {
        console.error("Error:", error);
        result4.innerText = "❌ Error occurred while deleting.";
    }
};

button5.addEventListener("click", deletePost);


/* II) Response status code :-

200 OK    =>    ✅ All good!
201 Created =>  ✅ New resource made
204 No Content => ✅ Deleted successfully

400 Bad Request => ❌ Your data is wrong
401 Unauthorized => ❌ Login needed
404 Not Found => ❌ Doesn’t exist

500 Internal Server Error => 💥 Server crashed

// For more details read MDN Docs. */
