<template>
  <div>
    <center>
      <h1>User List</h1>
    </center>
    <div class="card" v-for="(user, index) in users" :key="index">
      <div class="card-body">
        <h5 class="card-title">{{ user.name }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ user.email }}</h6>
        <p class="card-text">{{ user.company.catchPhrase }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: []
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      const { data } = await axios.get(
        "http://jsonplaceholder.typicode.com/users"
      );

      this.users = data;
    }
  }
};
</script>
