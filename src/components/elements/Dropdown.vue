<template>
  <div class="order">
    <label for="select"> {{ text }} </label>
    <select 
      id="select" 
      @change="$emit('on-change', $event)"
    >
      <option 
        selected 
        disabled
      >
        Escolha uma opção
      </option>
      <option 
        v-for="(opt, index) in options" 
        :key="index" 
        :value="opt.option"
      >
        {{ opt.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.order {
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 500;
}

#select {
  font-family: "Roboto", sans-serif;
  font-size: 0.7rem;
  font-weight: 400;
  border: none;
}

@media (min-width: 1156px) {
  .order {
    justify-content: flex-end;
  }
}
</style>