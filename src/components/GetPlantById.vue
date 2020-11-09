<template>
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
          @click="$emit('getid', inputId)"
          id="paramBtn"
        >
          Get Plant By Id
        </button>
      </div>
      <div class="card-body text-center" id="getParameterContent" v-if="!!plantById">
        <h4>{{plantById.planteNavn}}</h4>
        <hr>
        <p class="lead"><strong>Plant Type: </strong> {{plantById.planteType}}</p>
        <p class="lead"><strong>Max Height: </strong>{{plantById.maksHoejde}}</p>
        <p class="lead"><strong>Price: </strong>{{plantById.price}}</p>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            inputId: Number
        }
    },
    props: ["plantById"]
})
</script>