// Hide bounce observer
const bounceObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {

    }
});
bounceObserver.observe(document.querySelector("#hideBounce"));

// Image observer