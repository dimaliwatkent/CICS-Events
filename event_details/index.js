// Parse the URL to get the event index
const urlParams = new URLSearchParams(window.location.search);
const eventIndex = parseInt(urlParams.get("eventIndex"));

// Get the event data from local storage
let events = JSON.parse(localStorage.getItem("events")) || [];
const userEvent = events[eventIndex];
console.log(userEvent.eventName);

if (userEvent) {
  // Create the event details HTML
  const eventDetailsHtml = `
    <img src="${userEvent.image}" alt="${userEvent.eventName}">
    <h2>Title: ${userEvent.eventName}</h2>
    <p>Description: ${userEvent.eventDescription}</p>
    <p>Date: ${userEvent.eventDate}</p>
    <p>Location: ${userEvent.location}</p>
    <p>Participants: ${userEvent.participants}</p>
    <p>Organizers: ${userEvent.organizers}</p>
    <p>Registration Deadline: ${userEvent.registrationDeadline}</p>
    <p>State: ${userEvent.state}</p>
 `;

  // Insert the event details HTML into the page
  document.getElementById("clientEventsDetails").innerHTML = eventDetailsHtml;
} else {
  // Handle the case where no event with the given index exists
}
