import { auth } from "../app.js";
import { loginUser } from "./auth.js";

// auth code
const signinForm = document.getElementById("signin-form");

signinForm.addEventListener("submit", (event) =>
  loginUser(signinForm, auth, event)
);
