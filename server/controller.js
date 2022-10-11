module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", "A dubious friend may be an enemy in camouflage.", "A faithful friend is a strong defense.", "A feather in the hand is better than a bird in the air.", "A fresh start will put you on your way."];
      
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    addGoal: (req, res) => {
        const responses = ["keep it up!", "good job"];
        let randomIndex = Math.floor(Math.random() * responses.length);
        let randomResponse = responses[randomIndex];

        res.status(200).send(randomResponse)
    },
    chooseGoal: (req, res) => {
        const responses = ["good choice", "okay"];
        let randomIndex = Math.floor(Math.random() * responses.length);
        let randomResponse = responses[randomIndex];

        res.status(200).send(randomResponse)
    },
    getQuote: (req, res) => {
        const quotes = ["Just one small positive thought in the morning can change your whole day.", "Opportunities dont happen, you create them.", "It is never too late to be what you might have been."];
        let randomIndex = Math.floor(Math.random() *  quotes.length);
        let randomQuote = quotes[randomIndex];

        res.status(200).send(randomQuote)
    }

}