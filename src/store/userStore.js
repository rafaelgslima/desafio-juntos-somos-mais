import Vue from 'vue'
import Vuex from 'vuex'
import stringHash from "string-hash";

const removeDuplicatedStates = states => [...new Set(states)];
const generateUserId = user => ({ ...user, id: stringHash(user.email) });
const ERROR_MESSAGE = 'Usuário não encontrado. =/';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allUsers: [],
    searchQuery: "",
    orderBy: "",
    selectedUserId: "",
    states: [],
    selectedStates: []
  },
  getters:{
    getAllUsers({ allUsers, searchQuery, orderBy, selectedStates }){
      let users = allUsers;
      if (searchQuery !== "") {
        users = users.filter(({ name }) => `${name.first} ${name.last}`.includes(searchQuery));
      }
      if (selectedStates.length) {
        users = users.filter(({ location }) => selectedStates.includes(location.state));
      }
      if (orderBy !== "") {
        users = users.sort((a, b) => a.name[orderBy].localeCompare(b.name[orderBy]));
      }
      return users;
    },
    getUserDetail({ allUsers, selectedUserId }) {
      return allUsers.find(user => user.id === Number(selectedUserId)) ?? ERROR_MESSAGE;    
    },
  },
  mutations: {
    setAllUsers(state, payload) {
      state.allUsers = payload;
    },
    setSearchQuery(state, payload) {
      state.searchQuery = payload;
    },
    setOrderBy(state, payload) {
      state.orderBy = payload;
    },
    setStates(state, payload) {
      state.states = payload;
    },
    setSelectedStates(state, payload ){
      state.selectedStates = payload;
    },
    setSelectedUserId(state, payload ){
      state.selectedUserId = payload;
    }
  },
  actions: {
    async fetchAllUsers({ commit }) {
      const response = await fetch('https://gist.githubusercontent.com/rafaelgslima/3cf62765bbdfbe1f28c38151f4509bc2/raw/0e338d8475665c3bc5a8d79649be051169c85ebd/users.json');
      let allUsers = await response.json();
      allUsers = allUsers.results.map(generateUserId);
      const allStatesFromUsers = allUsers.map(user => user.location.state);
      const uniqueStates = removeDuplicatedStates(allStatesFromUsers);
      const states = uniqueStates.sort((a, b) => a.localeCompare(b))
      commit("setAllUsers", allUsers);
      commit("setStates", states);
    }
  },
})
