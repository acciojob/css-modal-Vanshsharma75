//your JS code here. If required.

        // Get the modal and button elements
        const modal = document.getElementById('myModal');
        const openModalBtn = document.getElementById('openModal');
        const closeModalBtn = document.querySelector('.close-modal');

        // When the user clicks the button, open the modal
        openModalBtn.onclick = function() {
            modal.style.display = 'block';
        }

        // When the user clicks the close button (x), close the modal
        closeModalBtn.onclick = function() {
            modal.style.display = 'none';
        }

        // When the user clicks anywhere outside of the modal content, close the modal
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }
  