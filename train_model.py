from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
import pickle

# Datos de ejemplo
texts = ["Me encanta este lugar", "Odio esto", "Es maravilloso", "Es terrible"]
labels = ["positivo", "negativo", "positivo", "negativo"]

# Transformar texto a vectores
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(texts)

# Modelo
model = MultinomialNB()
model.fit(X, labels)

# Guardamos modelo y vectorizador
with open("model.pkl", "wb") as f:
    pickle.dump((model, vectorizer), f)
