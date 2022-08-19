<template>
  <div class="form-input">
    <label>{{ title }}</label>
    <div class="inputarea">
      <fa class="fas-icon" :icon="icon" />
      <input
        :type="type"
        placeholder=""
        v-model="inputContent"
        @input="onInput"
      />
    </div>
  </div>
</template> 

<script src="./FormInput.js">
</script>

<style src="./FormInput.css" scoped>
</style>