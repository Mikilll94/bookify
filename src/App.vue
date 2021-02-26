<template>
  <div>
    <nav class="nav">
      <div class="nav__left">
        <div
          class="nav__hamburger"
          @click="openSidepanel"
        >
          <img :src="require('@/assets/menu.svg')">
        </div>
        <div class="nav__logo">
          BOOKIFY
        </div>
        <div class="nav__items">
          <div class="nav__item nav__item--active">
            Pobyty
          </div>
          <div class="nav__item">
            Loty
          </div>
          <div class="nav__item">
            Wynajem samochodów
          </div>
          <div class="nav__item">
            Atrakcje
          </div>
          <div class="nav__item">
            Taksówki lotniskowe
          </div>
        </div>
      </div>
      <div class="nav-rest">
        <div class="nav-bell">
          <img :src="require('@/assets/notifications.svg')">
        </div>
        <div class="nav-photo-wrapper">
          <div
            @click="photoDropdownOpen = true"
            ref="navPhoto"
            class="nav-photo"
          >
            <img
              :src="require('@/assets/account_circle.svg')"
              class="nav-photo__avatar"
            >
            <div class="nav-photo__username">
              Mikołaj
            </div>
          </div>
          <transition name="dropdown">
            <div
              v-show="photoDropdownOpen"
              class="nav-photo-dropdown"
              ref="photoDropdown"
            >
              <div class="nav-photo-dropdown__item">
                Twój profil
              </div>
              <div class="nav-photo-dropdown__item">
                Ustawienia
              </div>
              <div class="nav-photo-dropdown__item">
                Wyloguj się
              </div>
            </div>
          </transition>
        </div>
      </div>
    </nav>
    <div
      class="sidepanel"
      :class="{ 'sidepanel--open': sidepanelOpened }"
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      photoDropdownOpen: false,
      sidepanelOpened: false,
    };
  },
  mounted() {
    document.body.addEventListener('click', (e: Event) => {
      const navPhotoRef = this.$refs.navPhoto as HTMLElement;
      const photoDropdownRef = this.$refs.photoDropdown as HTMLElement;

      if (e.target !== this.$refs.navPhoto && e.target !== this.$refs.photoDropdown
        && !navPhotoRef.contains(e.target as Node | null)
        && !photoDropdownRef.contains(e.target as Node | null)) {
        this.photoDropdownOpen = false;
      }
    });
  },
  methods: {
    openSidepanel() {
      this.sidepanelOpened = true;
    },
    closeSidepanel() {
      this.sidepanelOpened = false;
    },
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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

.nav {
  height: 64px;
  background-color: #1f2937;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 0 64px;
}

@media (max-width: 1250px) {
  .nav {
    padding: 0 16px;
  }
}

.nav__left {
  display: flex;
  align-items: center;
}

.nav__hamburger {
  display: flex;
  padding-right: 4px;
}

@media (min-width: 1250px) {
  .nav__hamburger {
    display: none;
  }
}

.nav__logo {
  margin-right: 48px;
  font-size: 36px;
  font-family: 'Courier New', Courier, monospace;
}

.nav__items {
  display: flex;
}

@media (max-width: 1250px) {
  .nav__items {
    display: none;
  }
}

.nav__item {
  margin-right: 24px;
  color: #BEC3CB;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
}

.nav__item:hover {
  background-color: rgba(55, 65, 81);
  cursor: pointer;
}

.nav__item--active {
  color: #FFFFFF;
}

.nav-rest {
  display: flex;
  align-items: center;
}

.nav-bell {
  padding: 0.5rem 0.75rem;
  margin-right: 16px;
  cursor: pointer;
  display: flex;
}

.nav-bell:hover {
  background-color: rgba(55, 65, 81);
  border-radius: 2rem;
  cursor: pointer;
}

.nav-photo-wrapper {
  position: relative;
}

.nav-photo {
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
}

.nav-photo:hover {
  background-color: rgba(55, 65, 81);
  cursor: pointer;
}

.nav-photo__avatar {
  margin-right: 4px;
}

.nav-photo__username {
  font-size: 22px;
}

@media (max-width: 768px) {
  .nav-photo__username {
    display: none;
  }
}

.nav-photo:hover {
  cursor: pointer;
}

.nav-photo-dropdown {
  position: absolute;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  color: black;
  right: 0;
  width: 12rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 0.375rem;
  background-color: white;
  transform-origin: top right;
}

.nav-photo-dropdown__item {
  padding: 1rem 1rem;
  font-size: 0.875rem;
}

.nav-photo-dropdown__item:hover {
  background-color: #F0F1F4;
  cursor: pointer;
}

.dropdown-enter-active, .dropdown-leave-active {
  transition: all ease-out 0.075s;
}

.dropdown-enter, .dropdown-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

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
  border-right: 1px solid white;
}

.sidepanel__content {
  padding-left: 24px;
  padding-right: 12px;
}

.sidepanel-logo {
  margin-top: 12px;
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
  margin-bottom: 24px;
}

.sidepanel__item--active {
  color: #FFFFFF;
}

.sidepanel-close {
  display: flex;
}

.sidepanel-title {
  margin-right: 16px;
}
</style>
