<template>
  <div class="form-group">
      <label for="type">Type</label>
      <select class="form-control" v-model="selected" @change="emitEventChanged">
        <option disabled value="">Choose..</option>
        <option v-for="option in types" v-bind:value="option">
          {{ option.description }}
        </option>
      </select>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        types: [
          {id: 1, description: 'Bird'},
          {id: 2, description: 'Cat'},
          {id: 3, description: 'Dog'}
        ],
        selected: {}
      }
    },
    methods:{
      emitEventChanged(){
        this.$emit('EventInputChanged', this.selected)
      }
    }
  }
</script>
