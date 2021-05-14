<template>
  <div class="detailview">
    <Menu :show-search="false" />
    <div class="container">
      <router-link 
        :to="{ name: 'User' }" 
        class="link"
        title="Voltar para página de usuários"
      >
        <img
          src="@/assets/icons/icon-arrow-back.svg"
          class="icon"
          alt="Ícone de voltar"
        >
        voltar
      </router-link>
    </div>
    <UserDetail :user-detail="selectedUser" />
    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import UserDetail from "@/components/user/UserDetail.vue";
import Menu from "@/components/structure/Menu.vue";
import Footer from "@/components/structure/Footer.vue";

export default {
  name: "UserDetailView",
  components: {
    UserDetail,
    Menu,
    Footer,
  },
  computed: {
    ...mapGetters({
      selectedUser: "getUserDetail",
    }),
  },

  beforeMount() {
    this.setSelectedUserId(this.$route.params?.id ?? "");
    !this.getAllUsers().length ? this.fetchAllUsers() : "";
  },
  methods: {
    ...mapActions(["fetchAllUsers"]),
    ...mapMutations(["setSelectedUserId"]),
    ...mapGetters(["getAllUsers"]),
  },
};
</script>
<style scoped>
.detailview {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
}
.container {
  margin: 0 20px;
}

.link {
  color: var(--gray-strong);
  text-decoration: none;
}

.link:hover .icon {
  transform: translateX(-2px);
}

.icon {
  height: 15px;
  transition-duration: 0.3s;
}

@media (min-width: 1156px) {
  .container {
    width: var(--container);
    margin: 0 auto 10px;
  }
}
</style>
