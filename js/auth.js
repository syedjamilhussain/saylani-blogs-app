import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import { getUserData, writeUserData } from "./databaseCalls.js";

const registerUser = (signupForm, auth, e) => {
  e.preventDefault();

  // Handle sign-in logic here (e.g., send data to a server)
  const fullName = signupForm.elements["fullName"].value;
  const email = signupForm.elements["email"].value;
  const password = signupForm.elements["password"].value;

  console.log({ fullName, email, password });

  // Create user with email and password
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in successfully
      const user = userCredential.user;
      console.log({ currentUser: auth.currentUser });
      console.log({ fullName });

      updateProfile(auth.currentUser, {
        displayName: fullName,
        photoURL: "https://robohash.org/2?set=set2",
      })
        .then((res) =>
          writeUserData(user.uid, user.displayName, user.email, user.photoURL)
        )
        .catch((err) => console.log(err));

      // Navigate to a different page after successful sign-in (example using a library)
      // window is a BOM element and BOM is Browser Object Model
      window.location.href = "signin.html";
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log({ errorCode, errorMessage });
      // ...
    });
};

const loginUser = (signinForm, auth, e) => {
  e.preventDefault();

  // Handle sign-in logic here (e.g., send data to a server)
  const email = signinForm.elements["email"].value;
  const password = signinForm.elements["password"].value;

  // Create user with email and password
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in successfully
      const user = userCredential.user;
      console.log({ currentUser: auth.currentUser });

      console.log({ user });
      // Navigate to a different page after successful sign-in (example using a library)
      // window is a BOM element and BOM is Browser Object Model
      window.location.href = "index.html";
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log({ errorCode, errorMessage });
      // ...
    });
};

export { registerUser, loginUser };
