// Add your code here
function submitData(name, email) {
    // Step 1: Create the data object
    const formData = {
      name: name,
      email: email,
    };
  
    // Step 2: Create the configuration object
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(formData),
    };
  
    // Step 3: Use fetch to send the POST request
    return fetch("http://localhost:3000/users", configurationObject)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // Append the new ID to the DOM
        const idElement = document.createElement("p");
        idElement.textContent = `ID: ${data.id}`;
        document.body.appendChild(idElement);
      })
      .catch((error) => {
        //  Handle errors
        const errorElement = document.createElement("p");
        errorElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorElement);
      });
  }
  