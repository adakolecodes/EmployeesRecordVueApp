<script setup>
import Header from '@/components/Header.vue'// Import the Header component
import { onMounted, computed } from 'vue'; // Import onMounted and computed from Vue
import { useStore } from 'vuex'; // Import useStore from Vuex

const store = useStore(); // Create a store instance

// The fetchEmployees action is dispatched to fetch the employees data from the API when the component is mounted
//The onMounted is a lifecycle hook that runs when the component is mounted. Here, it dispatches the fetchEmployees action to fetch the employees' data.
onMounted(async () => {
    await store.dispatch('fetchEmployees');
});

// Create a computed property to get the employees data from the store
// The computed function is used to create a reactive computed property that returns the employees data from the state in our store
const employees = computed(() => store.state.employees);

// Get the total number of employees from our totalEmployees function in our getters
// The totalEmployees getter is used to calculate the total number of employees in the employees data array
const totalEmployees = computed(() => store.getters.totalEmployees);

</script>

<template>
    <div class="container mt-5 mb-5">

        <Header title="Employees View" description="See list of employees data" />

        <div>
            <table class="table table-sm">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Occupation</th>
                        <th>Income</th>
                        <th>Married</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    <!--
                    Loop through the employees data and display the employee details in a table row

                    The v-for directive is used to loop through the employees data array
                    The :key directive is used to bind the employee id as the key for each table row so that Vue can track the elements and optimize rendering

                    The employee details are displayed in each table row using the mustache syntax {{ employee.property }}
                    The mustache syntax is Vue's way of interpolating data within the template. It allows you to embed expressions inside the HTML to dynamically render values.

                    The ternary operator is used to display 'Yes' if the value of employee.married is true (1) and 'No' if the value is false (0)
                    -->
                    <tr v-for="employee in employees" :key="employee.id">
                        <td>{{ employee.firstName }}</td>
                        <td>{{ employee.lastName }}</td>
                        <td>{{ employee.gender }}</td>
                        <td>{{ employee.age }}</td>
                        <td>{{ employee.occupation }}</td>
                        <td>{{ employee.income }}</td>
                        <td>{{ employee.married ? 'Yes' : 'No' }}</td>
                        <td><RouterLink :to="{ name: 'EmployeeDetailsView', params: { id: employee.id }}">View</RouterLink></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div>
            <p><strong>Total Employees:</strong> {{ totalEmployees }}</p>
        </div>
    </div>
</template>