<template>
  <header class="menu">
    <div class="container">
      <router-link 
        :to="{ name: 'User' }" 
        class="link"
        title="Ir para home"
      >
        <img
          src="@/assets/logos/logo.svg"
          class="logo"
          alt="Logo da Juntos Somos Mais"
        >
      </router-link>
      <Search
        v-if="showSearch"
        :item-search="itemSearch"
        @set-search="modelItemSearch"
      />
    </div>
  </header>
</template>

<script>
import Search from "@/components/search/Search.vue";
export default {
  name: "Menu",
  components: { Search },
  props: {
    itemSearch: {
      type: String,
      default: "",
    },
    showSearch: {
      type: Boolean,
    },
  },
  methods: {
    modelItemSearch(item) {
      this.$emit("set-search", item);
    },
  },
};
</script>

<style scoped>
.menu {
  height: 120px;
  background-color: var(--gray);
  margin-bottom: 40px;
}

.logo {
  height: 30px;
  margin-bottom: 20px;
}

.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin: 0 20px;
}

@media (min-width: 1156px) {
  .menu {
    height: 96px;
  }
  .logo {
    height: 40px;
    margin: 0;
  }

  .container {
    width: var(--container);
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
  }
}
</style>