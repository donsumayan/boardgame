<template>
  <div class="game">
    <h1>DAMA</h1>
    <div class="board">
        <div v-for="row in tileArray">
            <div class="tile" v-for="tile in row">
                <icon name="circle" scale="2"/>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'board',
      data() {
        return {
          tileArray: [
            Array(9).fill(0),
            Array(9).fill(0),
            Array(9).fill(0),
            Array(9).fill(0),
            Array(9).fill(0),
            Array(9).fill(0),
            Array(9).fill(0),
            Array(9).fill(0),
          ],
        };
      },
      computed: {
        generateBoard() {
          return 'test';
        },
      },
    };
</script>

<style scoped>
    .board{
        display:flex;
        justify-content: center
    }
    .tile{
        height: 50px;
        width: 60px;
        border-radius: 2px;
        background-color: #D8D8D8;
        display: flex;
        justify-content: center;
        margin:1px;
        /*padding: 10px 15px;*/

    }
    .row{
    }
</style>
