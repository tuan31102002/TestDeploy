<template>
  <div class="rooms__section">
    <div class="rooms" action="">
      <input type="text" placeholder="add new ..." v-model="newRoom" />
      <button @click="addNewRoom">Add</button>
    </div>
    <div class="roomlist">
      <div class="roomlist-header">
        {{ roomHeader }}
      </div>
      <div
        class="roomlist__container"
        v-for="(list, index) in lists"
        :key="index"
      >
        <div class="roomlist--new-added">
          {{ list }}
        </div>
      </div>
    </div>
  </div>
</template>
<script src='./RoomList.js'>
</script>
<style src='./RoomList.css'>
</style>
