// events-slider.js

document.addEventListener("DOMContentLoaded", function () {
    // Sample events data with image paths (replace with your actual data)
    var eventsData = [
        { title: "Tartu Folk: Final Concert", date: "2024-12-03", imagePath: "../img/concert.jpg" },
        { title: "Art Festival,Out of town", date: "2023-12-10", imagePath: "../img/car.jpg" },
        { title: "Urban bicycle tour", date: "2023-12-20", imagePath: "../img/bicycle.jpeg" },
    ];

    // Function to create event slides
    function createEventSlide(event) {
        var slide = document.createElement("div");
        slide.classList.add("event-slide");

        // container for the image
        var imageContainer = document.createElement("div");
        imageContainer.classList.add("event-image");

        // image element
        var imgElement = document.createElement("img");
        imgElement.src = event.imagePath;
        imgElement.alt = event.title + " Image";

        // image to the container
        imageContainer.appendChild(imgElement);

        // image container to the slide
        slide.appendChild(imageContainer);

        // title and date
        slide.innerHTML += `<h3>${event.title}</h3><p>Date: ${event.date}</p>`;

        return slide;
    }

    // Function to initialize the events slider
    function initEventsSlider() {
        var sliderContainer = document.getElementById("eventsSlider");

        // Create slides for each event
        eventsData.forEach(function (event) {
            var slide = createEventSlide(event);
            sliderContainer.appendChild(slide);
        });

        // Initialize the slider 
        // basic CSS class is used for styling
        var currentIndex = 0;
        var slides = document.querySelectorAll(".event-slide");

        function showSlide(index) {
            slides.forEach(function (slide) {
                slide.style.display = "none";
            });
            slides[index].style.display = "block";
        }

        // Set up event listeners for arrow navigation
        document.querySelector(".left-arrow").addEventListener("click", function () {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        });

        document.querySelector(".right-arrow").addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        });

        // Show the first slide initially
        showSlide(currentIndex);
    }

    // Call the function to initialize the events slider
    initEventsSlider();
});
