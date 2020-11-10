<template>
  <div class="container">
    <div class="jumbotron">
      <h1 class="text-center display-4">Planteshop</h1>
    </div>
    <AddPlant @add="postPlant" />
    <GetAllPlants :planter="planter" @get="getAllPlants" />
    <GetPlantById :plantById="plantById" @getid="getPlantById" />
    <GetPlantByType :plantTypes="plantTypes" @gettype="getPlantByType"/>
   
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios, { AxiosResponse, AxiosError } from "axios";
import plants from "./IPlants";
import AddPlant from "./components/AddPlant.vue";
import GetAllPlants from "./components/GetAllPlants.vue";
import GetPlantById from "./components/GetPlantById.vue";
import GetPlantByType from "./components/GetPlantByType.vue";

export default Vue.extend({
  name: "App",
  data() {
    return {
      planter: [],
      plantById: "",
      plantTypes: [],
      inputType: "",
      URI: "http://restfulplanteshop.azurewebsites.net/api/planter"
    };
  },
  components: {
    AddPlant,
    GetAllPlants,
    GetPlantById,
    GetPlantByType
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
    postPlant: function(value: object) {
      console.log(value);

      return axios.post(this.URI, value).catch((error: AxiosError) => {
        console.log(error);
      });
    }
  }
});
</script>
