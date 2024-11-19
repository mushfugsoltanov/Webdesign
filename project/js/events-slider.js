

document.addEventListener("DOMContentLoaded", function () {
    var eventsData = [
        { title: "Tartu Folk: Final Concert", date: "2024-12-03", imagePath: "../img/concert.jpg" },
        { title: "Art Festival,Out of town", date: "2024-12-10", imagePath: "../img/car.jpg" },
        { title: "Urban bicycle tour", date: "2024-12-20", imagePath: "../img/bicycle.jpeg" },
    ];
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


    function initEventsSlider() {
        var sliderContainer = document.getElementById("eventsSlider");

        eventsData.forEach(function (event) {
            var slide = createEventSlide(event);
            sliderContainer.appendChild(slide);
        });

        var currentIndex = 0;
        var slides = document.querySelectorAll(".event-slide");

        function showSlide(index) {
            slides.forEach(function (slide) {
                slide.style.display = "none";
            });
            slides[index].style.display = "block";
        }

        document.querySelector(".left-arrow").addEventListener("click", function () {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        });

        document.querySelector(".right-arrow").addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        });

        showSlide(currentIndex);
    }

    initEventsSlider();
});
