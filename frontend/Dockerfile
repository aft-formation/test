# Utiliser l'image Node.js Alpine officielle comme image de base
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier le fichier package.json et package-lock.json
COPY package.json .

# Installer les dépendances
RUN npm install

# Installer le serveur `serve` globalement
RUN npm i -g serve

# Copier tout le reste du code de l'application
COPY . .

# Construire l'application
RUN npm run build

# Exposer le port 5000
EXPOSE 5000

# Démarrer l'application en utilisant `serve`
CMD ["serve", "-s", "dist", "-l", "5000"]
