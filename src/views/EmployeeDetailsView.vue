<script setup>
import { onMounted, computed } from 'vue'; // Import onMounted and computed from Vue
import { useStore } from 'vuex'; // Import useStore from Vuex
import { useRoute } from 'vue-router'; // Import useRoute from Vue Router

const store = useStore(); // Create a store instance
const route = useRoute(); // Create a route instance

// The fetchEmployeeById action is dispatched to fetch the single employee data from the API when the component is mounted
onMounted(async () => {
    await store.dispatch('fetchEmployeeById', route.params.id);
});

// Create a computed property to get the selected employee data from the store
const selectedEmployee = computed(() => store.state.selectedEmployee);
</script>

<template>
    <div class="container mt-5 mb-5">
        <h1>{{ selectedEmployee.firstName }} {{ selectedEmployee.lastName }}</h1>
        <p>Gender: {{ selectedEmployee.gender }}</p>
        <p>Age: {{ selectedEmployee.age }}</p>
        <p>Occupation: {{ selectedEmployee.occupation }}</p>
        <p>Income: ${{ selectedEmployee.income }}</p>
        <p>Marital Status: {{ selectedEmployee.married ? 'Married' : 'Single' }}</p>
    </div>
</template>