document.addEventListener('DOMContentLoaded', (event) => {
    const wheel = document.getElementById('wheel');
    const segments = wheel.getElementsByClassName('segment');
    const spinButton = document.getElementById('spin');
    const result = document.getElementById('result');
    const modal = document.getElementById('confirmationModal');
    const modalText = document.getElementById('modal-text');
    const closeBtn = document.getElementsByClassName('close')[0];

    let deg = 0;

    spinButton.addEventListener('click', () => {
        deg = Math.floor(3000 + Math.random() *3000);
        wheel.style.transition = 'all 5s ease-out';
        wheel.style.transform = `rotate(${deg}deg)`;
        wheel.classList.add('blur');
    });

    wheel.addEventListener('transitionend', () => {
        wheel.classList.remove('blur');
        wheel.style.transition = 'none';
        const actualDeg = deg % 360;
        wheel.style.transform = `rotate(${actualDeg}deg)`;

        const segmentAngle = 360 / segments.length;
        const index = Math.round(actualDeg / segmentAngle) % segments.length;
        const selectedSegment = segments[index];

        const resultText = selectedSegment.innerText;
        const resultLink = selectedSegment.getAttribute('data-link');
        result.innerHTML = `You got: <a href="${resultLink}">${resultText}</a>`;
        result.style.display = 'block';

        modalText.innerHTML = `<a href="${resultLink}">${resultText}</a>`;
        modal.style.display = 'block';

       
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });



});
