// scrollToElement.js
export const scrollToElement = () => {
    const element = document.getElementById(0);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  