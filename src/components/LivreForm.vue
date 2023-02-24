<script setup>
import {reactive, ref} from "vue";
const titre = ref("");
const prix = ref("");
const quantite = ref("");

const emit = defineEmits(["ajouter"]);
const livre = reactive({titre: "",prix:1,qtestock:1})
</script>
<template>
  <form @submit.prevent="$emit('ajouter', livre)">
    <input type="text" v-model="livre.titre" placeholder="veuillez saisir le titre" />
    <input type="text" v-model="livre.prix" placeholder="veuillez saisir le prix" />
    <input type="text" v-model="livre.qtestock" placeholder=" veuillez saisir la quantité" />

    <button class="button" type="submit" > ajouter</button>
  </form>
</template>

<style scoped>

</style>