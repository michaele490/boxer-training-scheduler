function setTraining() {
    const day = document.querySelector("select").value;
    let morningTraining;
    let eveningTraining;
    let restDay = false;
    switch (day) {
        case "Monday":
            morningTraining = "Suicide runs";
            eveningTraining = "Bag work";
            break;
        case "Tuesday":
            morningTraining = "Strength training: Upper body";
            eveningTraining = "15 rounds sparring";
            break;
        case "Wednesday":
            morningTraining = "7.5km run and calisthenics";
            eveningTraining = "Jump rope and padwork";
            break;
        case "Thursday":
            morningTraining = "None";
            eveningTraining = "None";
            restDay = true;
            break;
        case "Friday":
            morningTraining = "Jump rope and footwork drills";
            eveningTraining = "Circuits and shadowboxing";
            break;
        case "Saturday":
            morningTraining = "Hill sprints and sparring";
            eveningTraining = "Strength training: Lower body";
            break;
        case "Sunday":
            morningTraining = "None";
            eveningTraining = "None";
            restDay = true;
    }
}