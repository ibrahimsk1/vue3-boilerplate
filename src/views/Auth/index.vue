<template>
  <auth-layout>
    <router-view />
  </auth-layout>
</template>

<script>
import AuthLayout from "../../Layouts/AuthLayout";

export default {
  components: {
    "auth-layout": AuthLayout
  }
};
</script>
