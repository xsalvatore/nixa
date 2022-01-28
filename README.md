# Nixa Technical Test

Voici ma soumission pour le test technique de Nixa

## Installation

Comment installer le projet localement ?

```git clone https://github.com/xsalvatore/nixa.git```   
```cd nixa```   
```npm install```   
```npm run start```

## Notes

En ce moment, une fois l'application lancé localement, seulement le formulaire de login sera visible. Pour voir l'interface de visualisation des profils, vous aurez besoin d'allez dans le code du component ``App.js`` et remplacer le ``<SignInForm />`` par ``<ProfileDisplay />``. Dans le but d'avoir des données à montrer, j'ai mis les données directement dans le code mais normalement elles seraient populées par le store de redux et l'API.
