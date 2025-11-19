<template>
    <nav style="display: flex; gap: 20px; justify-content: center; margin-bottom: 20px">
        <RouterLink to="/easy">Go to Easy View</RouterLink>
        <RouterLink to="/medium">Go to Medium View</RouterLink>
        <RouterLink to="/hard">Go to Hard View</RouterLink>
    </nav>
    <main>
        <h1 style="font-size: 30px">Practice Test for Vue.js Final Exam</h1>
        <br />
        <RouterView />
    </main>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
