document.addEventListener("DOMContentLoaded", function() {

    function submitData(name, email) {
      const formData = {
        name: name,
        email: email
      };
  
      return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Response Data:', data); // Log the response data
        return data; // If the request is successful, return the response data
      })
      .catch(error => {
        console.error('Error:', error); // Log the error message
        throw error; // If there is an error, throw the error message
      });
    }
  
    // Example usage
    submitData('John Doe', 'johndoe@example.com')
      .then(data => {
        // Handle the data if needed
      })
      .catch(error => {
        // Handle errors if needed
      });
  });
  