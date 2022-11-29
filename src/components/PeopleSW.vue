<template>
  <div class="container">
    <h1>Star Wars People</h1>
    <div class="row">
      <div class="col">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Eye color</th>
              <th scope="col">Hair Color</th>
              <th scope="col">Skin Color</th>
              <th scope="col">Mass</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="people in listPeopleSW" :key="people.name">
              <th scope="row">{{ people.name  }}</th>
              <td>{{  people.eye_color  }}</td>
              <td>{{  people.hair_color  }}</td>
              <td>{{  people.skin_color  }}</td>
              <td>{{  people.mass  }}</td>
            </tr>
          </tbody>
        </table>
        <p>Pagina: {{  page  }}</p>
        <button class="btn btn-success m-1" @click="anterior()"
        v-if="isPrevious">Anterior</button>
        <button class="btn btn-success" @click="siguiente()"
        v-if="isNext">Siguiente</button>
      </div>
    </div>

  </div>
</template>
  
<script>
import { getPeopleSW } from '@/controller/SwapiController.js';
export default {
  name: 'PeopleSW',
  data() {
    return {
      listPeopleSW: null,
      page: 1,
      isNext: null,
      isPrevious: null
    }
  },
  props: {
  },
  methods: {
    async getData() {
      const data = await getPeopleSW(this.page);
      this.isNext = data.next;
      this.isPrevious = data.previous;
      this.listPeopleSW = data.results;
    },
    siguiente() {
      this.getData(this.page++)
    },
    anterior() {
      this.getData(this.page--)
    }
  },
  mounted: function () {
    this.getData()
  }
}
</script>