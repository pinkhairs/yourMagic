<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAuth0 } from "@auth0/auth0-vue";
import { Browser } from "@capacitor/browser";

export default  defineComponent({
  setup() {
    const { loginWithRedirect } = useAuth0();

    loginWithRedirect({
      appState: {
        target: "/tabs/tab-1",
      },
    });
  }
});
</script>

<style>
.swiper-pagination {
  bottom: 0 !important;
}
.swiper-wrapper {
  padding-bottom: 40px;
}
.swiper-pagination-bullet {
  background: #000000;
}
.swiper-pagination-bullet-active {
  box-shadow: 0 0 0 2px #000000;
  background-color: #ff93e2;
}
</style>
