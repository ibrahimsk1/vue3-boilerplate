<template>
  <intercept>
    <home-layout>
      <router-view />
    </home-layout>
  </intercept>
</template>

<script>
import HomeLayout from "../../Layouts/HomeLayout";
import Intercept from "../../utils/Intercept"

export default {
  components: {
    "home-layout": HomeLayout,
    "intercept": Intercept
  }
};
</script>
