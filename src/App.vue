<template>
  <div>
    <NavBar />
    <SidePanel />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from '@/layout/NavBar.vue';
import SidePanel from '@/layout/SidePanel.vue';

export default Vue.extend({
  components: {
    NavBar,
    SidePanel,
  },
});
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  min-width: fit-content;
}

body {
  height: 100vh;
}
</style>
