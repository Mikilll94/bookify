<template>
  <div>
    <NavBar />
    <SidePanel />
    <main class="main">
      <div class="card-list">
        <article
          v-for="accomodation in accommodations"
          class="card-list__item card-item"
          :key="accomodation.id"
        >
          <div class="card-item__image">
            <img
              class="card-image"
              :src="require(`@/assets/accommodations/${accomodation.image}`)"
            >
          </div>
          <header class="card-item__header">
            {{ accomodation.name }}
          </header>
          <footer class="card-item__footer">
            {{ accomodation.description }}
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

interface Accommodation {
  id: number;
  name: string;
  image: string;
  description: string;
}

const ACCOMMODATIONS: Accommodation[] = [
  {
    id: 1,
    name: 'Górski Klimat',
    image: 'gorski-klimat.jpg',
    description: 'Witamy w miejscu z którego nie będziesz chciał wrócić! Apartamenty Górski Klimat to kameralny obiekt...',
  },
  {
    id: 2,
    name: 'Hotel *** BIATHLON Sport & SPA',
    image: 'hotel-biathlon-sport-spa.jpg',
    description: 'Hotel *** BIATHLON w Jakuszycach położony jest w malowniczej okolicy, w pobliżu szlaków pieszych i...',
  },
  {
    id: 3,
    name: 'KRISTINA SPA',
    image: 'kristina-spa.jpg',
    description: 'Jeżeli szukają Państwo miejsca, aby spokojnie wypocząć zapraszamy do naszej Willi, położonej w malowniczej...',
  },
  {
    id: 4,
    name: 'Pensjonat MAGDALENA',
    image: 'pensjonat-magdalena.jpg',
    description: 'Regulamin rezerwacji w Pensjonacie Magdalena 58-580 Szklarska Poręba ul. Oficerska 2 Pensjonat Magdalena...',
  },
  {
    id: 5,
    name: 'Pokoje gościnne EWA',
    image: 'pokoje-ewa.jpg',
    description: 'Mamy zaszczyt przywitać Państwa w Pokojach Gościnnych Ewa w Szklarskiej Porębie - jednym z najpiękniejszych...',
  },
];

export default Vue.extend({
  components: {
    NavBar,
    SidePanel,
  },
  data() {
    return {
      accommodations: ACCOMMODATIONS,
    };
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

.card-list__item:hover {
  cursor: pointer;
  transform: scale(1.01);
  filter: brightness(1.2);
}

.card-item__image {
  width: 100%;
}

@media (min-width: 1043px) {
  .card-image {
    height: 225px;
  }
}

@media (min-width: 711px) {
  .card-image {
    height: 300px;
  }
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
