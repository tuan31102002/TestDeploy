<template>
  <div class="header">
    <div class="hero">
      <h4>Wichat</h4>
      <img src="../../assets/logopage-removebg.png" alt="" />
    </div>
    <div class="register">
      <button
        v-for="item in pageItems"
        :key="item.name"
        @click="gotoPage(item.name)"
      >
        {{ item.name }}
      </button>
    </div>
  </div>
</template>

<script src="./ChatHeader.js"></script>

<style scoped src="./ChatHeader.css"></style>
