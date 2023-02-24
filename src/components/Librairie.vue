

<script setup>
import { reactive, onMounted } from "vue";
import Form from "./Form.vue";
import Header from "./Header.vue";
import LibrairieItem from "@/components/LibrairieItem.vue";
import Livre from "@/views/Livre";
import  LivreForm from "@/components/LivreForm.vue"
const listeL = reactive([]);

const url = "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/10/livres"

function handlerRechercher(motcle)
{
  console.log(motcle);
  const fetchOptions = { method: "GET" };
fetch(url+"?search="+motcle, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      // -- vider la liste des livres
      listeL.splice(0, listeL.length);
      // pour chaque donnée renvoyée par l'API
      //  créer un objet instance de la classe livre
      //  et l'ajouter dans la liste listeL
      dataJSON.forEach((v) => listeL.push(new Livre(v.id,v.titre, v.prix,v.qtestock)))
    })
    .catch((error) => console.log(error));
}
function handlerAugmenter(livre) {
  livre.pourAugmenter();
  // -- entête http pour la req AJAX
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // -- le livre modifiée est envoyé au serveur
  //  via le body de la req AJAX
  const fetchOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify({ id:livre.id, titre :livre.titre, prix: livre.prix, qtestock: livre.qtestock}
    )
  };
  // -- la req AJAX
  fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        // actualiser la liste des livres
        getLivres();
      })
      .catch((error) => console.log(error));
}
function handlerDiminuer(livre) {
  if (livre.qtestock>1) {
  livre.pourDiminuer();
  // -- entête http pour la req AJAX
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // -- la chose modifiée est envoyé au serveur
  //  via le body de la req AJAX
  const fetchOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify({id :livre.id,titre :livre.titre , prix: livre.prix,qtestock: livre.qtestock}
    )
  };
  // -- la req AJAX
  fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        // actualiser la liste des livres
        getLivres();
      })
      .catch((error) => console.log(error));}
  else{
    handlerDelete(livre.id);
  }
}
function getLivres() {
  const fetchOptions = { method: "GET" };
  fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        // -- vider la liste des livres
        listeL.splice(0, listeL.length);
        // pour chaque donnée renvoyée par l'API
        //  créer un objet instance de la classe livre
        //  et l'ajouter dans la liste listeL
        dataJSON.forEach((v) => listeL.push(new Livre(v.id,v.titre, v.prix,v.qtestock)));
      })
      .catch((error) => console.log(error));
}
// -- fonction du cycle de vie du composant
// exécutée 1 seule fois à la création
onMounted(() => {
  getLivres();
});
function handlerAjouter(livre) {

  // -- entête http pour la req AJAX
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // -- le livre modifiée est envoyé au serveur
  //  via le body de la req AJAX
  const fetchOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(livre),
  };
  // -- la req AJAX
  fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        // actualiser la liste des livres
        getLivres();
      })
      .catch((error) => console.log(error));
}
function handlerDelete(key) {
  console.log(key);
  const fetchOptions = {
    method: "DELETE",
  };
  // -- l'id du livre à supprimer doit être
  //  ajouté à la fin de l'url
  fetch(url + "/" + key, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        getLivres();
      })
      .catch((error) => console.log(error));
}

</script >
<template>
    <Header/>
  <Form @chercherL="handlerRechercher" />
  <LivreForm
      @ajouter="handlerAjouter"
  />
  <LibrairieItem
    v-for="livre of listeL "
    :key="livre.id"
     :livre="livre"
    @deleteL="handlerDelete"
    @decrementL="handlerDiminuer"
    @incrementL="handlerAugmenter"
      />


</template>
<style scoped>

</style>