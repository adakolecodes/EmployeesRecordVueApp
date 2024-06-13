<script setup>
import { ref } from "vue"; // Import ref from Vue
import { useStore } from 'vuex'; // Import useStore from Vuex

const store = useStore(); // Create a store instance
const firstName = ref(''); // Create a ref for the first name
const lastName = ref(''); // Create a ref for the last name
const gender = ref(''); // Create a ref for gender
const age = ref(''); // Create a ref for age
const occupation = ref(''); // Create a ref for occupation
const income = ref(''); // Create a ref for income
const married = ref(''); // Create a ref for marital status
const message = ref(''); // Create a ref for success/error message

// The addEmployee method is called when the "Add Employee" button is clicked
const addEmployee = async () => {
    
    //Ensure all inputs are filled
    if (!firstName.value || !lastName.value || !gender.value || !age.value || !occupation.value || !income.value || !married.value) {
        message.value = 'Please fill in all fields.';
        return;
    }

    // Create a new employee object with the form data
    const employee = {
        firstName: firstName.value.trim(),
        lastName: lastName.value.trim(),
        gender: gender.value.trim(),
        age: parseInt(age.value),
        occupation: occupation.value.trim(),
        income: parseInt(income.value),
        married: married.value === 'true' ? true : false
    };

    // Dispatch the addEmployee action with the new employee data
    try{
        await store.dispatch('addEmployee', employee);
        message.value = 'Employee added successfully!';
    } catch (error) {
        message.value = `An error occurred. Please try again later. Error: ${error.message}`;
    }

    // Reset the form fields after adding the employee
    firstName.value = '';
    lastName.value = '';
    gender.value = '';
    age.value = '';
    occupation.value = '';
    income.value = '';
    married.value = '';
}
</script>

<template>
    <div class="container mt-5 mb-5">
        <h1>Add Employee</h1>

        <p>{{ message }}</p>

        <div class="mt-5">
            <div class="row mb-3">
                <div class="col-md-6">
                    <input type="text" class="form-control" v-model="firstName" placeholder="First Name" required>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-md-6">
                    <input type="text" class="form-control" v-model="lastName" placeholder="Last Name" required>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-md-6">
                    <select class="form-select" v-model="gender" required>
                        <option selected disabled value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-md-6">
                    <input type="number" class="form-control" v-model="age" placeholder="Age" required>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-md-6">
                    <input type="text" class="form-control" v-model="occupation" placeholder="Occupation" required>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-md-6">
                    <input type="number" class="form-control" v-model="income" placeholder="Income" required>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-md-6">
                    <select class="form-select" v-model="married" required>
                        <option selected disabled value="">Select marital status</option>
                        <option value="true">Married</option>
                        <option value="false">Single</option>
                    </select>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-md-6">
                    <button class="btn btn-dark" @click="addEmployee">Add Employee</button>
                </div>
            </div>
        </div>
    </div>
</template>