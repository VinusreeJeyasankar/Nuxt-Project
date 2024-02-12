<template>
  <div>
    <div class="container">
      <form ref="form" id="form" class="card-container rounded-2">
        <h2 class="text-center mb-3">Login</h2>
        <button class="btn btn-danger mb-2 w-100">
          <div class="button-content">
            <i class="material-icons me-2">account_circle</i>
            Login with Google
          </div>
        </button>
        <button class="btn btn-dark mb-5 w-100">
          <div class="button-content">
            <i class="material-icons me-2">code</i>
            Login with GitHub
          </div>
        </button>
        <div class="d-flex flex-column justify-content-between">
          <label htmlFor="uname" class="form-label">
            Username
            <input v-model="username" id="uname" type="text" class="form-control" autocomplete="on" required />
            <div class="invalid-feedback">Invalid username.</div>
          </label>
          <label htmlFor="pwd" class="form-label">
            Password
            <input v-model="password" id="pwd" type="password" class="form-control" autocomplete="on" required />
            <div class="invalid-feedback">Invalid password.</div>
          </label>
          <button class="btn btn-outline-primary mb-4" type="button" @click="login">
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();

let username = '';
let password = '';

const login = () => {
  // Retrieve user details from localStorage
  const storedUserDetails = JSON.parse(localStorage.getItem('user-details')) || [];

  // Check if the entered username and password match with any stored user details
  const foundUser = storedUserDetails.find(user => user.username === username && user.password === password);

  if (foundUser) {
    localStorage.setItem('isUserLoggedIn', 'true');
    // Navigate to the recipes page
    router.push('/recipes');
  } else {
    // Handle invalid login
    alert('Invalid username or password.');
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.card-container {
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 8px 8px 8px 8px #dbd9d9;
}
</style>
