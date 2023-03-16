const images = document.querySelectorAll(".image-container img");
const viewImage = document.querySelector(".view-image");
const displayedImage = document.querySelector(".view-image img");
const closeBtn = document.querySelector(".view-image span");
const imageContainer = document.querySelector(".image-container");

images.forEach((image) => {
    image.addEventListener("click", e => {
        // console.log(e);
        viewImage.style.display = "flex";
        displayedImage.src = e.target.src;
    })
})

closeBtn.addEventListener("click", () => viewImage.style.display = "none");

const getImage = async (n) => {
    for (let i = 0; i < n; i++) {
        try {
            const res = await fetch("https://picsum.photos/500");
            // console.log(res);
            let url = res.url;
            // console.log(url);
            const img = document.createElement('img'); // create img element
            img.src = url; // set its src to the one we feteched
            imageContainer.appendChild(img); // append it to the container

            img.addEventListener("click", e => {
                // console.log(e);
                viewImage.style.display = "flex";
                displayedImage.src = e.target.src;
            })

        } catch (error) {
            console.log(error);
        }

    }
}

// now, we implement the infinite scroll using
// clientHeight, scrollHeight, scrollTop

window.addEventListener('scroll', (e) => {
    // console.log(e);
    // destructure the required properties
    const { clientHeight, scrollHeight, scrollTop } = e.target.documentElement;
    // console.log(clientHeight, scro llTop, scrollHeight);
    // now once the scroll is at the bottom of page, the clientHeight+scrollTop = scrollHeight
    if (clientHeight + scrollTop == scrollHeight) {
        // console.log("Reached Bottom");
        getImage(3); // load new images each time we reach bottom of page
    }
})

getImage(9); // initially get 9 images to fill the page