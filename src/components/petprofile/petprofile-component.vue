<template>
  <div class="container">
      <h2 class="main">Pet Details</h2>
      <section>
          <div class="container">
              <form name="petForm" method="post" >
                  <div class="form-group">
                      <label for="name">Name</label>
                      <input type="text" id="name" name="name" v-model="pet.name"
                          class="form-control" placeholder="name" readOnly/>
                  </div>
                  <div class="form-group">
                      <label for="name">type</label>
                      <input type="text" id="age" class="form-control"
                          placeholder="age" v-model="pet.type" readOnly/>
                  </div>
                    <div class="form-group">
                      <label for="name">Age</label>
                      <input type="number" id="age" class="form-control"
                          placeholder="age" v-model="pet.age" readOnly/>
                  </div>
                  <button color="primary" @click="cancel()">Cancel</button>
              </form>
          </div>
      </section>
  </div>
</template>
<script>
  import PetService from '../../services/pet-service.js'
  export default{
    data(){
      return {
        pet: {}
      }
    },
    methods: {
      cancel(){

      }
    }
  }
</script>
