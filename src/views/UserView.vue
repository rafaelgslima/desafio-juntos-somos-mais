<template>
  <div class="user">
    <Menu
      :show-search="true"
      :item-search="itemSearch"
      @set-search="modelItemSearch"
    />

    <main class="container">
      <aside class="aside">
        <Checkbox
          :checkbox="states"
          :text="'Por Estado:'"
          @change-checkbox="changeCheckbox"
        />
      </aside>
      <article class="article">
        <section class="dropdown">
          <Dropdown
            :options="options"
            :text="'Ordear Por:'"
            @on-change="changeDropdown"
          />
        </section>
        <section class="userview">
          <User :all-users="allUsers" />
        </section>
      </article>
    </main>

    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import Menu from "@/components/structure/Menu.vue";
import Footer from "@/components/structure/Footer.vue";
import Dropdown from "@/components/elements/Dropdown.vue";
import Checkbox from "@/components/elements/Checkbox.vue";
import User from "@/components/user/User.vue";

export default {
  name: "UserView",
  components: {
    User,
    Menu,
    Dropdown,
    Checkbox,
    Footer,
  },
  data() {
    return {
      itemSearch: "",
      options: [
        {
          name: "Nome",
          option: "first",
        },
        {
          name: "Sobrenome",
          option: "last",
        },
      ],
    };
  },
  computed: {
    ...mapState(["states"]),
    ...mapGetters({
      allUsers: "getAllUsers",
    }),
    routeSearch() {
      return this.$route.query?.search ?? "";
    },
  },
  beforeMount() {
    this.fetchAllUsers();
  },
  created() {
    this.itemSearch = this.routeSearch;
    this.setSearchQuery(this.itemSearch);
  },
  methods: {
    ...mapActions(["fetchAllUsers"]),
    ...mapMutations(["setSearchQuery", "setOrderBy", "setSelectedStates"]),
    ...mapGetters(["getUserOrder"]),

    modelItemSearch(value) {
      this.setSearchQuery(value);
      if (value === this.routeSearch) return;
      const query = value === "" ? value : { search: value };
      this.$router.push({ query });
    },

    changeDropdown(event) {
      this.setOrderBy(event.target.value);
    },

    changeCheckbox(model) {
      this.setSelectedStates(model);
    },
  },
};
</script>
<style scoped>
.user {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
}
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  margin: 0 20px 100px 20px;
}

.aside,
.article {
  width: 100%;
}

.dropdown {
  text-align: right;
  margin-bottom: 20px;
}

@media (min-width: 1156px) {
  .container {
    width: var(--container);
    flex-direction: row;
    margin: 0 auto 100px;
  }
  .aside {
    width: 270px;
    margin-right: 20px;
  }
}
</style>