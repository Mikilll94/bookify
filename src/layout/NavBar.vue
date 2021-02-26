<template>
  <nav class="nav">
    <div class="nav-primary">
      <div
        class="nav-hamburger"
        @click="openSidepanel"
      >
        <img :src="require('@/assets/menu.svg')">
      </div>
      <div class="nav-logo">
        BOOKIFY
      </div>
      <div class="nav-primary__list">
        <div class="nav-primary__item nav-primary__item--active">
          Pobyty
        </div>
        <div class="nav-primary__item">
          Loty
        </div>
        <div class="nav-primary__item">
          Wynajem samochodów
        </div>
        <div class="nav-primary__item">
          Atrakcje
        </div>
        <div class="nav-primary__item">
          Taksówki lotniskowe
        </div>
      </div>
    </div>
    <div class="nav-secondary">
      <div class="nav-bell">
        <img :src="require('@/assets/notifications.svg')">
      </div>
      <div class="nav-user-wrapper">
        <div
          @click="userDropdownOpen = true"
          ref="navUser"
          class="nav-user"
        >
          <img
            :src="require('@/assets/account_circle.svg')"
            class="nav-user__avatar"
          >
          <div class="nav-user__username">
            Mikołaj
          </div>
        </div>
        <transition name="dropdown">
          <div
            v-show="userDropdownOpen"
            class="nav-user-dropdown"
            ref="navUserDropdown"
          >
            <div class="nav-user-dropdown__item">
              Twój profil
            </div>
            <div class="nav-user-dropdown__item">
              Ustawienia
            </div>
            <div class="nav-user-dropdown__item">
              Wyloguj się
            </div>
          </div>
        </transition>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      userDropdownOpen: false,
    };
  },
  mounted() {
    document.body.addEventListener('click', (e: Event) => {
      const navUserRef = this.$refs.navUser as HTMLElement;
      const navUserDropdownRef = this.$refs.navUserDropdown as HTMLElement;

      if (e.target !== navUserRef && e.target !== navUserDropdownRef
        && !navUserRef.contains(e.target as Node | null)
        && !navUserDropdownRef.contains(e.target as Node | null)) {
        this.userDropdownOpen = false;
      }
    });
  },
  methods: {
    openSidepanel() {
      this.$store.commit('OPEN_SIDEPANEL');
    },
  },
});
</script>

<style lang="scss" scoped>
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

.nav-primary {
  display: flex;
  align-items: center;
}

.nav-hamburger {
  display: flex;
  padding-right: 4px;
}

@media (min-width: 1250px) {
  .nav-hamburger {
    display: none;
  }
}

.nav-logo {
  margin-right: 48px;
  font-size: 36px;
  font-family: 'Courier New', Courier, monospace;
}

.nav-primary__list {
  display: flex;
}

@media (max-width: 1250px) {
  .nav-primary__list {
    display: none;
  }
}

.nav-primary__item {
  margin-right: 24px;
  color: #BEC3CB;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
}

.nav-primary__item:hover {
  background-color: rgba(55, 65, 81);
  cursor: pointer;
}

.nav-primary__item--active {
  color: #FFFFFF;
}

.nav-secondary {
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

.nav-user-wrapper {
  position: relative;
}

.nav-user {
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
}

.nav-user:hover {
  background-color: rgba(55, 65, 81);
  cursor: pointer;
}

.nav-user__avatar {
  margin-right: 4px;
}

.nav-user__username {
  font-size: 22px;
}

@media (max-width: 768px) {
  .nav-user__username {
    display: none;
  }
}

.nav-user-dropdown {
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

.nav-user-dropdown__item {
  padding: 1rem 1rem;
  font-size: 0.875rem;
}

.nav-user-dropdown__item:hover {
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

</style>
