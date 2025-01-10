// Toggle Button
const buttons = document.querySelectorAll('.toggle-button');
        const slider = document.querySelector('.slider');
        const tabPanes = document.querySelectorAll('.tab-pane');

        function toggle(index) {
            // Update toggle buttons
            buttons.forEach((button, i) => {
                if (i === index) {
                    button.classList.add('active');
                } else {
                    button.classList.remove('active');
                }
            });
            
            // Move slider
            if (index === 1) {
                slider.classList.add('right');
            } else {
                slider.classList.remove('right');
            }

            // Switch tab content with animation
            tabPanes.forEach((pane, i) => {
                if (i === index) {
                    pane.classList.add('active');
                } else {
                    pane.classList.remove('active');
                }
            });
        }