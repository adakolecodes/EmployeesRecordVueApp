<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
          <a class="navbar-brand" href="#">Employees App</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <RouterLink to="/" class="nav-link">Home</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink to="/employees" class="nav-link">Employees</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink to="/employees/add" class="nav-link">Add Employee</RouterLink>
                </li>
            </ul>
          </div>
      </div>
  </nav>
  <RouterView />
</template>