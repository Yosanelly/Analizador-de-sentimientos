class NaiveBayes {
    constructor() {
        this.classes = {};
        this.vocab = [];
    }

    train(texts, labels) {
        this.vocab = [...new Set(texts.join(" ").toLowerCase().split(/\s+/))]; 

        labels.forEach((label, i) => {
            if (!this.classes[label]) {
                this.classes[label] = { total: 0, wordCounts: Array(this.vocab.length).fill(0) };
            }
            let words = texts[i].toLowerCase().split(/\s+/);
            words.forEach(word => {
                let index = this.vocab.indexOf(word);
                if (index !== -1) this.classes[label].wordCounts[index] += 1;
            });
            this.classes[label].total += 1;
        });
    }

    predict(text) {
        let words = text.toLowerCase().split(/\s+/);
        let probabilities = {};

        for (let label in this.classes) {
            let classData = this.classes[label];
            let prob = classData.total / Object.values(this.classes).reduce((acc, c) => acc + c.total, 0);

            words.forEach(word => {
                let index = this.vocab.indexOf(word);
                if (index !== -1) prob *= (classData.wordCounts[index] + 1) / (classData.total + this.vocab.length);
            });

            probabilities[label] = prob;
        }

        return Object.keys(probabilities).reduce((a, b) => (probabilities[a] > probabilities[b] ? a : b));
    }
}

// Datos de entrenamiento
const texts = ["Me encanta este lugar", "Odio esto", "Es maravilloso", "Es terrible"];
const labels = ["positivo", "negativo", "positivo", "negativo"];

const nbModel = new NaiveBayes();
nbModel.train(texts, labels);

module.exports = nbModel;
