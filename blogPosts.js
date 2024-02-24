import { gotoCreatePostPage } from "./js/utils.js";
import { auth } from "./app.js";
import { getAllPosts } from "./js/databaseCalls.js";

const createPostNavBtn = document.getElementById("createPostNavBtn");

createPostNavBtn.addEventListener("click", (event) =>
  gotoCreatePostPage(auth, event)
);

window.onload = function PageLoads() {
  // Use onAuthStateChanged to observe user login status
  auth.onAuthStateChanged((user) => {
    if (user) {
      // User is logged in
      console.log("User is logged in:", user);
      // Update button accordingly (replace with your button element)
      document.getElementById("loginButtonDiv").innerHTML =
        '<a class="btn btn-outline-danger" href="signin.html" id="logoutBtn">Logout</a>';
      document.getElementById("loginButtonDiv").disabled = false;
      // Optionally, perform actions based on the logged-in user
    } else {
      // User is not logged in
      console.log("User is not logged in");
      // Update button accordingly
      document.getElementById("loginButtonDiv").innerHTML =
        '<a class="btn btn-outline-success" href="signin.html">Login</a>';
      document.getElementById("loginButtonDiv").disabled = false;
      // Optionally, redirect to a login page or display a login prompt
    }
  });
};

document
  .getElementById("loginButtonDiv")
  .addEventListener("click", function (event) {
    if (event.target.id === "logoutBtn") {
      auth.signOut(); // Your logout function
    }
  });



getAllPosts();
