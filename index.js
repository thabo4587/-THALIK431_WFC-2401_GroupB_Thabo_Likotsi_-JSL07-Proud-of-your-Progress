document.addEventListener('DOMContentLoaded', function () {
  const cardForm = document.getElementById('cardForm');
  const modal = document.getElementById('modal');
  const certificateContent = document.getElementById('certificateContent');
  const closeModal = document.querySelector('.close');

  // Hide the modal initially
  modal.style.display = 'none';

  cardForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // 🚨 Get input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById('personalMessage'); // Corrected
      const courseNameInput = document.getElementById('courseName'); // Corrected

      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput.value ? courseNameInput.value : "a course"; // Fallback to "a course" if no input

      if (studentName.trim() === '' || personalMessage.trim() === '') {
          alert('Please fill in all fields');
          return;
      }

      // 🚨 Generate certificate content dynamically
      certificateContent.innerHTML = `
    <h3>${studentName}</h3>
    <p>${personalMessage}</p>
    <p>Has successfully completed the course:</p>
    <h4>${courseName}</h4>
    <p>with legendary perseverance and world class badassery for never giving up</p>
    <img src="logo.png" id="imageContainer">
    <p>I am thee greatest &#128568;</p>
`;
  
      // Display the modal
      modal.style.display = 'block';

      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      courseNameInput.value = '';
  });

  // 🚨 Close the modal when the close button is clicked
  closeModal.addEventListener('click', function () {
      modal.style.display = 'none';
  });
});
