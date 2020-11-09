<template>
  <div class="card card-primary mb-5">
    <div class="card-header">GET All Plants</div>
    <div class="card-body btn-group">
      <button class="btn btn-primary" @click="$emit('get')" id="getBtn">
        Get All Plants
      </button>
    </div>
    <table class="table table-striped" v-if="planter.length">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Type</th>
          <th>Max Height</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="plante in planter" :key="plante.planteId">
          <td>{{ plante.planteId }}</td>
          <td>{{ plante.planteNavn }}</td>
          <td>{{ plante.planteType }}</td>
          <td>{{ plante.maksHoejde }}</td>
          <td>{{ plante.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    name: "GetAllPlants",
    props: ["planter"]
});
</script>