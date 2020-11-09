<template>
  <div class="card card-primary mb-5">
    <div class="card-header">GET Plant By Type</div>
    <input
      type="text"
      class="form-control"
      id="inputType"
      placeholder="Input Type ..."
      v-model="inputType"
    /><br />
    <div class="card-body btn-group">
      <button
        class="btn btn-primary"
        @click="$emit('gettype', inputType)"
        id="typeBtn"
      >
        Get Plant By Type
      </button>
    </div>
    <table class="table table-striped" v-if="plantTypes.length">
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
        <tr v-for="plant in plantTypes" :key="plant.planteId">
          <td>{{ plant.planteId }}</td>
          <td>{{ plant.planteNavn }}</td>
          <td>{{ plant.planteType }}</td>
          <td>{{ plant.maksHoejde }}</td>
          <td>{{ plant.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      inputType: ""
    };
  },
  props: ["plantTypes"]
});
</script>