<template>
  <error-layout>
    <router-view />
  </error-layout>
</template>

<script>
import ErrorLayout from "../../Layouts/ErrorLayout";

export default {
  components: {
    "error-layout": ErrorLayout
  }
};
</script>
