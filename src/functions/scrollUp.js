export const scrollPage = (pixels) => {
    window.scrollBy({ top: pixels, behavior: "smooth" });
};