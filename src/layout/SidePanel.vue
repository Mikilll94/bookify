<template>
  <div
    class="sidepanel"
    :class="{ 'sidepanel--open': $store.state.sidePanelOpened }"
  >
    <div class="sidepanel__content">
      <div class="sidepanel-header">
        <div class="sidepanel-title">
          BOOKIFY
        </div>
        <div
          class="sidepanel-close"
          @click="closeSidepanel"
        >
          <img
            class="sidepanel-close"
            :src="require('@/assets/close.svg')"
          >
        </div>
      </div>
      <section class="sidepanel-section">
        <div class="sidepanel-profile">
          <div class="sidepanel-user">
            <img
              :src="require('@/assets/account_circle.svg')"
              class="sidepanel-user__avatar"
            >
            <div class="sidepanel-user__username">
              Mikołaj
            </div>
          </div>
          <div class="sidepanel-bell">
            <img :src="require('@/assets/notifications.svg')">
          </div>
        </div>
        <hr>
      </section>
      <div class="sidepanel-list">
        <div class="sidepanel-list__item sidepanel-list__item--active">
          Pobyty
        </div>
        <div class="sidepanel-list__item">
          Loty
        </div>
        <div class="sidepanel-list__item">
          Wynajem samochodów
        </div>
        <div class="sidepanel-list__item">
          Atrakcje
        </div>
        <div class="sidepanel-list__item">
          Taksówki lotniskowe
        </div>
      </div>
      <footer class="sidepanel-footer">
        <hr>
        <div class="sidepanel-secondary-list">
          <div class="sidepanel-secondary-list__item">
            Twój profil
          </div>
          <div class="sidepanel-secondary-list__item">
            Ustawienia
          </div>
          <div class="sidepanel-secondary-list__item">
            Wyloguj się
          </div>
        </div>
      </footer>
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
  height: 100%;
  top: 0;
  position: fixed;
  z-index: 1;
  overflow-x: hidden;
  transition: width 0.5s;
  background-color: #1f2937;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;

  &--open {
    width: 240px;
    border-right: 1px solid #7b8590;
  }

  &__content {
    padding-left: 16px;
    padding-right: 12px;
  }
}

.sidepanel-header {
  margin-top: 8px;
  margin-bottom: 36px;
  font-size: 36px;
  font-family: 'Courier New', Courier, monospace;
  display: flex;
  align-items: center;
}

.sidepanel-list {
  margin-top: 12px;
  color: #BEC3CB;
  white-space: nowrap;

  &__item {
    padding: 12px 8px;

    &:hover {
      background-color: rgba(55, 65, 81);
      cursor: pointer;
    }

    &--active {
      color: #FFFFFF;
    }
  }
}

.sidepanel-secondary-list {
  color: #BEC3CB;
  white-space: nowrap;

  &__item {
    padding: 12px 8px;

    &:hover {
      background-color: rgba(55, 65, 81);
      cursor: pointer;
    }
  }
}

.sidepanel-close {
  display: flex;
  margin-left: 12px;

  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
    cursor: pointer;
  }
}

@media (min-width: 711px) {
  .sidepanel-section {
    display: none;
  }

  .sidepanel-footer {
    display: none;
  }
}

.sidepanel-profile {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sidepanel-user {
  display: flex;
  align-items: center;

  &:hover {
    background-color: rgba(55, 65, 81);
    cursor: pointer;
  }

  &__avatar {
    margin-right: 4px;
  }

  &__username {
    font-size: 22px;
    letter-spacing: 1px;
  }
}

.sidepanel-bell {
  display: flex;
}
</style>
