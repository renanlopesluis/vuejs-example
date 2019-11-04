<template>
  <div class="container">
      <h2 class="main">Pet Register</h2>
      <section>
          <div class="container">
              <form name="petForm" method="post" >
                  <div class="form-group">
                      <label for="name">Name</label>
                      <input type="text" id="name" name="name" v-model="pet.name"
                          class="form-control" placeholder="name" required/>
                  </div>
                  <pet-type @EventInputChanged="getType"></pet-type>
                    <div class="form-group">
                      <label for="name">Age</label>
                      <input type="number" id="age" class="form-control"
                          placeholder="age" required v-model="pet.age"/>
                  </div>
                  <button color="primary" @click="save($event)">Save</button>
              </form>
          </div>
      </section>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
        <tr v-for="pet in pets">
          <td>{{pet.id}}</td>
          <td>{{pet.name}}</td>
          <td>{{pet.age}}</td>
          <td><button @click="remove(pet.id)">Remove</button></td>
        </tr>
      </table>
  </div>
</template>

<script>
  import PetType from '../pettype/pettype-component.vue';
  import PetService from '../../services/pet-service.js'
  export default{
    data(){
      return {
        pet: {},
        pets:  this.list()
      }
    },
    components: {
      'pet-type': PetType
    },
    methods: {
      getType(petType){
        this.pet.type = petType;
      },
      save($event){
        $event.preventDefault();
        new PetService().save(this.pet).then(
          reponse =>{
            this.list();
          }
        )
      },
      list(){
        new PetService().list().then((response)=>response.json())
        .then((pets) => {
           this.pets = pets;
        });
      },
      remove(id){
        new PetService().remove(id).then(
          response=>{
            this.list();
          }
        )
      }
    },
  }
</script>
