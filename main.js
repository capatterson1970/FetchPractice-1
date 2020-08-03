let arrayOfPosts;

// this function waits for the web page to be loaded, when it does it will run the code inside of it which happen to be getPosts()
window.onload = function() {
  getPosts()

}

// this function is going to make a fetch request to the url inside it's parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getPosts = () => {
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => arrayOfPosts = posts)
}

// this function logs the results in your browsers console
const consolePosts = () => {
  console.log(arrayOfPosts)
}

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayPost = () => {
  const allPosts = document.getElementById('all-posts')
  arrayOfPosts.map((post, index) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`)
    li.appendChild(text)
    allPosts.append(li)
  })
}

// Your job now is to follow the functions above and use them as templates to build the functionality the buttons in the index.html file already have laid out in it. This way you can learn how to build fetch requests and work with other apis and become a real developer!!

const fetch5Posts = () => {
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      data.forEach(post => {
        if(post.id <= 5){
          const allPosts = document.getElementById('five-posts');
          const li = document.createElement('li');
          li.innerHTML = `Title: ${post.title}:  ${post.body}, by user: ${post.userId}`;
          allPosts.append(li);
        }
      })
    })
}

const fetchComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => {
    data.forEach(comment => {
      const allPosts = document.getElementById('comments');
      const li = document.createElement('li');
      li.innerHTML = `Comment: ${comment.name}: ${comment.body}`;
      allPosts.append(li);
    })
  })
}

const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
    data.forEach(user => {
      const allPosts = document.getElementById('users');
      const li = document.createElement('li');
      li.innerHTML = `User: ID:${user.id}, Name:${user.name}, Username:${user.username}, Email:${user.email}`;
      allPosts.append(li);
    })
  })
}