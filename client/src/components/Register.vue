<template>
  <div class="col-md-12 col-sm-12 mainContainer">
    <div class="col-md-12">
      <h1>Registration</h1>
        <div class="form-container col-md-6 col-sm-12 centered">
          <div class="form-group">
            <label for="usr">E-mail:</label>
            <input v-model="email" type="text" name="email" placeholder="mymail@mail.com" class="form-control" id="usr">
          </div>
          <div class="form-group">
            <label for="pwd">Password:</label>
            <input v-model="password" type="password" name="password" placeholder="*****" class="form-control" id="pwd">
          </div>
          <button @click="register" type="button" class="btn btn-primary">Register</button>
        </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '../../services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      console.log('register()', this.email, this.password)
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<!-- SCOPED CSS -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
