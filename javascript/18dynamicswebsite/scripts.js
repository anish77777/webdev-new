function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewStr;
    if (views < 1000) {
        viewStr = views;
    } else if (views >= 1000000) {
        viewStr = (views / 1000000).toFixed(1) + "M";
    } else {
        viewStr = (views / 1000).toFixed(0) + "K";
    }

    let html = `
        <div class="card">
            <div class="thumbnail">
                <img src="${thumbnail}" alt="Thumbnail" />
                <span class="duration">${duration}</span>
            </div>
            <div class="card-titles">
                <div class="cardheader">
                    <h1>${title}</h1>
                </div>
                <div class="cn_v_date">
                    <span>${cName}</span> • 
                    <span>${viewStr} views</span> • 
                    <span>${monthsOld} months ago</span>
                </div>
            </div>
        </div>`;

    document.querySelector(".container").innerHTML += html;
}

// Initializing with some examples
createCard("Sigma Web Dev video", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAC9S9o9C_06fA3_X1YI4Q0-K344A");
createCard("JavaScript Tutorial for Beginners", "Programming with Mosh", 2500000, 12, "48:15", "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg");
createCard("Mastering Flexbox and Grid", "Frontend Masters", 1200000, 2, "25:00", "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=280&h=158");