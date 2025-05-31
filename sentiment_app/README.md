🧠 Sentiment Analyzer App
Esta es una aplicación web simple que usa inteligencia artificial (Naive Bayes) para clasificar el sentimiento de un texto como positivo o negativo.

🚀 Cómo desplegar en Vercel
1️⃣ Clonar el repositorio
bash
git clone <URL_DEL_REPOSITORIO>
cd sentiment-analyzer-app
2️⃣ Instalar dependencias
Ejecuta el siguiente comando para instalar las librerías necesarias:

bash
npm install
3️⃣ Configurar Vercel
Si aún no tienes la CLI de Vercel instalada, instálala con:

bash
npm install -g vercel
Inicia sesión en Vercel:

bash
vercel login
4️⃣ Desplegar la aplicación
Ejecuta el siguiente comando en la terminal:

bash
vercel
Vercel te pedirá seleccionar el proyecto. Sigue las instrucciones y usa el puerto dinámico (process.env.PORT).

Si necesitas un despliegue en producción, usa:

bash
vercel --prod
5️⃣ Acceder a la aplicación
Después del despliegue, Vercel generará una URL pública automáticamente. Ejemplo: https://sentiment-analyzer.vercel.app 📌 Copia la URL y accede desde tu navegador.

🛠️ Inteligencia Artificial usada
✅ Algoritmo: Naive Bayes ✅ Dataset: Ejemplos manuales ✅ Librerías: Express, Natural (para procesamiento de lenguaje)
