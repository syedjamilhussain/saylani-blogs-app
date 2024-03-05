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
  const postRef = ref(database, "users/" + `${userId}/posts/`);

  // Use push() to create a new child node with a unique key
  push(postRef, {
    title,
    category,
    type,
    status,
    description,
  })
    .then(() => {
      console.log("Post created successfully!");
    })
    .catch((error) => {
      console.error("Error creating post:", error);
    });
}

function getAllPosts() {
  const postsContainer = document.getElementById("allPosts");

  get(child(ref(database), "users/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        // this is iteratable we cannot use it directly snapshot.val()
        const result = Object.entries(snapshot.val());
        // console.log({ result });

        // users loop
        result.forEach((item) => {
          // console.log({ item });

          // console.log(item[1].posts);
          // console.log(
          //   "Object.entries(item[1].posts)",
          //   Object.entries(item[1].posts)
          // );

          // map is a loop that returns an array
          // posts = [x,y,z]
          // [a,b,c] <= [x,y,z]
          // posts loop

          let posts = Object.entries(item[1].posts).map((item) => item[1]);
          let postsId = Object.entries(item[1].posts).map((item) => item[0]);
          // console.log(posts);
          let username = item[1].username;

          // posts loop
          posts.forEach((item, index) => {
            const postElement = createPostElement(
              item,
              username,
              postsId[index]
            );
            postsContainer.appendChild(postElement);
          });
        });
      } else {
        console.log("No data available");
      }
    })
    .catch((err) => console.log(err));
}

function GetSinglePost(userId, postId) {
  get(child(ref(database), `users/${userId}/posts/${postId}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        // this is iteratable we cannot use it directly snapshot.val()
        console.log(Object.entries(snapshot.val()));
      } else {
        console.log("No data available");
      }
    })
    .catch((err) => console.log(err));
}

function createPostElement(post, username, postId) {
  const postElement = document.createElement("div");

  console.log({ post });

  postElement.classList.add("post");

  // Add child elements for post details
  postElement.innerHTML = `
  <div class="card mb-3" style="max-width: 540px;cursor:pointer;" >
  <div class="row g-0">
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${post.title}</h5>
        <p class="card-text">
          ${post.description}
        </p>
        <div class="card-text d-flex justify-content-between">
          <small
            class="text-body-secondary d-flex gap-2 align-items-center"
            ><i class="fa-solid fa-user"></i> ${username}</small
          >
          <small
            class="text-body-secondary d-flex gap-2 align-items-center"
            ><i class="fa-solid fa-user"></i>CURRENT DATE</small
          >
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACUCAMAAAAj+tKkAAAAJ1BMVEX09PTMzMz4+PjV1dXR0dHJycnt7e3j4+PZ2dnx8fHf39/q6urc3Nx8cu+jAAABuUlEQVR4nO3Z626DIBiA4coZ9P6vd9BaD52LkGV8LHmfn3ZN3+BA1McDAAAAAAAAAAAAAADgH4muSezdt5ipiVm65ilt2/qmyWrVsc/nPtsk/73vWKjzkCTfIOUvhH59JdA0jYcyBJ4cAmOsWUHEAmPSxoT5djSlAuNUlht7P0GlAs26HNr55gtCgX5bhe9+XChw2a8nn0HOnc66UGDYA89TWcV85FgoE6jSvhc4fx7LoWOz0AjO2//gaa+i3PPYcQyFAtV2jt2xL67VZi+UWmZUKJuayRxnxLuvjOF2XO5SNy8h+Hjq27ey+xiOs1nYx+81edYxHCfQfeyj15kySuDH+L3GcIDA6Nc+961vvU7LBkZt07MvXt3q2bIGiQaWrFJ4cX63VVwyMD73XDZdnt8BAuO6J7Tpp1t54cDp9hZeNPA9fqMGXk7bgQJj1SMawcCl6hGSYGAg8LeBNX2yI1glyN24hype7qapkvR2q4JEYHkyWOvx6Buoljw5jW5QLolLx4forvktRF5ter7LUT7vspreQtip51uIXDinljOsdbp7xPkHjW269wEAAAAAAAAAAAAAgJF9AWqwFQ8Ed9TQAAAAAElFTkSuQmCC"
        class="img-fluid rounded-start w-100 h-100"
        alt="..."
      />
    </div>
  </div>
</div>
  `;

  postElement.addEventListener("click", () => {
    // Your desired functionality when the card is clicked
    location.href = `postDetails.html`;

    localStorage.setItem("postId", postId);
  });

  return postElement;
}

export { writeUserData, getUserData, createPosts, getAllPosts, GetSinglePost,createPostElement, };
