import { auth } from "../app.js";
import { registerUser } from "./auth.js";

// auth code
const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", (event) =>
  registerUser(signupForm, auth, event)
);
