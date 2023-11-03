const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");

function calculateAge() {
    const birthdayValue = birthdayEl.value;
    if (birthdayValue === "") {
        alert("please select a birthdate");
    } else {
        const age = getAge(birthdayValue);
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    const currentYear = currentDate.getFullYear();
    const birthdayYear = birthdayDate.getFullYear();
    // console.log(birthdayDate.getFullYear());
    const presentAge = currentYear - birthdayYear;
    console.log(presentAge);
}

btnEl.addEventListener("click", calculateAge);
