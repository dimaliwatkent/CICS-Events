import "./style.css";

const allEventsContainer = document.getElementById("clientEvents");

// Load existing events from local storage
let events = JSON.parse(localStorage.getItem("events")) || [];

// Function to load all events
function loadAllEvents() {
  // Clear the current list of events
  allEventsContainer.innerHTML = "";

  // Loop through all events and add them to the page
  events.forEach(function (event, index) {
    const eventElement = document.createElement("div");
    eventElement.classList.add("clientEventsCard");
    eventElement.innerHTML = `
  <h2>${event.eventName}</h2>
  <p>${event.eventDescription}</p>
  `;
    // Add a click event listener to the event div
    eventElement.addEventListener("click", function () {
      // Redirect to the event details page with the event index as a query parameter
      window.location.href = "event_details/index.html?eventIndex=" + index;
    });

    allEventsContainer.appendChild(eventElement);
  });
}
window.onload = () => {
  loadAllEvents();
};
