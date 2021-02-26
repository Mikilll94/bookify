<template>
  <div
    class="sidepanel"
    :class="{ 'sidepanel--open': $store.state.sidePanelOpened }"
  >
    <div class="sidepanel__content">
      <div class="sidepanel-logo">
        <div class="sidepanel-title">
          BOOKIFY
        </div>
        <div
          class="sidepanel-close"
          @click="closeSidepanel"
        >
          <img
            width="36"
            height="36"
            :src="require('@/assets/close.svg')"
          >
        </div>
      </div>
      <div class="sidepanel__items">
        <div class="sidepanel__item sidepanel__item--active">
          Pobyty
        </div>
        <div class="sidepanel__item">
          Loty
        </div>
        <div class="sidepanel__item">
          Wynajem samochodów
        </div>
        <div class="sidepanel__item">
          Atrakcje
        </div>
        <div class="sidepanel__item">
          Taksówki lotniskowe
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  methods: {
    closeSidepanel() {
      this.$store.commit('CLOSE_SIDEPANEL');
    },
  },
});
</script>

<style lang="scss" scoped>
.sidepanel {
  width: 0;
  height: 100vh;
  top: 0;
  position: fixed;
  z-index: 1;
  height: 100vh;
  overflow-x: hidden;
  transition: width 0.5s;
  background-color: #1f2937;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
  rgba(0, 0, 0, 0.12) 0px -12px 30px,
  rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
  rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.sidepanel--open {
  width: 240px;
  border-right: 1px solid #7b8590;
}

.sidepanel__content {
  padding-left: 16px;
  padding-right: 12px;
}

.sidepanel-logo {
  margin-top: 8px;
  margin-bottom: 36px;
  font-size: 36px;
  font-family: 'Courier New', Courier, monospace;
  display: flex;
  align-items: center;
}

.sidepanel__items {
  margin-top: 12px;
  color: #BEC3CB;
  white-space: nowrap;
}

.sidepanel__item {
  padding: 12px 8px;
  // margin-bottom: 24px;
}

.sidepanel__item:hover {
  background-color: rgba(55, 65, 81);
  cursor: pointer;
}

.sidepanel__item--active {
  color: #FFFFFF;
}

.sidepanel-close {
  display: flex;
  margin-left: 8px;
}

.sidepanel-close:hover {
  opacity: 0.8;
  transform: scale(1.1);
  cursor: pointer;
}

.sidepanel-title {
  margin-right: 16px;
}
</style>
