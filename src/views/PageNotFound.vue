<template>
  <div class="page-not-found">
    <Menu :show-search="false" />
    <div class="container">
      <p class="error">
        404
      </p>
      <p class="title">
        Ooops!!!
      </p>
      <p class="subtitle">
        Página não encontrada
      </p>

      <router-link 
        :to="{ name: 'User' }" 
        class="link"
        title="Ir para home"
      >
        <img
          src="@/assets/icons/icon-arrow-back.svg"
          class="icon"
          alt="Ícone de voltar"
        >
        Ir para home
      </router-link>
    </div>
    <Footer />
  </div>
</template>

<script>
import Menu from "@/components/structure/Menu.vue";
import Footer from "@/components/structure/Footer.vue";
export default {
  name: "PageNotFound",
  components: {
    Menu,
    Footer,
  },
};
</script>

<style scoped>
.page-not-found {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
}
.container {
  text-align: center;
}

.error {
  font-size: 7rem;
  font-weight: 100;
  margin-bottom: 50px;
}

.title {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 5px;
}

.subtitle {
  font-size: 1rem;
  margin-bottom: 50px;
}

.link {
  color: var(--gray-strong);
  text-decoration: none;
  display: block;
  margin-bottom: 30px;
}

.link:hover .icon {
  transform: translateX(-2px);
}

.icon {
  height: 15px;
  transition-duration: 0.3s;
}
</style>