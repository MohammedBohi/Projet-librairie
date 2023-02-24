<script setup>
const props = defineProps(["livre"]);
const emit = defineEmits(["deleteL", "decrementL","incrementL"]);



</script>

<template>
  <div class="wrapper">

  <div
  class="livre"  >

    {{livre.pourAfficher()}}

  </div>
  <div class="info" >
 <p class="texte"> {{livre.titre}}</p>
   <p class="texte"> {{livre.prix}} euro</p>
 <p class="texte">{{livre.qtestock}} livre(s)</p>
    <div class="actions">
      <button @click="$emit('incrementL', livre)">+ </button>
      <button @click="$emit('decrementL', props.livre)">-</button>
      <button @click="$emit('deleteL', livre.id)">supprimer</button>
    </div>
  </div>
  </div>




</template>

<style scoped>
/* le composant livre affiché et ses propriétés */
.livre {
  width : 100px;
  height : 130px;
  background-color:darkblue;
  color : white;
  display:flex;
  align-items: center;
  text-align: center ;
  padding : 0px 5px;
}
/* le texte des infos restants du livres qui s'affiches à droite du livre */
.info{
  display: flex;
  flex-direction: column;
   flex:1;
  color: whitesmoke;

}
.wrapper{
  display: flex;
}
/* l'alignement des textes */
.texte{
  margin-bottom: 5px;
  margin-left: 10px;
}
.actions{
  margin-bottom: 10px;
}

</style>