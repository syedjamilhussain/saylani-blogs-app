import { gotoCreatePostPage } from "./js/utils.js";
import { auth } from "./app.js";
import { getAllPosts } from "./js/databaseCalls.js";

const createPostNavBtn = document.getElementById("createPostNavBtn");

createPostNavBtn.addEventListener("click", (event) =>
  gotoCreatePostPage(auth, event)
);

getAllPosts();
