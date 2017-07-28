<template >
  <div class="board">
    {{board()}}
    <div v-for="row in grid" class="row">
      <div v-for="(value, index) in row" class="tile">
          <tile :piece="piece"></tile>
      </div>
    </div>
  </div>
</template>

<script >
import Piece from '@/classes/piece';

export default {
  name: 'board',
  data() {
    return {
      grid: new Array(8).fill(new Array(8).fill(new Piece())),
    };
  },
  methods: {
    board() {
      console.log(this.grid);
    },
  },
};
</script>

<style scoped>
  .tile{
    width:70px;
    height:70px;
    margin: 1px;
    border: 1px solid transparent;
    background-color: #D8D8D8;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .board{
    /*background-color: magenta;*/
    display: block;
  }
  .row{
    /*border: 1px solid black;*/
    display: flex;
    justify-content: center;
  }
</style>