# 🧠 Sentiment Analyzer App

Esta es una aplicación web simple que usa inteligencia artificial (Naive Bayes) para clasificar el sentimiento de un texto como **positivo** o **negativo**.

## 🚀 Cómo ejecutar

1. Clona el repositorio
2. Crea un entorno virtual y activa:
   ```
   python -m venv venv
   source venv/bin/activate  # o venv\Scripts\activate en Windows
   ```
3. Instala las dependencias:
   ```
   pip install flask scikit-learn
   ```
4. Corre el script de entrenamiento si no existe `model.pkl`:
   ```
   python train_model.py
   ```
5. Ejecuta la app:
   ```
   python app.py
   ```
6. Abre tu navegador en [http://localhost:5000](http://localhost:5000)

## 🛠️ IA usada

- Algoritmo: Naive Bayes
- Dataset: Ejemplos manuales
- Librerías: scikit-learn, CountVectorizer

---

¡Explora cómo tu texto es clasificado por una mini IA! 😄
