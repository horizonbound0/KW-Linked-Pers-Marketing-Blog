// handle for the main element
const mainEl = document.querySelector('.main-blogs');

// handle for the header element
const headerEl = document.querySelector('.header');

//creating a separate function to create a blog card.
function createBlogs() {

    //declaring the array to store the blogs
    let blogsArray = [];

    // check to see if blogs exists in local storage
    if (localStorage.getItem('blogs') != null) {

        blogsArray = JSON.parse(localStorage.getItem('blogs'));

    }

    console.log(blogsArray);

    if (blogsArray.length > 0) {

        // add the text content and classes to our blog elements
        for (const blog of blogsArray) {

            // variables for creating HTML elements
            const blogCard = document.createElement('section');
            const blogTitle = document.createElement('h2');
            const blogContent = document.createElement('article');
            const blogAuthor = document.createElement('h6');

            // Add the card to the page
            mainEl.appendChild(blogCard);

            // Add the blog-card class to the blog card element
            blogCard.setAttribute('class', 'blog-card');

            // create the elements for the card

            blogTitle.textContent = blog.title;
            blogTitle.setAttribute('class', 'blog-title');
            blogCard.appendChild(blogTitle);

            blogContent.textContent = blog.content;
            blogContent.setAttribute('class', 'blog-content');
            blogCard.appendChild(blogContent);

            blogAuthor.textContent = 'this blog was by: ' + blog.username;
            blogAuthor.setAttribute('class', 'blog-author');
            blogCard.appendChild(blogAuthor);

            // Go to the next card?
        }
    }
}

createBlogs();

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