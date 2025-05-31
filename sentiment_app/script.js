const express = require("express");
const path = require("path");
const nbModel = require("./naivebayes");
const { createClient } = require("@supabase/supabase-js");

const app = express();
app.use(express.static("public"));
app.use(express.json());

// Configurar Supabase
const supabaseUrl = "https://yjgbrcmmnyeztcqaxtsz.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqZ2JyY21tbnllenRjcWF4dHN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxMTk3ODcsImV4cCI6MjA2MjY5NTc4N30.WMqgF5aOEng4QvEwcmilEkWsylNThawz91jxd9fSBIs";
const supabase = createClient(supabaseUrl, supabaseKey);

// Ruta para procesar análisis de sentimientos y guardar en Supabase
app.post("/predict", async (req, res) => {
    try {
        const userText = req.body.text;
        if (!userText) {
            return res.status(400).json({ error: "Texto vacío, intenta de nuevo." });
        }

        const sentiment = nbModel.predict(userText);

        const { data, error } = await supabase
            .from("sentimientos")
            .insert([{ texto: userText, sentimiento: sentiment }]);

        if (error) return res.status(500).json({ error: error.message });

        res.json({ mensaje: "Guardado en Supabase", sentimiento: sentiment, data });
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
