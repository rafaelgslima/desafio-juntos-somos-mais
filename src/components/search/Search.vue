<template>
  <form class="search">
    <input
      v-model="modelItemSearch"
      type="search"
      placeholder="Buscar aqui"
      class="input"
      @keydown.enter="$emit('set-search', modelItemSearch)"
    >
    <button
      class="button"
      @click.prevent="$emit('set-search', modelItemSearch)"
    >
      <img
        src="@/assets/icons/icon-search.svg"
        class="icon"
        alt="Ícone de busca"
      >
    </button>
  </form>
</template>

<script>
export default {
  name: "Search",
  props:{
    itemSearch:{
      type: String,
      default: '',
    }
  },
  data(){
    return{
      modelItemSearch: this.itemSearch
    }
  },
};
</script>

<style scoped>
.search{
  position: relative;
}
.input{
  width: 260px;
  height: 40px;
  background: var(--white);
  border-radius: 20px;
  padding: 0 20px 0 40px;
  border: 1px solid var(--gray-medium);
  color: var(--gray-strong);
  appearance:none;
}

.button{
  height: 100%;
  position: absolute;
  left: 0;
  border-radius: 0 20px 20px 0;
  border: none;
  background: transparent;
  margin-left: 15px;
  padding: 0;
}


@media (min-width: 1156px) {
  .input{
    width: 464px;
    height: 48px;
  }
}
</style>