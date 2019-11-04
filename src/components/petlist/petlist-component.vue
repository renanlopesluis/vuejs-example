<template>
  <div class="container">
    <table>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
        <th>Ações</th>
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
  import PetService from '../../services/pet-service.js'
  const service = new PetService();
  export default{
    data(){
      return {
        pet: {},
        pets:  this.list()
      }
    },
    methods: {
      list(){
        service.list().then((response)=>response.json())
        .then((pets) => {
           this.pets = pets;
        });
      },
      remove(id){
        service.remove(id).then(
          response=>{
            this.list();
          }
        )
      }
    },
  }
</script>
