<template>
  <div>
    <div class="container">
      <form ref="form" id="form" class="card-container rounded-2">
        <h2 class="text-center mb-3">Login</h2>
        <div class="text-center">
          <GoogleSignInButton
            @success="handleLoginSuccess"
            @error="handleLoginError"
          ></GoogleSignInButton>
        </div>
        <!-- <div v-if="user">
          <pre>{{ user }}</pre>
        </div> -->
        <!-- <button class="btn btn-dark mb-4 w-100">
          <div class="button-content">
            <i class="material-icons me-2 align-middle">code</i>
            Login with GitHub
          </div>
        </button> -->
        <hr />
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
          <button class="btn btn-outline-primary mt-2" type="button" @click="login">
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  GoogleSignInButton,
  type CredentialResponse,
} from "vue3-google-signin";

// Define types
type User = {
  email: string;
  username: string;
  password: string;
};

const user = ref(<null | User>(null));
// handle success event
const handleLoginSuccess = async(response: CredentialResponse) => {
  const { credential } = response;
  
  if(credential){
    user.value = await $fetch("/api/google-login",{
      method: 'POST',
      body: {
        token: credential,
      },
    });
    user.value = credential.profileObj; // Extracting user details from the credential object

    const storedUserDetails: User[] = JSON.parse(localStorage.getItem('user-details')) || [];

    // Check if the user's email matches any of the emails stored in userDetails
    const foundUser: User | undefined = storedUserDetails.find(user => user.email === user.value?.email);

    if (foundUser) {
      localStorage.setItem('isUserLoggedIn', 'true');
      // Navigate to the recipes page
      router.push('/recipes');
    } else {
      // Handle invalid login
      alert('User not registered.');
    }
  }
  console.log("User: ", user);
  // console.log("Access Token", credential);
};

// handle an error event
const handleLoginError = () => {
  console.error("Login failed");
};

const router = useRouter();
// Define reactive variables
let username: string = '';
let password: string = '';

// Define login function
const login = () => {
  // Retrieve user details from localStorage
  const storedUserDetails: User[] = JSON.parse(localStorage.getItem('user-details')) || [];

  // Check if the entered username and password match with any stored user details
  const foundUser: User | undefined = storedUserDetails.find(user => user.username === username && user.password === password);

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
  padding: 30px;
  background-color: #ffffff;
  box-shadow: 8px 8px 8px 8px #dbd9d9;
}
</style>
