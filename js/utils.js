function gotoCreatePostPage(auth, event) {
  const user = auth.currentUser;

  console.log({ user });
  console.log(location.href, location);
  if (user) {
    location.href = location.href + "createPost.html";
  } else {
    // location.href = "/signin.html";
    alert("Please login first!");
  }
}

export { gotoCreatePostPage };
