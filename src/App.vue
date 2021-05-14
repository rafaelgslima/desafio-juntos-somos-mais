<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style>
:root {
    /* Colors */
    --white: #ffffff;
    --gray: #f5f5f5;
    --gray-medium: #b0b0b0;
    --gray-strong: #3A3A3A;

    /* Dimension */
    --container: 1136px;
}

#app {
  font-family: "Roboto", sans-serif;
}
body, html{
  margin: 0;
  padding: 0;
}
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
p{
  margin: 0
}

/* Pagination */
.pagination li.active a{
  background-color: var(--gray-strong);
  color: var(--white);
}

.pagination li a{
  border: 1px solid var(--gray-medium);
  margin-right: 3px;
}

.pagination li a:hover{
  background-color: var(--gray-strong);
  color: var(--white);
}
</style>
