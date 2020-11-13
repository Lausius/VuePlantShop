<template>
  <div class="card card-primary mb-5">
    <div class="card-header">GET All Plants</div>
    <div class="card-body btn-group">
      <button class="btn btn-primary" @click="$emit('get')" id="getBtn">
        Get All Plants
      </button>
    </div>
    <div
      v-if="!planter.length && isLoading"
      class="d-flex justify-content-center mb-2"
    >
      <div class="spinner-border text-info" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <table class="table table-striped" v-else-if="planter.length">
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
          <button class="btn btn-danger" @click="$emit('remove', plante)">
            Remove
          </button>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "GetAllPlants",
  props: ["planter", "isLoading"],
});
</script>