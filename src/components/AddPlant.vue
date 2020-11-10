<template>
  <div class="col-12 mb-5">
    <div class="card textcenter mt-3">
      <div
        class="card-header bg-primary text-white"
        @click="hidepanel = !hidepanel"
      >
        Add Plant
      </div>

      <div class="card-body" :class="{ 'd-none': hidepanel }">
        <form id="plantForm" @submit.prevent="requestAdd">
          <div class="form-group form-row">
            <label class="col-md-2 col-form-label text-md-right" for="plantType"
              >Plant Type</label
            >
            <div class="col-md-10">
              <input
                type="text"
                class="form-control"
                name="plantType"
                id="plantType"
                placeholder="Plant's Type"
                v-model="formData.planteType"
              />
            </div>
          </div>

          <div class="form-group form-row">
            <label class="col-md-2 col-form-label text-md-right" for="plantName"
              >Plant Name</label
            >
            <div class="col-md-10">
              <input
                type="text"
                class="form-control"
                id="plantName"
                placeholder="Plant Name"
                v-model="formData.planteNavn"
              />
            </div>
          </div>

          <div class="form-group form-row">
            <label class="col-md-2 col-form-label text-md-right" for="aptDate"
              >Max Height</label
            >
            <div class="col-md-4">
              <input
                type="number"
                class="form-control"
                id="maksHoejde"
                v-model.number="formData.maksHoejde"
              />
            </div>
            <label class="col-md-2 col-form-label text-md-right" for="price"
              >Price</label
            >
            <div class="col-md-4">
              <input
                type="number"
                class="form-control"
                name="price"
                id="price"
                v-model.number="formData.price"
              />
            </div>
          </div>

          <div class="form-group form-row mb-0">
            <div class="offset-md-2 col-md-10">
              <button type="submit" class="btn btn-primary d-block ml-auto">
                Add Plant
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   name: "AddPlant",
  data() {
    return {
      formData: [],
      hidepanel: true
    };
  },
  methods: {
    requestAdd: function() {
      this.formData = {
        planteNavn: this.formData.planteNavn,
        planteType: this.formData.planteType,
        maksHoejde: this.formData.maksHoejde,
        price: this.formData.price
      };
      this.$emit("add", this.formData);
      this.formData = [];
      this.hidepanel = true;
    }
  }
}
</script>

<style >
.card-header {
  cursor: pointer;
}
</style>