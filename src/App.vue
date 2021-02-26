<template>
  <div>
    <NavBar />
    <SidePanel />
    <main class="main">
      <div class="card-list">
        <article class="card-list__item card-item">
          <img class="card-item__image" :src="require('@/assets/accommodations/gorski-klimat.jpg')">
          <header class="card-item__header">Górski Klimat</header>
          <footer class="card-item__footer">
            <!-- eslint-disable-next-line max-len -->
            Witamy w miejscu z którego nie będziesz chciał wrócić !Apartamenty Górski Klimat to kameralny obiekt...
          </footer>
        </article>
        <article class="card-list__item">
          <img class="card-item__image" :src="require('@/assets/accommodations/gorski-klimat.jpg')">
          <header class="card-item__header">Górski Klimat</header>
          <footer class="card-item__footer">
            <!-- eslint-disable-next-line max-len -->
            Witamy w miejscu z którego nie będziesz chciał wrócić !Apartamenty Górski Klimat to kameralny obiekt...
          </footer>
        </article>
        <article class="card-list__item">
          <img class="card-item__image" :src="require('@/assets/accommodations/gorski-klimat.jpg')">
          <header class="card-item__header">Górski Klimat</header>
          <footer class="card-item__footer">
            <!-- eslint-disable-next-line max-len -->
            Witamy w miejscu z którego nie będziesz chciał wrócić !Apartamenty Górski Klimat to kameralny obiekt...
          </footer>
        </article>
        <article class="card-list__item">
          <img class="card-item__image" :src="require('@/assets/accommodations/gorski-klimat.jpg')">
          <header class="card-item__header">Górski Klimat</header>
          <footer class="card-item__footer">
            <!-- eslint-disable-next-line max-len -->
            Witamy w miejscu z którego nie będziesz chciał wrócić !Apartamenty Górski Klimat to kameralny obiekt...
          </footer>
        </article>
        <article class="card-list__item">
          <img class="card-item__image" :src="require('@/assets/accommodations/gorski-klimat.jpg')">
          <header class="card-item__header">Górski Klimat</header>
          <footer class="card-item__footer">
            <!-- eslint-disable-next-line max-len -->
            Witamy w miejscu z którego nie będziesz chciał wrócić !Apartamenty Górski Klimat to kameralny obiekt...
          </footer>
        </article>
      </div>
    </main>
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
  font-family: Inter var, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  line-height: 1.5;
  min-width: fit-content;
}

body {
  height: 100vh;
}

.main {
  padding: 64px;
  padding-left: 2rem;
  padding-right: 2rem;
  margin: 0 auto;
  max-width: 1320px;
}

.card-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2rem;
}

.card-list__item {
  border-radius: .5rem;
  box-shadow: 0 15px 30px 0 rgb(0 0 0 / 11%), 0 5px 15px 0 rgb(0 0 0 / 8%);
  overflow: hidden;
}

.card-item__image {
  width: 100%;
}

.card-item__header {
  padding: 1rem 1rem 0.5rem 1rem;
  font-size: 20px;
  font-weight: 500;
}

.card-item__footer {
  padding: 0.5rem 1rem 1rem 1rem;
  color: #8B8E9A;
  font-size: 16px;
}
</style>
