<template>
  <div class="container">
    <div class="jumbotron">
      <h1 class="text-center">Planteshop</h1>
    </div>
    <AddPlant @add="postPlant" />
    <div class="card card-primary mb-5">
      <div class="card-header">GET All Plants</div>
      <div class="card-body btn-group">
        <button class="btn btn-primary" @click="getAllPlants()" id="getBtn">
          Get All Plants
        </button>
      </div>
      <table class="table" v-if="planter.length">
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
    <div class="card card-primary mb-5">
      <div class="card-header">GET Specific Plant By Id</div>
      <input
        type="number"
        class="form-control"
        id="inputParameter"
        placeholder="Input ID ..."
        v-model.number="inputId"
      /><br />
      <div class="card-body btn-group">
        <button
          class="btn btn-primary"
          @click="getPlantById(inputId)"
          id="paramBtn"
        >
          Get Plant By Id
        </button>
      </div>
      <div
        class="card-body"
        id="getParameterContent"
        v-for="plant in plantById"
        :key="plant.planteId"
      >
        {{ plant }}
      </div>
    </div>
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
          @click="getPlantByType(inputType)"
          id="typeBtn"
        >
          Get Plant By Type
        </button>
      </div>
      <table class="table" v-if="plantTypes.length">
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
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios, { AxiosResponse, AxiosError } from "axios";
import plants from "./IPlants";
import AddPlant from "./components/AddPlant.vue";

export default Vue.extend({
  name: "App",
  data() {
    return {
      inputId: Number,
      planter: [],
      plantById: [],
      plantTypes: [],
      inputType: "",
      URI: "http://restfulplanteshop.azurewebsites.net/api/planter"
    };
  },
  components: {
    AddPlant
  },
  methods: {
    getAllPlants: function() {
      return axios
        .get(this.URI)
        .then((response: AxiosResponse) => {
          this.planter = response.data;
        })
        .catch((error: AxiosError) => {
          console.log(error);
        });
    },
    getPlantById: function(id: number) {
      return axios
        .get("http://restfulplanteshop.azurewebsites.net/api/planter/" + id)
        .then((response: AxiosResponse) => {
          this.plantById = response.data;
        })
        .catch((error: AxiosError) => {
          console.log(error);
        });
    },
    getPlantByType: function(type: string) {
      return axios
        .get(
          "http://restfulplanteshop.azurewebsites.net/api/planter/type/" + type
        )
        .then(response => {
          this.plantTypes = response.data;
        });
    },
    postPlant: function(value) {
      console.log(value);

      return axios.post(this.URI, value).catch((error: AxiosError) => {
        console.log(error);
      });
    }
  }
});
</script>
