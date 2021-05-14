<template>
  <div class="userview">
    <ul 
      v-if="allUsers.length" 
      class="container"
    >
      <li 
        v-for="(user, index) in pageOfItems" 
        :key="index" 
        class="user"
      >
        <router-link
          :to="{ name: 'UserDetail', params: { id: user.id } }"
          class="link"
          title="Ir para página de detalhe do usuário"
        >
          <img
            :src="user.picture.large"
            :alt="`Foto do usuário ${user.name.first}`"
            class="photo"
          >
          <p class="name">
            {{ user.name.first }} {{ user.name.last }}
          </p>
          <p class="street">
            {{ user.location.street }}
          </p>
          <p class="city">
            {{ user.location.city }} - {{ user.location.state }}
          </p>
          <p class="state">
            CEP: {{ user.location.postcode }}
          </p>
        </router-link>
      </li>
    </ul>
    <p 
      v-else 
      class="error"
    >
      Usuário não encontrado
    </p>
    

    <div class="container-pagination">
      <jw-pagination
        :items="allUsers"
        :page-size="9"
        :max-pages="3"
        :labels="{ first: '<<', last: '>>', previous: '<', next: '>' }"
        @changePage="onChangePage($event)"
      />
    </div>
  </div>
</template>

<script>
import JwPagination from "jw-vue-pagination";

export default {
  name: "User",
  components: {
    JwPagination,
  },
  props: {
    allUsers: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      pageOfItems: [],
    };
  },
  methods: {
    onChangePage(pageOfItems) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      this.pageOfItems = pageOfItems;
    },
  },
};
</script>


<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}
.user {
  border: 1px solid var(--gray);
  width: 275px;
  margin-bottom: 25px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 1px -2px 11px -1px rgb(108 108 108 / 50%);
  transition: all 0.3s ease-in-out;
}
.user:hover {
  transform: scale(1.1);
}
.link {
  height: 100%;
  display: block;
  text-decoration: none;
  padding: 35px 15px;
}
.photo {
  border-radius: 50%;
}

.name {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--gray-strong);
  text-transform: capitalize;
  margin: 10px 0 20px 0;
}

.street {
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--gray-strong);
  text-transform: capitalize;
  margin-bottom: 10px;
}

.city,
.state {
  font-size: 0.8rem;
  font-weight: 400;
  color: var(--gray-strong);
  text-transform: capitalize;
  margin-bottom: 5px;
}

.error {
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  margin-top: 80px;
}

.container-pagination{
  text-align: center;
}

@media (min-width: 768px) {
  .container {
    flex-direction: row;
    justify-content: space-evenly;
  }
}

@media (min-width: 1156px) {
  .container {
    justify-content: space-between;
  }
}
</style>
