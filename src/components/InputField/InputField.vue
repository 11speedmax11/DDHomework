<template>
  <div class="input-custom">
    <input
      class="input"
      :value="value"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    placeholder: String,
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
