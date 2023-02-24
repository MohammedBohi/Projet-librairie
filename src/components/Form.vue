<script setup>
import { ref } from "vue";

const libelle = ref("");
const emit = defineEmits(["chercherL"]);

</script>
<template>
  <form @submit.prevent="$emit('chercherL', libelle)">
    <input type="text" v-model="libelle" placeholder="vous cherchez un livre ?" />
    <button type="submit" > rechercher</button>
  </form>
</template>
<style scoped>

 button {
        border: none;
        display: inline-block;
        text-align: center;
        cursor: pointer;
        text-transform: uppercase;
        outline: none;
        overflow: hidden;
         position : relative
 ;
        color: #eeeeee;
        font-weight: 600;
        font-size: 10px;
        background-color: #87CEEB;
        padding: 5px 10px;
        margin: 10px;
      }
 /* Applique une position relative au span du bouton */

 .button span {
        position: relative;
        z-index: 1;
      }
 /* Styles de l'animation "hover" du bouton */

 button:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 470%;
        width: 140%;
        background: #00008B;
        -webkit-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
        -webkit-transform: translateX(-100%) translateY(-25%) rotate(45deg);
        transform: translateX(-100%) translateY(-25%) rotate(45deg);
      }
      button:hover:after {
        -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
        transform: translateX(-9%) translateY(-25%) rotate(45deg);
      }

 /* Ajoute une marge à gauche pour espacer le bouton du champ de saisie */

 button {
   margin-left: 10px ;
 }


</style>