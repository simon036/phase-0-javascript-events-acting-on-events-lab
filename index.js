// Your code here
    function moveDodgerLeft() {
        const dodger = document.getElementById('dodger');
        const leftPosition = parseInt(dodger.style.left);
        if (leftPosition > 0) {
            dodger.style.left = `${leftPosition - 10}px`;
        }
    }

    function moveDodgerRight() {
        const dodger = document.getElementById('dodger');
        const leftPosition = parseInt(dodger.style.left);
        if (leftPosition < 360) { 
            dodger.style.left = `${leftPosition + 10}px`;
        }
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            moveDodgerLeft();
        } else if (event.key === 'ArrowRight') {
            moveDodgerRight();
        }
    });
