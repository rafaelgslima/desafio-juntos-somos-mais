<template>
  <footer class="footer">
    <div class="container">
      <img
        src="@/assets/logos/logo-light.svg"
        class="logo"
        alt="Logo da Juntos Somos Mais na versão branca"
      >

      <p class="title">
        Juntos Somos Mais Fidelização S.A.
      </p>

      <p class="subtitle">
        Siga-nos nas redes sociais:
      </p>

      <div class="social">
        <a
          href="#"
          target="_blank"
          title="Ir para o Facebook"
          class="link"
        >
          <img
            src="@/assets/icons/icon-facebook.svg"
            alt="Ícone do Facebook"
            class="icon"
          >
        </a>
        <a
          href="#"
          target="_blank"
          title="Ir para o Linkedin"
          class="link"
        >
          <img
            src="@/assets/icons/icon-linkedin.svg"
            alt="Ícone do Linkedin"
            class="icon"
          >
        </a>
        <a
          href="#"
          target="_blank"
          title="Ir para o Whatsapp"
          class="link"
        >
          <img
            src="@/assets/icons/icon-whatsapp.svg"
            alt="Ícone do WhatsApp"
            class="icon"
          >
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer{
    height: 296px;
    background-color: var(--gray-strong);
    margin-top: auto;
    color: var(--white);
}

.container{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin: 0 20px;
}

.logo{
    height: 48px;
    margin-bottom: 25px;
}

.title{
    font-weight: 500;
    margin-bottom: 25px;
}

.subtitle{
    font-size: 0.8rem;
    font-weight: 400;
    margin-bottom: 20px;
}

.social{
    display: flex;
}

.link{
    width: 40px;
    height: 40px;
    display: flex;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    margin: 0 8px;
    background-color: #28B0FC;
}

.icon{
    width: 20px
}
</style>