function gotoCreatePostPage(auth, event) {
  const user = auth.currentUser;

  console.log({ user });
  console.log(location.href, location);
  if (user) {
    location.pathname = location.pathname + "createPost.html";
  } else {
    // location.href = "/signin.html";
    alert("Please login first!");
  }
}

export { gotoCreatePostPage };
