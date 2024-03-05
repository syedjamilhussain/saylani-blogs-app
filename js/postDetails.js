import { auth } from "../app.js";
import { GetSinglePost } from "./databaseCalls.js";

window.onload = function GetSinglePost() {
  getPost();
};

function getPost() {
  let postId = localStorage.getItem("postId");

  auth.onAuthStateChanged((user) => {
    GetSinglePost(user.uid, postId);
  });

 
  // Handle comment submission
  document.getElementById("commentForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the comment text
    let commentText = document.getElementById("reply").value;

    // Here you can add code to submit the comment to your database
    console.log("Comment submitted:", commentText);

    // Clear the comment textarea after submission
    document.getElementById("reply").value = "";
  });

  // Handle like button click
  let likeCount = 0; // Initial like count
  const likeButton = document.getElementById("likeButton");
  const likeCountElement = document.getElementById("likeCount");

  likeButton.addEventListener("click", function () {
    likeCount++;
    likeCountElement.textContent = likeCount;

    // Here you can add code to update the like count in your database
    console.log("Like button clicked. New like count:", likeCount);
  });
}
