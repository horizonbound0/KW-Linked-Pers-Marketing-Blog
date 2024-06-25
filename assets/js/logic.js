// getting a handle on the light mode / dark mode button
const lightDarkModeButton = document.querySelector('.light-dark-mode-button');

//handle for submit button on form
const blogSubmitButtonEl = document.querySelector('.submit-button');

// handle for form username
const usernameEl = document.getElementById('username');

// handle for blog title
const blogTitleEl = document.getElementById('content-title');

// handle for blog content
const blogContentEl = document.getElementById('content');

// making an object array to pass into local storage
const blogsArray = [];

// making the function that will put the user's blog values into an object, then shove the object into our array.

function storeBlogInfo() {
    let blog = {

        username: "",
        title: "",
        content: ""

    }

    blog.username = usernameEl.value;
    blog.title = blogTitleEl.value;
    blog.content = blogContentEl.value;

    blogsArray.push(blog);

    if(blog.username !== "" && blog.title !== "" && blog.content !== "") {

        window.location.href = "./blog.html";

        usernameEl.value = "";
        blogTitleEl.value = "";
        blogContentEl.value = "";
    
    }

}


// creating the event listener that will change the mode from light to dark
lightDarkModeButton.addEventListener('click', function (event) {
    const button = event.target;


})

// add event listener to the blog-form button to pass the blog values into local storage in the form of an object
blogSubmitButtonEl.addEventListener('click', storeBlogInfo);

// TESTING A PUSH