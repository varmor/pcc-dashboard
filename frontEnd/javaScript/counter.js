function animate(obj, initVal, lastVal, duration) 
{
    let startTime = null;
    let currentTime = Date.now();
    const step = (currentTime) => {
        if (!startTime) {
            startTime = currentTime;
        }
        const progress = Math.min((currentTime - startTime) / duration, 1);
        obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            window.cancelAnimationFrame(window.requestAnimationFrame(step));
        }
    };
    window.requestAnimationFrame(step);
}

window.addEventListener("DOMContentLoaded", function() {
    let profileCount = document.getElementById('profileCount');
    let countryCount = document.getElementById('countryCount');
    animate(profileCount, 0, 1850, 1500);
    animate(countryCount, 0, 149, 1500);
})