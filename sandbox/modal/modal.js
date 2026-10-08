
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
    console.log(e.target);
    console.log("currentTarget",e.currentTarget);

// Code to show modal  - Use event parameter 'e'   
// Figure out which image was clicked on
const imgClicked = e.target;
const fileName = imgClicked.getAttribute("src");
const alt = imgClicked.alt;
// Get the name of the large img
const largeImg = fileName.replace("-sm", "-full");
// Put correct source path in the dialog
modalImage.src = largeImg;
modalImage.alt = alt;
// Show the dialog
modal.showModal();
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
          