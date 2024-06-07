import { createStore } from "vuex"; // Importing createStore function from Vuex to create a new store
import axios from "axios"; // Importing axios for making HTTP requests


export default createStore({// Creating a new store and exporting it so that it can be used in other parts of the app
    
    state: {// This is where we define the data that our app will use

        employees: [], // We're defining an empty array called employees
    },

    getters: {// This is where we define functions that will return data from our app
        
        // We're defining a function that would get us the total number of employees
        totalEmployees(state) {
            return state.employees.length; //totalEmployees is a getter function that takes the state as an argument and returns the length of the employees array
        },
    },

    mutations: {// This is where we define functions that will change/update the data in our state
        
        // We're defining a function called SET_EMPLOYEES that will set the employees data in the state
        SET_EMPLOYEES(state, employees) { //SET_EMPLOYEES is a mutation function that takes the state and employees as arguments and sets the employees array in the state to the employees argument
            state.employees = employees; //We're setting the employees array in the state to the employees argument
        },
    },

    actions: {// This is where we define functions that will make HTTP requests to fetch data from an API
        
        // We're defining a function called fetchEmployees that will make an HTTP request to fetch employees data
        async fetchEmployees({ commit }) {
            const response = await axios.get("http://localhost/PhpTutorials/EmployeesRecord/api/employees.php"); //We're making an HTTP GET request to the given URL and storing the response in a variable called response
            commit("SET_EMPLOYEES", response.data); //After fetching the data, we call the SET_EMPLOYEES mutation function to set the employees data in the state
        },
    },
});