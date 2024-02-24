import { auth } from "../app.js";
import { GetSinglePost } from "./databaseCalls.js";
console.log({ auth });

window.onload = function GetSinglePost() {
  getPost();
};

function getPost() {
  let postId = localStorage.getItem("postId");
  console.log({ postId });

  auth.onAuthStateChanged((user) => {
    GetSinglePost(user.uid, postId);
  });

  document.getElementById("postDetails").innerHTML = `<h1>Singlee Post</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem non
      deserunt consectetur ipsam aspernatur ea est amet nihil neque, fuga
      laudantium provident eos totam dolore tempore in? Recusandae, doloremque
      architecto.
    </p>

    <form action="#">
      <label for="reply"><b>add your thoughts</b></label> <br />
      <textarea
        name=""
        id="reply"
        cols="30"
        rows="3"
        placeholder="add our comment here"
      ></textarea>
      <br />
      <button type="submit">submit</button>
      <!-- <img src="images/456115.png" alt="likeIcon" width="20px"> -->
      <button style="cursor: pointer">
        <i class="fa-regular fa-heart"></i>
      </button>
    </form>`;
}
