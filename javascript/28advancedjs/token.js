/**
 * TOKEN EXPIRATION IN LOCAL STORAGE
 * Local Storage doesn't have a built-in expiration time.
 * We can implement it by storing an object that includes the value and an expiry timestamp.
 */

/**
 * Stores a value in localStorage with an expiration time.
 * @param {string} key - The key to store the data under.
 * @param {any} value - The data to store.
 * @param {number} ttl - Time To Live in milliseconds.
 */
function setTokenWithExpiry(key, value, ttl) {
    const now = new Date();

    // Create an object that includes the value and the expiration time
    const item = {
        value: value,
        expiry: now.getTime() + ttl,
    };

    localStorage.setItem(key, JSON.stringify(item));
    console.log(`Token '${key}' set. It will expire in ${ttl / 1000} seconds.`);
}

/**
 * Retrieves a value from localStorage, checking for expiration.
 * @param {string} key - The key to retrieve.
 * @returns {any|null} - The value, or null if expired or not found.
 */
function getTokenWithExpiry(key) {
    const itemStr = localStorage.getItem(key);

    // If the item doesn't exist, return null
    if (!itemStr) {
        return null;
    }

    const item = JSON.parse(itemStr);
    const now = new Date();

    // Compare the current time with the expiry time
    if (now.getTime() > item.expiry) {
        // If the item is expired, delete it from storage and return null
        localStorage.removeItem(key);
        console.log(`Token '${key}' has expired and was removed.`);
        return null;
    }

    return item.value;
}

// --- TESTING THE LOGIC ---

// 1. Set a token that expires in 5 seconds
setTokenWithExpiry("myToken", "SecretData123", 5000);

// 2. Try to get it immediately
console.log("Immediate GET:", getTokenWithExpiry("myToken"));

// 3. Try to get it after 6 seconds
console.log("Waiting 6 seconds to check expiration...");
setTimeout(() => {
    const val = getTokenWithExpiry("myToken");
    console.log("Delayed GET (after 6s):", val);
}, 6000);

console.log("\nTIP: You can check the 'Application' tab in DevTools to see the stored object structure.");
