# Labo HTTP Infra

Auteurs: Lazar Pavicevic, Valentin Kaelin

## Etape 1: HTTP serveur statique avec apache httpd

Nous avons utilisé l'image `php:8-apache-bullseye` afin d'avoir, comme dans la vidéo de présentation, une configuration minimale déjà présente.
Les fichiers de notre site statique doivent donc se trouver dans le chemin suivant à l'intérieur du conteneur: `/var/www/html/`.

Nous construisons l'image docker avec la commande suivante:
```bash
docker build -t api-2021-http-infra-step1 .
```
Puis, nous pouvons lancer un container et y accèder via [localhost](http://localhost:9090) avec :

```bash
docker run -p 9090:80 api-2021-http-infra-step1
```