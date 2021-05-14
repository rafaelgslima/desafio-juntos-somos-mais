<template>
  <div class="detail">
    <div class="container">
      <p 
        v-if="typeof userDetail === 'string'" 
        class="error"
      >
        {{ userDetail }}
      </p>
      <div 
        v-else 
        class="content"
      >
        <img
          :src="userDetail.picture.large"
          :alt="`Foto do usuário ${userDetail.name.first}`"
          class="photo"
        >
        <p class="name">
          {{ userDetail.name.first }} {{ userDetail.name.last }}
        </p>
        <p class="street">
          {{ userDetail.location.street }}
        </p>
        <p class="city">
          {{ userDetail.location.city }} - {{ userDetail.location.state }}
        </p>
        <p class="state">
          CEP: {{ userDetail.location.postcode }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserDetail",
  props: {
    userDetail: {
      type: [Object, String],
      required: true,
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 20px 100px 20px;
  align-items: center;
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
  margin-top: 80px;
}

@media (min-width: 1156px) {
  .container {
    width: var(--container);
    margin: 0 auto 100px;
  }
}
</style>