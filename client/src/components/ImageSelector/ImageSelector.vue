<template>
  <div class="image-select">
    <caption>
      {{
        caption
      }}
    </caption>
    <img
      class="register__infocontainer--preview"
      :src="require(`../../assets/${imagePreview}`)"
      alt="choose avatar"
    />
    <div class="register__avatar--selectbox">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="require(`../../assets/${image.url}`)"
        alt=""
        @click="onSelect(image.url)"
      />
    </div>
  </div>
</template>

<script src="./ImageSelector.js">
</script>

<style scoped src="./ImageSelector.css">
</style>