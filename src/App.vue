<template>
  <div id="app">
    <router-view></router-view>
    <div class="loader" v-if="loading"></div>
    <ModalBase v-if="currentModal.isOpen" />
  </div>
</template>

<script>
import ModalBase from "@/components/ModalBase/ModalBase.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    ModalBase,
  },
  mounted() {

  },
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
