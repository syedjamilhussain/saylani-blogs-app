import {
  ref,
  set,
  get,
  child,
  push,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";
import { database } from "../app.js";

function writeUserData(userId, name, email, imageUrl) {
  set(ref(database, "users/" + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
}

function getUserData(userId) {
  console.log({ userId });

  // User object structure in firebase database
  // {
  //   users:{
  //     uid:{
  //     email:'',
  //     profile_picture:"",
  //     username:""
  //     }
  //   }
  // }

  get(child(ref(database), "users/" + userId))
    // if we want all users data then we can delete userId from users/ + userId
    // just use users/

    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(
          "This is my snapshot value get from database",
          snapshot.val()
        );
      } else {
        console.log("No data available");
      }
    })
    .catch((err) => console.log(err));
}

function createPosts(userId, title, category, type, status, description) {
  ref(database, "users/" + `${userId}/posts/`)
    .push({
      title,
      category,
      type,
      status,
      description,
    })
    .then(() => {
      // Success! The post has been added with a unique key.
      console.log("Post created successfully!");
    })
    .catch((error) => {
      // Handle any errors that occurred during the write operation
      console.error("Error creating post:", error);
    });
}

export { writeUserData, getUserData, createPosts };
