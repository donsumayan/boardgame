<template>
  <icon :name="piece.type" scale="3"></icon>
</template>

<script >
export default {
  name: 'tile',
  props: ['piece'],
  data() {
    return {

    };
  },
  methods: {
    sendCoordinates() {
      this.$emit('sendCoordinates', { x: this.x, y: this.y });
    },
  },
  computed: {
    x() {
      return Math.floor(this.index / 8);
    },
    y() {
      return this.index % 8;
    },
    alt_tile() {
      const x = this.x % 2 === 0;
      const y = this.y % 2 === 0;

      return (x && y) || (!x && !y);
    },
    piece() {
      return this.x === 3 || this.x === 4 ? false : this.alt_tile;
    },
  },
};
</script>

<style scoped>
  .clearLeft{
    /*clear:right;*/
  }
  .container{
    /*
    display: flex;
    justify-content: center;
    align-items: center;*/
  }
  .clicked{
    border: 2px solid blue;
  }

</style>