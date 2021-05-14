<template>
  <div class="checkbox">
    <p class="title">
      {{ text }}
    </p>
    <ul class="container">
      <li 
        v-for="(item, index) in mainItensCheckbox" 
        :key="index" 
        class="item"
      >
        <input
          v-model="checkedNames"
          type="checkbox"
          :value="item"
          class="input"
          @change="$emit('change-checkbox', checkedNames)"
        >
        <label 
          :for="item" 
          class="label"
        >
          {{ item }} 
        </label>
      </li>
    </ul>
    <button 
      v-if="!seeAllClicked" 
      class="btn" 
      @click="seeAllClicked = true"
    >
      Ver todos
    </button>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    checkbox: {
      type: Array,
      default: () => [],
    },
    text: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      checkedNames: [],
      seeAllClicked: false,
    };
  },
  computed: {
    mainItensCheckbox() {
      return this.seeAllClicked ? this.checkbox : this.checkbox.slice(0, 5);
    },
  },
};
</script>

<style scoped>
.checkbox {
  margin-bottom: 40px;
}
.container {
  display: flex;
  flex-flow: wrap;
}
.item {
  font-size: 0.8rem;
  text-transform: capitalize;
  margin: 0 10px 10px 0;
}

.title {
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.input {
  height: 16px;
  width: 16px;
  margin-right: 5px;
  cursor: pointer;
}

.label {
  vertical-align: top;
  line-height: 23px;
}

.btn {
  font-size: 0.9rem;
  color: var(--gray-strong);
  background-color: transparent;
  border: none;
  margin-top: 10px;
  cursor: pointer;
}
.btn:hover {
  text-decoration: underline;
}

@media (min-width: 1156px) {
  .checkbox {
    border: 1px solid var(--gray-medium);
    margin-top: 35px;
    padding: 20px 20px 80px 20px;
  }
  .container {
    flex-direction: column;
  }
  .title {
    font-size: 1rem;
  }
}
</style>