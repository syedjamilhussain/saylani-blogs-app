import { auth } from "../app.js";
import { createPosts } from "./databaseCalls.js";

const createPostForm = document.getElementById("create-post-form");

createPostForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(createPostForm);
  let formValues = [];

  formValues = Array.from(formData.entries());

  //   [
  //     [
  //         "title",
  //         "asd"
  //     ],
  //     [
  //         "category",
  //         "Javascript"
  //     ],
  //     [
  //         "type",
  //         "blog"
  //     ],
  //     [
  //         "status",
  //         "active"
  //     ],
  //     [
  //         "description",
  //         "asd"
  //     ]
  // ]

  console.log(formValues[0][1]); // formValues[0] =>['type','value'][1] => value
  //   userId, title, category, type, status, description
  createPosts(
    auth.currentUser.uid,
    formValues[0][1],
    formValues[1][1],
    formValues[2][1],
    formValues[3][1],
    formValues[4][1]
  );
});
