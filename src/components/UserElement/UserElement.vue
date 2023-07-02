<template>
  <div class="user">
    <img
      :class="imgClass"
      src="@/assets/images/profilPicture.png"
      width="24px"
      height="24px"
    />
    <p class="uset__name">{{name}}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    imgClass: String,
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
