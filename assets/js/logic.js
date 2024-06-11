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
let blogsArray = [];



// grabbing blogs from local storage and putting them into the array
if (localStorage.getItem('blogs') != null) {

    console.log(localStorage.getItem('blogs'));

    // set blogs array to the parsed storage
    blogsArray = JSON.parse(localStorage.getItem('blogs'));

    console.log(blogsArray);

} else {

    console.log('No blogs in local');

}

function storeBlogInfo() {

    // declaring the blog object
    let blog = {};

    // get the blogs that are currently in local storage

    blog.username = usernameEl.value;
    console.log('username is: ' + blog.username);
    blog.title = blogTitleEl.value;
    console.log('username is: ' + blog.title);
    blog.content = blogContentEl.value;
    console.log('username is: ' + blog.content);

    if (blog.username !== "" && blog.title !== "" && blog.content !== "") {

        blogsArray.push(blog);

        localStorage.setItem('blogs', JSON.stringify(blogsArray));

        console.log(blogsArray);
        console.log(localStorage.getItem('blogs'));

        window.location.href = "./blog.html";

        document.querySelector('.blog-form').reset();


    }
}

// Check to see if the local storage bg-mode is light or dark, then set the background accordingly
if(localStorage.getItem('bg-mode') === 'light') {
    document.body.dataset.bg = "light";
} else if (localStorage.getItem('bg-mode') === 'dark') {
    document.body.dataset.bg = "dark";
}

// function to change background color and font color when the dark mode button is clicked
function lightDarkMode(event) {
    const element = event.target;

    // make sure the element clicked in the light / dark mode button
    if (element.matches(".light-dark-mode-button")) {
        if (document.body.dataset.bg === "light") {
            localStorage.setItem('bg-mode', 'dark');
            document.body.dataset.bg = "dark";
            element.value = element.dataset.light;
        } else if (document.body.dataset.bg === "dark") {
            localStorage.setItem('bg-mode', 'light')
            document.body.dataset.bg = "light";
            element.value = element.dataset.dark;
        }
    }
}


// creating the event listener that will change the mode from light to dark
headerEl.addEventListener('click', lightDarkMode);

// add event listener to the blog-form button to pass the blog values into local storage in the form of an object
blogSubmitButtonEl.addEventListener('click', storeBlogInfo);