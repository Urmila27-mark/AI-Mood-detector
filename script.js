function mixColors(colors) {
    return colors.length === 1 ? colors[0] : `linear-gradient(135deg, ${colors.join(', ')})`;
}

function detectMood() {
    const entry = document.getElementById("diary-entry").value.toLowerCase();
    const body = document.body;
    const text = document.querySelector(".mood-text");
    
    let moods = [];
    let moodNames = [];

    if (entry.includes("happy") || entry.includes("joy") || entry.includes("excited")) {
        moods.push("#ffd900a4, #ff9900b0");
        moodNames.push("Happy 😊");
    }
    if (entry.includes("sad") || entry.includes("lonely") || entry.includes("upset")) {
        moods.push("#3498DB, #6DD5FA");
        moodNames.push("Sad 😢");
    }
    if (entry.includes("angry") || entry.includes("frustrated") || entry.includes("mad")) {
        moods.push("#E74C3C, #FF5733");
        moodNames.push("Angry 😡");
    }
    if (entry.includes("calm") || entry.includes("peaceful") || entry.includes("relaxed")) {
        moods.push("#2ECC71, #A8E6CF");
        moodNames.push("Calm 😌");
    }

    if (moodNames.length === 1) {
        text.innerText = `Your mood is ${moodNames[0]}!`;
        body.style.background = `linear-gradient(135deg, ${moods[0]})`;
    } else if (moodNames.length === 2) {
        if (moodNames.includes("Calm 😌") && moodNames.includes("Happy 😊")) {
            text.innerText = "Your day was a peaceful and happy one!";
        } else if (moodNames.includes("Angry 😡") && moodNames.includes("Sad 😢")) {
            text.innerText = "Your day was frustrating.";
        } else if (moodNames.includes("Calm 😌") && moodNames.includes("Angry 😡")) {
            text.innerText = "Your day was a mix of calm and frustration.";
        } else if (moodNames.includes("Happy 😊") && moodNames.includes("Sad 😢")) {
            text.innerText = "Your day was interesting with ups and downs!";
        }
        body.style.background = mixColors(moods);
    } else if (moodNames.length > 2) {
        text.innerText = "Your day was a rollercoaster of emotions!";
        body.style.background = mixColors(moods);
    } else {
        text.innerText = "Mood not detected. Try expressing more feelings!";
        body.style.background = "linear-gradient(135deg, #f4f4f4, #dcdcdc)";
    }
}

document.getElementById("diary-entry").addEventListener("input", detectMood);