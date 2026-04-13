// Run after page load
document.addEventListener("DOMContentLoaded", () => {

    let data = [
        { name: "Taj Mahal", type: "place" },
        { name: "Agra Fort", type: "place" },
        { name: "Fatehpur Sikri", type: "place" },
        { name: "Hotel Taj View", type: "hotel" },
        { name: "Oberoi Amarvilas", type: "hotel" },
        { name: "Petha", type: "food" },
        { name: "Mughlai Food", type: "food" }
    ];

    let searchInput = document.getElementById("searchInput");
    let filter = document.getElementById("filter");
    let results = document.getElementById("results");

    // Safe check (important)
    if (searchInput && filter && results) {

        searchInput.addEventListener("keyup", showResults);
        filter.addEventListener("change", showResults);

        function showResults() {
            let searchValue = searchInput.value.toLowerCase();
            let filterValue = filter.value;

            results.innerHTML = "";

            let filtered = data.filter(item => {
                return (filterValue === "all" || item.type === filterValue) &&
                       item.name.toLowerCase().includes(searchValue);
            });

            if (filtered.length === 0) {
                results.innerHTML = "<li>No results found ❌</li>";
                return;
            }

            filtered.forEach(item => {
                let li = document.createElement("li");
                li.textContent = item.name;
                results.appendChild(li);
            });
        }
    }

    // ================= SLIDER =================
    let index = 0;
    const slides = document.querySelectorAll(".slide");

    if (slides.length > 0) {

        function showSlide(i) {
            slides.forEach((slide, idx) => {
                slide.style.display = (idx === i) ? "block" : "none";
            });
        }

        function nextSlide() {
            index = (index + 1) % slides.length;
            showSlide(index);
        }

        function prevSlide() {
            index = (index - 1 + slides.length) % slides.length;
            showSlide(index);
        }

        // Initial show
        showSlide(index);

        // Auto slide
        setInterval(nextSlide, 5000);

        // OPTIONAL: buttons ke liye global banana
        window.nextSlide = nextSlide;
        window.prevSlide = prevSlide;
    }

});

