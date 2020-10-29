<template>
   <primary-nav />
  <div class="grid grid-cols-main mt-8 gap-4 max-screen-xl mx-auto">
    <div>
      <sidebar />
    </div>
    <div>
      <secondary-nav />
    </div>
  </div>
</template>
<script>
import PrimaryNav from "./components/PrimaryNav.vue";
import SecondaryNav from "./components/SecondaryNav.vue";
import sidebar from "./components/sidebar.vue";
export default {
  name: "App",
  components: {
    PrimaryNav,
    SecondaryNav,
    sidebar,
  },
};
</script>ˇ
<style src="./assets/tailwind.css" />
