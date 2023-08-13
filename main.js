// main.js

// Function to update the total cost
function updateTotalCost() {
    const selectedParts = Array.from(document.querySelectorAll('input[name="part"]:checked')).map(input => input.value);
    const totalCost = selectedParts.reduce((total, part) => total + partCosts[part], 0);
    totalCostDisplay.textContent = totalCost;
  }
  
  // Add event listeners to checkboxes
  function setupCheckboxes() {
    const checkboxes = document.querySelectorAll('input[name="part"]');
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener("change", updateTotalCost);
    });
  }
  
  // Add car part checkboxes dynamically
  function createPartCheckboxes() {
    for (const part in partData) {
      const partDiv = document.createElement("div");
      partDiv.className = "part";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = "part";
      checkbox.value = part;
      const img = document.createElement("img");
      img.src = partData[part].image;
      img.alt = part;
      const label = document.createElement("label");
      label.textContent = partData[part].name;
      const description = document.createElement("p");
      description.className = "description";
      description.textContent = partData[part].description;
      const priceSpan = document.createElement("span");
      priceSpan.className = "price";
      priceSpan.textContent = "$" + partData[part].price;
      const nameAndImageDiv = document.createElement("div");
      nameAndImageDiv.style.display = "flex";
      nameAndImageDiv.style.flexDirection = "column";
      nameAndImageDiv.appendChild(img);
      nameAndImageDiv.appendChild(label);
      nameAndImageDiv.appendChild(description);
      partDiv.appendChild(nameAndImageDiv);
      partDiv.appendChild(priceSpan);
      partDiv.appendChild(checkbox);
      partsList.appendChild(partDiv);
    }
  }
  
  // Entry point when the DOM is loaded
  document.addEventListener("DOMContentLoaded", function () {
    setupCheckboxes();
    createPartCheckboxes();
    updateTotalCost();
  });
  