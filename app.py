from flask import Flask, render_template, request
import pickle

app = Flask(__name__)

# Cargar modelo y vectorizador
with open("model.pkl", "rb") as f:
    model, vectorizer = pickle.load(f)

@app.route("/", methods=["GET", "POST"])
def index():
    resultado = ""
    if request.method == "POST":
        texto = request.form["texto"]
        vec = vectorizer.transform([texto])
        pred = model.predict(vec)
        resultado = f"Sentimiento detectado: {pred[0]}"
    return render_template("index.html", resultado=resultado)

if __name__ == "__main__":
    app.run(debug=True)
