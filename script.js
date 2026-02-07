function setMorningTraining() {
    const day = document.querySelector("select").value;
    let morningTraining;
    let restDay = false;

    if (day === "Thursday" || day === "Sunday") {
        restDay = true;
    }

    if (restDay) {
        morningTraining = "None";
    }

    switch (day) {
        case "Monday":
            morningTraining = "Suicide runs";
            break;
        case "Tuesday":
            morningTraining = "Strength training: Upper body";
            break;
        case "Wednesday":
            morningTraining = "7.5km run and calisthenics";
            break;
        case "Friday":
            morningTraining = "Jump rope and footwork drills";
            break;
        case "Saturday":
            morningTraining = "Hill sprints and sparring";
            break;
    }

    return morningTraining;
}

function setEveningTraining () {
    const day = document.querySelector("select").value;
    let eveningTraining;
    let restDay = false;

    if (day === "Thursday" || day === "Sunday") {
        restDay = true;
    }

    if (restDay) {
        eveningTraining = "None";
    }

    switch (day) {
        case "Monday":
            eveningTraining = "Bag work";
            break;
        case "Tuesday":
            eveningTraining = "15 rounds sparring";
            break;
        case "Wednesday":
            eveningTraining = "Jump rope and padwork";
            break;
        case "Friday":
            eveningTraining = "Circuits and shadowboxing";
            break;
        case "Saturday":
            eveningTraining = "Strength training: Lower body";
            break;
    }

    return eveningTraining;
}

function displayTraining () {
    const morningTraining = setMorningTraining();
    const eveningTraining = setEveningTraining();

    const morningText = document.getElementById("morning");
    const eveningText = document.getElementById("evening");

    if (morningTraining === "None" && eveningTraining === "None") {
        const restDayText = document.getElementById("restDay");
        restDayText.innerHTML = "Rest Day";
        
        morningText.style.display = "none";
        eveningText.style.display = "none";
    } else {
        restDay.innerHTML = "";

        morningText.style.display = "block";
        eveningText.style.display= "block";
    }

    morningText.innerHTML = morningTraining;
    eveningText.innerHTML = eveningTraining;
}