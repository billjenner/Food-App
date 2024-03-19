

<template>
  <h1>food</h1>
  <div id="wrapper">
    <food-item
    v-for="x in foods"
      v-bind:food-name="x.name"
      v-bind:food-desc="x.desc"
      @toggle-favorite="receiveEmit"
    />
  </div>
  <button @click="removeItem">Remove Item</button>
</template>


<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

export default {
  data() {
    return {
      foods: [
          { name: 'Apples',
            desc: 'Apples are a type of fruit that grow on trees.',
            favorite: true },
          { name: 'Pizza',
            desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.',
            favorite: false },
          { name: 'Rice',
            desc: 'Rice is a type of grain that people like to eat.',
            favorite: false },
          { name: 'Fish',
            desc: 'Fish is an animal that lives in water.',
            favorite: true },
          { name: 'Cake',
            desc: 'Cake is something sweet that tastes good.',
            favorite: false }
        ]
    };
  },
  methods: {
    removeItem() {
      this.foods.splice(1,1);
    },
    receiveEmit(foodId) {
      alert('You clicked: '  + foodId );
    }
  }
};
</script>

<style>
  #wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  #wrapper > div {
    border: dashed black 1px;
    margin: 10px;
    padding: 0 20px;
    background-color: rgb(66, 132, 66);
    border-radius: 16px;
  }
  #app > div:hover {
    cursor: pointer;
  }
    button {
        background-color: blue; /* Green */
        color: white;
        padding: 8px 8px;
        margin: 8px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
    border-radius: 8px;
  }
</style>
