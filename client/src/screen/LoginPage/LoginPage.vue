<template>
  <div class="login">
    <div class="login__form">
      <div class="login__form-header">LOGIN</div>
      <form>
        <div class="login__form-infos">
          <div class="login__form-info">
            <FomrInput
              v-for="(input, index) in inputInfos"
              :key="index"
              :info="input.info"
              :title="input.title"
              :icon="input.icon"
              :type="input.type"
              :inputIndex="index"
              @onInput="inputSubmit"
            />
            <fa id="fas" icon="eye" @click="onShow" />
            <button
              class="submit--button"
              :disabled="isDisable"
              @click.prevent="onLogin"
            >
              Login
            </button>
          </div>
          <div class="login__footer">
            <!-- 1 way to use router-link to change page without having href -->
            <router-link :to="'/register'"
              >You don't have account ??</router-link
            >
            <a href="">Forgot password</a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script src="./LoginPage.js">
</script>

<style scoped src="./LoginPage.css">
</style>