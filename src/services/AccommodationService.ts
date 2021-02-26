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

export default {
  getAccommodations(): Promise<Accommodation[]> {
    return Promise.resolve(ACCOMMODATIONS);
  },
};
