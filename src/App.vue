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
        <img
          class="nav-photo"
          :src="require('@/assets/account_circle.svg')"
        >
      </div>
    </nav>
  </div>
</template>

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

.nav-photo:hover {
  cursor: pointer;
}
</style>
