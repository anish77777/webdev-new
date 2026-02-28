async function fetchData() {
    //simulate a getting data from server
    let x = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    let data = await x.json();
    console.log(data);
}
fetchData()

// --------------------------------------------------
// POST DATA EXAMPLE — sending data to a server
// --------------------------------------------------
// GET  → fetches/reads data from server (what fetchData does above)
// POST → sends/creates new data on the server

async function postData() {
  // The data we want to send to the server (as a JS object)
  const newPost = {
    title: "Hello World",
    body: "This is my first post.",
    userId: 1,
  };

  // await #1 — wait for the HTTP POST request to complete
  let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",                          // ← tell server this is a POST request
    headers: {
      "Content-Type": "application/json",    // ← tell server we're sending JSON
    },
    body: JSON.stringify(newPost),           // ← convert JS object → JSON string
  });

  // await #2 — wait for the response body to be read and parsed as JSON
  let data = await response.json();

  console.log("✅ Post created:", data);
  // Server echoes back the created post with an assigned `id`
}

postData();
