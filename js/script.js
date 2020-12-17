const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (e) => {
    const x = e.pageX;
    const y = e.pageY;
    
    cursor.style.top = `${y}px`
    cursor.style.left = `${x}px`
})