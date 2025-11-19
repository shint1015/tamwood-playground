<template>
    <h2>Hard:<br />Number Set Validator</h2>
    <input
        type="text"
        @input="inputHandler($event.target.value)"
        placeholder="put three numbers separated by commas"
    />
    <p>Factor Count from Medium View: {{ $store.state.mediumGlobalState.factorCount }}</p>
    <p v-if="isChecked">
        The set is:
        <span v-if="checkArr.length === 0">Magic Set Found</span>
        <span v-else>
            a
            <span v-for="(type, index) in checkArr" :key="type">
                {{ type }}<span v-if="index < checkArr.length - 1">, </span>
            </span>
            triplet.
        </span>
    </p>
</template>

<script>
export default {
    name: 'HardView',
    data() {
        return {
            inputText: '',
            isChecked: false,
            checkArr: [],
        };
    },
    methods: {
        inputHandler(text) {
            this.checkArr = [];
            this.isChecked = false;
            const nums = text.split(',').map(num => parseFloat(num.trim()));
            if (nums.length !== 3 || nums.some(isNaN)) {
                return;
            }
            if (this.checkArithmeticTriplet(...nums)) {
                this.checkArr.push('arithmetic');
            }
            if (this.checkGeometricTriplet(...nums)) {
                this.checkArr.push('geometric');
            }
            if (this.checkPythagoreanTriplet(...nums)) {
                this.checkArr.push('pythagorean');
            }
            this.isChecked = true;
            // Display results (implementation not shown)
        },
        checkArithmeticTriplet(a, b, c) {
            return b - a === c - b;
        },
        checkGeometricTriplet(a, b, c) {
            return b / a === c / b;
        },
        checkPythagoreanTriplet(a, b, c) {
            return a * a + b * b === c * c;
        },
    },
};
</script>
