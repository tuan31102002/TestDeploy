<template>
  <div class="register">
    <div class="register__form">
      <div class="register__header">LET JOIN US WIBUS</div>
      <div class="register__infos">
        <div class="register__info">
          <div class="register__info--blocks">
            <div class="register__infocontainer">
              <div class="register__infocontainer--block1">
                <FormInput
                  v-for="(input, index) in inputInfos"
                  :key="index"
                  :info="input.info"
                  :title="input.title"
                  :icon="input.icon"
                  :type="input.type"
                  :inputIndex="index"
                  @onInput="inputSubmit"
                />
              </div>
              <div class="register__infocontainer--block2">
                <ImageSelector :caption="caption" />
              </div>
            </div>
            <div class="submit__checkbox">
              <input type="checkbox" @click="displaySubmit" />
              <p>
                I agree to the Terms and Conditions and the Privacy Policy of
                this site.
              </p>
            </div>
            <button
              class="submit--button"
              :disabled="invalid"
              @click="onSubmit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div class="register__footer">
        <!-- 1 way to use router-link to change page without having href -->
        <router-link id="router" :to="'/login'"
          >Already have an account ?</router-link
        >
        <p>
          By registering, you agree to Wichat's
          <span>Term of services</span> and <span>Privacy Policy</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script src="./SignupPage.js">
</script>

<style src="./SignupPage.css" scoped>
</style>
