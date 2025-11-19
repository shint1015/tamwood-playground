<template>
    <div>
        <h2>Easy: <br />Character Frequency Counter</h2>
        <textarea
            v-model="inputText"
            @input="analyserFrequency($event.target.value)"
            placeholder="Enter text here"
            rows="10"
            cols="50"
        ></textarea>
        <h3>Character Frequencies:</h3>
        <p>Most Frequent Character: {{ frequencyCounterObj.mostFrequent }}</p>
        <p>Least Frequent Character: {{ frequencyCounterObj.leastFrequent }}</p>
        <p>Total Unique Characters: {{ frequencyCounterObj.uniqueCharTotal }}</p>
        <table style="margin: auto">
            <tr>
                <th colspan="2">Characters with Frequency of 1</th>
            </tr>
            <tr v-for="char in frequencyCounterObj.smallFrequencyChars" :key="char">
                <th>{{ char }}</th>
                <td>{{ frequencyCounterObj.frequency[char] }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputText: '',
            frequencyCounterObj: {
                frequency: {},
                mostFrequent: '',
                leastFrequent: '',
                uniqueCharTotal: 0,
                smallFrequencyChars: [],
            },
        };
    },
    methods: {
        analyserFrequency(text) {
            const frequencies = {};
            for (const char of text) {
                frequencies[char] = (frequencies[char] || 0) + 1;
            }
            this.frequencyCounterObj.frequency = frequencies;
            // if chars are same frequency, pick first in alphabetical order
            this.frequencyCounterObj.mostFrequent = Object.keys(frequencies).reduce(
                (a, b) => (frequencies[a] > frequencies[b] ? a : b),
                ''
            );
            // if chars are same frequency, pick first in alphabetical order
            this.frequencyCounterObj.leastFrequent = Object.keys(frequencies).reduce(
                (a, b) => (frequencies[a] < frequencies[b] ? a : b),
                ''
            );
            // count unique characters
            this.frequencyCounterObj.uniqueCharTotal = Object.keys(frequencies).length;

            // characters with frequency of 1
            this.frequencyCounterObj.smallFrequencyChars = Object.keys(frequencies).filter(
                char => frequencies[char] === 1
            );
        },
    },
};
</script>
