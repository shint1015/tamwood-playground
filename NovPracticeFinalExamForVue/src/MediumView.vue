<template>
    <h2>Medium:<br />Factor Explorer</h2>
    <input v-model="inputValue" @input="inputHandler($event.target.value)" type="number"></input>
    <p>All factors: {{ numberProperties.allFactors.join(', ') }}</p>
    <p>Count of factors: {{ numberProperties.allFactors.length }}</p>
    <p>Is Perfect Number: {{ numberProperties.isPerfect ? "true" : "false" }}</p>
    <p>Is Square Number: {{ numberProperties.isSquare ? "true" : "false" }}</p>
</template>


<script>
export default {
    name: 'MediumView',
    data() {
        return {
            inputValue: null,
            numberProperties: {
                allFactors: [],
                isPerfect: false,
                isSquare: false,
            },
        };
    },
    methods: {
        inputHandler(text) {
            this.numberProperties = {
                allFactors: [],
                isPerfect: false,
                isSquare: false,
            };
            const num = parseInt(text);
            if (isNaN(num)) {
                return;
            }
            this.numberProperties.allFactors = this.getAllFactors(num);
            this.numberProperties.isPerfect = this.isPerfectNumber(num);
            this.numberProperties.isSquare = this.isSquareNumber(num);
            this.$store.commit('setFactorCount', this.numberProperties.allFactors.length);
        },
        getAllFactors(num) {
            const factors = [];
            for (let i = 1; i <= num; i++) {
                if (num % i === 0) {
                    factors.push(i);
                }
            }
            return factors;
        },
        isPerfectNumber(num) {
            if (num <= 1) return false;
            let sum = 0;
            for (let i = 1; i <= num / 2; i++) {
                if (num % i === 0) {
                    sum += i;
                }
            }
            return sum === num;
        },
        isSquareNumber(num) {
            if (num < 0) return false;
            const sqrt = Math.sqrt(num);
            return sqrt * sqrt === num;
        },
    },
};
</script>
