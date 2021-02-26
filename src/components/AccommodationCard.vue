<template>
  <article
    class="card-list__item card-item"
  >
    <div class="card-item__image">
      <img
        class="card-image"
        :src="require(`@/assets/accommodations/${accommodation.image}`)"
      >
    </div>
    <header class="card-item__header">
      {{ accommodation.name }}
    </header>
    <footer class="card-item__footer">
      {{ accommodation.description }}
    </footer>
  </article>
</template>

<script lang="ts">
import { Accommodation } from '@/models/Accommodation';

import Vue, { PropType } from 'vue';

export default Vue.extend({
  props: {
    accommodation: {
      type: Object as PropType<Accommodation>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
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
