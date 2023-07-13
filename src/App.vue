<template>
  <div id="app">
    <router-view></router-view>
    <PreloaderCircle v-if="loading"></PreloaderCircle>
    <ModalBase v-if="currentModal.isOpen" />
  </div>
</template>

<script>
import ModalBase from "@/components/ModalBase/ModalBase.vue";
import PreloaderCircle from "@/components/PreloaderCircle/PreloaderCircle.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    ModalBase,
    PreloaderCircle,
  },
  mounted() {},
  computed: {
    ...mapGetters("app", ["loading", "currentModal"]),
  },
  methods: {
    ...mapActions("app", ["setCurrentModal"]),
  },
};
</script>

<style lang="scss" >
@import "@/scssVars.scss";
</style>
