<script>
    document.addEventListener("DOMContentLoaded", function () {
        const slider = document.querySelector('.slider');
        
        function randomizeCenter() {
            // Generate random X and Y positions for the rotation center
            const randomX = Math.floor(Math.random() * 100) + '%';
            const randomY = Math.floor(Math.random() * 100) + '%';
            
            // Apply random transform-origin to change the center of rotation
            slider.style.transformOrigin = `${randomX} ${randomY}`;
        }
        
        // Call randomizeCenter every 2 seconds to change the center randomly
        setInterval(randomizeCenter, 2000);
    });
</script>
