
1. run `npm install`
2. Branches
    * `git checkout Max/Deploy` : La page actuellement déployée [sur le serveur](http://sestini-pizza.fr)
    * `git checkout max/resetStyles` : La branche de travail principale
3. run `npm start` : Va lancer le serveur sur http://192.168.1.48/8888
    * Pour revenir au localhost par défaut, changer la ligne 27 dans package.json
        * actuelle : `"start": "PORT=8888 HOST=192.168.1.48 react-scripts start`
        * par défaut `"start": react-scripts start`



