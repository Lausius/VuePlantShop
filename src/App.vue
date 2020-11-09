<template>
  <div class="container">
    <div class="jumbotron">
      <h1 class="text-center">Planteshop</h1>
    </div>
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
    <div class="card card-primary mb-5">
      <div class="card-header">Add Plant To Shop</div>
      <form class="form" id="postForm">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Input Plant Name ..."
            v-model="newPlantName"
          />
          <input
            type="text"
            class="form-control"
            placeholder="Input Plant Type ..."
            v-model="newPlantType"
          />
          <input
            type="number"
            class="form-control"
            placeholder="Input Max Height ..."
            v-model.number="newMaxHeight"
          />
          <input
            type="number"
            class="form-control"
            placeholder="Input Price ..."
            v-model.number="newPrice"
          />
        </div>
      </form>
      <br />
      <div class="card-body btn-group">
        <button class="btn btn-primary" id="postBtn" @click="postPlant()">
          Send
        </button>
      </div>
      <div class="card-body" id="postContent"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios, { AxiosResponse, AxiosError } from "axios";
import plants from "./plante";
import { json2table } from "./json2table";

export default Vue.extend({
  name: "App",
  data() {
    return {
      planter: [],
      inputId: Number,
      plantById: [],
      plantTypes: [],
      inputType: "",
      URI: "http://restfulplanteshop.azurewebsites.net/api/planter",
      newPlantName: "",
      newPlantType: "",
      newMaxHeight: Number,
      newPrice: Number
    };
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
        .then((response) => {
          this.plantTypes = response.data;
        });
    },
    postPlant: function() {
      const newPlant = {
        planteNavn: this.newPlantName,
        planteType: this.newPlantType,
        maksHoejde: this.newMaxHeight,
        price: this.newPrice
      };
      console.log(newPlant);

      return axios.post(this.URI, newPlant).catch((error: AxiosError) => {
        console.log(error);
      });
    }
  }
});
</script>

