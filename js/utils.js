function gotoCreatePostPage(auth, event) {
  const user = auth.currentUser;

  console.log({ user });

  if (user) {
    location.href = "/createPost.html";
  } else {
    // location.href = "/signin.html";
    alert("Please login first!");
  }
}

export { gotoCreatePostPage };
