<template>
    <div v-on:click="countClicks">
        <h2>
            {{ foodName }}
            <img src="@/assets/logo.png"  v-show="foodIsFavorite">
        </h2>
        <p>{{ foodDesc }}</p>
        <button v-on:click="toggleFavorite">Favorite</button>
    </div>
</template>

<script>
export default {
    props: [
        'foodName',
        'foodDesc',
        'isFavorite'
    ],
    data() {
        return {
            foodIsFavorite: this.isFavorite
        }
    },
    methods: {
        toggleFavorite() {
            this.foodIsFavorite = !this.foodIsFavorite;
            this.$emit('toggle-Favorite', this.foodName);
        }
    }
};
</script>


<style>
    #red {
        font-weight: bold;
        color: rgb(144, 12, 12);
    }
    img {
        height: 1.0em;
        float: right;
    }

</style>    