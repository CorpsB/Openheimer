#!/bin/bash

# Démarrer le serveur PHP sur localhost:4000
php -S localhost:4000 > /dev/null 2>&1 &

# Récupérer le PID du serveur PHP
PHP_SERVER_PID=$!

# Lancer le navigateur sur localhost:4000
xdg-open http://localhost:4000

# Attendre que l'utilisateur interrompe le script
read -p "Appuyez sur Entrée pour arrêter le serveur..."

# Arrêter le serveur PHP
kill $PHP_SERVER_PID > /dev/null 2>&1
