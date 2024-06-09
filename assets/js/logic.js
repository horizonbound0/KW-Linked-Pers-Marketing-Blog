// handle for header that holds the light/dark mode button
const headerEl = document.querySelector('.header');

// handle for body element
//const bodyEl = document.

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

// function to change background color and font color when the dark mode button is clicked
function lightDarkMode (event) {
    const element = event.target;

    // make sure the element clicked in the light / dark mode button
    if (element.matches(".light-dark-mode-button")) {
        if (document.body.dataset.bg === "light") {
            document.body.dataset.bg = "dark";
            element.value = element.dataset.light;
        } else if (document.body.dataset.bg === "dark") {
            document.body.dataset.bg = "light";
            element.value = element.dataset.dark;            
        }
    }
}

/**/
// creating the event listener that will change the mode from light to dark
headerEl.addEventListener('click', lightDarkMode);

// add event listener to the blog-form button to pass the blog values into local storage in the form of an object
blogSubmitButtonEl.addEventListener('click', storeBlogInfo);