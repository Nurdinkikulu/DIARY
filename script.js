// Function to add a new entry
function addEntry() {
  const date = document.getElementById("entryDate").value;
  const event = document.getElementById("eventDetails").value;
  
  if (date && event) {
    const entry = document.createElement("div");
    entry.classList.add("entry");

    const entryDate = document.createElement("h4");
    entryDate.textContent = `Date: ${date}`;

    const entryEvent = document.createElement("p");
    entryEvent.textContent = event;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.onclick = function() {
      entry.remove();
    };

    entry.appendChild(entryDate);
    entry.appendChild(entryEvent);
    entry.appendChild(deleteButton);

    document.getElementById("diaryEntries").appendChild(entry);

    // Clear the inputs after adding
    document.getElementById("entryDate").value = "";
    document.getElementById("eventDetails").value = "";
  } else {
    alert("Please enter both date and event details.");
  }
}