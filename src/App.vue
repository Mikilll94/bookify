<template>
  <div>
    <NavBar />
    <SidePanel />
    <main class="main">
      <div class="card-list">
        <AccommodationCard
          v-for="accomodation in accommodations"
          :accommodation="accomodation"
          :key="accomodation.id"
        />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from '@/layout/NavBar.vue';
import SidePanel from '@/layout/SidePanel.vue';
import AccommodationCard from '@/components/AccommodationCard.vue';
import { Accommodation } from '@/models/Accommodation';

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
    AccommodationCard,
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
</style>
