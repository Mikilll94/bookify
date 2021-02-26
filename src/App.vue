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
import AccommodationService from '@/services/AccommodationService';

export default Vue.extend({
  components: {
    NavBar,
    SidePanel,
    AccommodationCard,
  },
  data() {
    return {
      accommodations: null as Accommodation[] | null,
    };
  },
  async created() {
    this.accommodations = await AccommodationService.getAccommodations();
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
}

body {
  height: 100vh;
}

.main {
  padding: 4rem 2rem;
  margin: 0 auto;
  max-width: 1320px;

  @media (max-width: 709px) {
    & {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
  }

  @media (max-width: 349px) {
    & {
      padding: 1rem;
    }
  }
}

.card-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2rem;

  @media (max-width: 349px) {
    & {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
}
</style>
