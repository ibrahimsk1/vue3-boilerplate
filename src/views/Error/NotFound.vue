<template>
  <div>
    <h1>404</h1>
    <button
      type="submit"
      variant="primary"
      size="lg"
      class="btn-shadow"
      @click="goBack"
    >
      {{ $t("pages.go-back-home") }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
    methods: {
    goBack() {
      this.$router.push("/");
    }
  },
}
</script>

