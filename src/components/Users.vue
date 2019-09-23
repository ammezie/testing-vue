<template>
  <div>
    <h1>User List</h1>

    <div v-for="(user, index) in users" :key="index">
      <div>
        <h5>{{ user.name }}</h5>
        <h6>{{ user.email }}</h6>
        <p>{{ user.company.catchPhrase }}</p>
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
