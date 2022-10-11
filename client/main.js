const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment);

// Fortune
const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)

// Add goal
const submitBtn = document.getElementById("submitButton");
const addGoal = () => {
    axios.get("http://localhost:4000/api/goal")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}
submitBtn.addEventListener('click', addGoal)

// Choose goal
const goalList = document.getElementById("goalList");
const chooseGoal = () => {
    axios.get("http://localhost:4000/api/chooseGoal")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}
goalList.addEventListener('change', chooseGoal);

// Get quote
const quoteBtn = document.getElementById("quoteButton");
const getQuote = () => {
    axios.get("http://localhost:4000/api/quote")
    .then(res => {
        const data = res.data;
        alert(data)
    })
}
quoteBtn.addEventListener('click', getQuote);
