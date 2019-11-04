<template>
  <div>
    <h2>PetStore</h2>
    <nav>
        <router-link to="/register">Register</router-link>
        <router-link to="/list">Pets</router-link>
        <hr>
        <router-view></router-view>
    </nav>
  </div>
</template>
