/**
 * DEFINITION: setTimeout() calls a function after a delay.
 */
let timeoutId;
function startTimeout() {
    document.getElementById('timeout-status').textContent = "Running...";
    timeoutId = setTimeout(() => {
        document.getElementById('timeout-status').textContent = "Done!";
    }, 2000);
}

/**
 * DEFINITION: clearTimeout() cancels a timeout.
 */
function stopTimeout() {
    clearTimeout(timeoutId);
    document.getElementById('timeout-status').textContent = "Cancelled";
}

/**
 * DEFINITION: setInterval() calls a function repeatedly at intervals.
 */
let intervalId;
let count = 0;
function startInterval() {
    if (!intervalId) {
        intervalId = setInterval(() => {
            count++;
            document.getElementById('counter-value').textContent = count;
        }, 1000);
    }
}

/**
 * DEFINITION: clearInterval() stops an interval.
 */
function stopInterval() {
    clearInterval(intervalId);
    intervalId = null;
}

function resetCounter() {
    stopInterval();
    count = 0;
    document.getElementById('counter-value').textContent = count;
}
