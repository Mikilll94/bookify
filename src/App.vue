<template>
  <div>
    <nav class="nav">
      <div class="nav__left">
        <div class="nav__logo">
          Logo
        </div>
        <div class="nav__items">
          <div class="nav__item nav__item--active">
            Dashboard
          </div>
          <div class="nav__item">
            Team
          </div>
          <div class="nav__item">
            Projects
          </div>
          <div class="nav__item">
            Calendar
          </div>
          <div class="nav__item">
            Reports
          </div>
        </div>
      </div>
      <div class="nav-rest">
        <div class="nav-bell">
          bell
        </div>
        <div class="nav-photo-wrapper">
          <div
            @click="photoDropdownOpen = true"
            ref="navPhoto"
            class="nav-photo"
          >
            <img
              :src="require('@/assets/account_circle.svg')"
            >
          </div>
          <transition name="dropdown">
            <div
              v-show="photoDropdownOpen"
              class="nav-photo-dropdown"
              ref="photoDropdown"
            >
              <div class="nav-photo-dropdown__item">
                Your profile
              </div>
              <div class="nav-photo-dropdown__item">
                Settings
              </div>
              <div class="nav-photo-dropdown__item">
                Sign out
              </div>
            </div>
          </transition>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      photoDropdownOpen: false,
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

.nav__left {
  display: flex;
  align-items: center;
}

.nav__logo {
  margin-right: 48px;
}

.nav__items {
  display: flex;
}

.nav__item {
  margin-right: 24px;
  color: #BEC3CB;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
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
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  margin-right: 24px;
}

.nav-photo-wrapper {
  position: relative;
}

.nav-photo {
  display: flex;
}

.nav-photo:hover {
  cursor: pointer;
}

.nav-photo-dropdown {
  position: absolute;
  color: black;
  margin-top: 0.5rem;
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

.dropdown-enter-active, .dropdown-leave-active {
  transition: all ease-out 0.075s;
}

.dropdown-enter, .dropdown-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
