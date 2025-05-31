const express = require("express");
const path = require("path");
const nbModel = require("./naivebayes");

const app = express();
app.use(express.static("public"));
app.use(express.json());

// Ruta para procesar análisis de sentimientos
app.post("/predict", (req, res) => {
    try {
        const userText = req.body.text;
        if (!userText) {
            return res.status(400).json({ error: "Texto vacío, intenta de nuevo." });
        }
        
        const sentiment = nbModel.predict(userText);
        res.json({ sentiment });
    } catch (error) {
        console.error("Error en la predicción:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

// Ruta para servir la página principal
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Manejo de rutas no definidas
app.use((req, res) => {
    res.status(404).json({ error: "Ruta no encontrada" });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
