/**
 * DEFINITION: The 'keydown' event is fired when a key is pressed down. 
 * Unlike 'keypress', it is fired for all keys, including modifier keys like Ctrl, Shift, and Alt.
 */
document.addEventListener('keydown', (e) => {
    // Log for debugging
    console.log(`Key Pressed: ${e.key} | Code: ${e.code}`);

    // Update UI elements
    const mainKey = document.getElementById('main-key');
    const keyDetail = document.getElementById('key-value');
    const codeDetail = document.getElementById('code-value');
    const locationDetail = document.getElementById('location-value');
    const whichDetail = document.getElementById('which-value');

    // Handle space key explicitly for better visibility
    mainKey.textContent = e.key === ' ' ? 'Space' : e.key;
    
    keyDetail.textContent = e.key;
    codeDetail.textContent = e.code;
    locationDetail.textContent = e.location;
    whichDetail.textContent = e.which;

    // Trigger pulse animation
    const card = document.querySelector('.main-display');
    card.classList.remove('pulse');
    void card.offsetWidth; // Force reflow to restart animation
    card.classList.add('pulse');

    // Visual feedback for meta keys
    updateMetaKeys(e);
});

function updateMetaKeys(e) {
    const metaDisplay = document.getElementById('meta-keys');
    const activeKeys = [];
    if (e.ctrlKey) activeKeys.push('CTRL');
    if (e.shiftKey) activeKeys.push('SHIFT');
    if (e.altKey) activeKeys.push('ALT');
    if (e.metaKey) activeKeys.push('META');

    metaDisplay.innerHTML = activeKeys.map(k => `<span class="meta-badge">${k}</span>`).join('');
}
