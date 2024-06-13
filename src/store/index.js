import { createStore } from "vuex"; // Importing createStore function from Vuex to create a new store
import axios from "axios"; // Importing axios for making HTTP requests


export default createStore({// Creating a new store and exporting it so that it can be used in other parts of the app
    
    state: {// This is where we define the data that our app will use

        employees: [], // We're defining an empty array called employees
        selectedEmployee: [], // We're defining a variable called selectedEmployee and setting it to an empty array
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

        // We're defining a function called SET_SELECTED_EMPLOYEE that will set the selectedEmployee data in the state
        SET_SELECTED_EMPLOYEE(state, employee) { //SET_SELECTED_EMPLOYEE is a mutation function that takes the state and employee as arguments and sets the selectedEmployee variable in the state to the employee argument
            state.selectedEmployee = employee; //We're setting the selectedEmployee variable in the state to the employee argument
        },

        // We're defining a function called SET_ADDED_EMPLOYEE that will add the new employee to the employees array in the state
        SET_ADDED_EMPLOYEE(state, employee) { //SET_ADDED_EMPLOYEE is a mutation function that takes the state and employee as arguments and adds the new employee to the employees array in the state
            state.employees.push(employee); //We're adding the new employee to the employees array in the state
        },
    },

    actions: {// This is where we define functions that will make HTTP requests to fetch data from an API
        
        // We're defining a function called fetchEmployees that will make an HTTP request to fetch employees data
        async fetchEmployees({ commit }) {
            const response = await axios.get("http://localhost/PhpTutorials/EmployeesRecord/api/employees.php"); //We're making an HTTP GET request to the given URL and storing the response in a variable called response
            commit("SET_EMPLOYEES", response.data); //After fetching the data, we call the SET_EMPLOYEES mutation function to set the employees data in the state
        },

        // We're defining a function called fetchEmployeeById that will make an HTTP request to fetch a single employee data
        async fetchEmployeeById({ commit }, id) {
            const response = await axios.get(`http://localhost/PhpTutorials/EmployeesRecord/api/employees.php?id=${id}`); //We're making an HTTP GET request to the given URL and storing the response in a variable called response
            commit("SET_SELECTED_EMPLOYEE", response.data); //After fetching the data, we call the SET_SELECTED_EMPLOYEE mutation function to set the selectedEmployee data in the state
        },

        // We're defining a function called addEmployee that will make an HTTP request to add a new employee
        async addEmployee({ commit }, employee) {
            try {
              const response = await axios.post('http://localhost/PhpTutorials/EmployeesRecord/api/add-employees.php', employee);//We're making an HTTP POST request to the given URL and storing the response in a variable called response
              commit('SET_ADDED_EMPLOYEE', response.data); //After adding the employee, we call the SET_ADDED_EMPLOYEE mutation function to add the new employee to the state
            } catch (error) {
              throw error;
            }
        },
    },
});