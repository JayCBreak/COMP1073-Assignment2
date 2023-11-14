// Initialize Vars and thumbnails
const thumbnails = document.querySelectorAll("#gallery ul li img");
const featuredImage = document.querySelector("#gallery figure img");
const images = ["flowers-pink", "flowers-purple", "flowers-red", "flowers-white", "flowers-yellow"];
// Add all the images to the thumbnails
// Images are loaded via github link so that they appear on github pages
// This means longer loading time BUT the images will actually show up on the website instead of only locally
for(let i = 0; i < images.length; i++) {
    thumbnails[i].src = "https://raw.githubusercontent.com/JayCBreak/COMP1073-Assignment2/master/images/[filename]-small.jpg"
    thumbnails[i].src = thumbnails[i].src.replace("[filename]", images[i]);
    thumbnails[i].alt = images[i] + "-small.jpg"
    thumbnails[i].classList.add("desaturate");
}
// Select the first image by default
featuredImage.src = thumbnails[0].src.replace("-small", "-large");
thumbnails[0].classList.remove("desaturate");
thumbnails[0].classList.add("saturate");

// Add click event to all thumbnails
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function(event) {
        // Set an outline to show the selected image
        thumbnails.forEach(clearThumbnail => {
            clearThumbnail.classList.remove("saturate");
            clearThumbnail.classList.add("desaturate");
        })
        thumbnail.classList.remove("desaturate");
        thumbnail.classList.add("saturate");
        // Select the featured image caption
        let featuredImageCaption = document.querySelector("#gallery figure figcaption");

        // Replace the featured image src with the thumbnail src, but with '-large.jpg' instead of '-small.jpg'
        featuredImage.src = thumbnail.src.replace("-small", "-large");
        featuredImage.alt = thumbnail.alt.replace("-small", "-large");
        // Replace the figcaption with the new filename
        featuredImageCaption.textContent = featuredImage.alt;
    })
    thumbnail.addEventListener('hover', function(event) {

    })
})