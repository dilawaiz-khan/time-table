//edit the slot

let currentDate = new Date("2025-04-15");

function changeDate(offset) {
  currentDate.setDate(currentDate.getDate() + offset);
  document.getElementById("date-title").innerText =
    currentDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

function editSlot(element) {
  const current = element.innerText;
  const updated = prompt("Enter new course info:", current);
  if (updated !== null) {
    element.innerHTML = updated;
  }
}


function downloadPDF() {
  // const timetable = document.getElementsBy("timetable"); // Your timetable container's ID
  const timetable = document.getElementById("timetable");

  html2pdf().from(timetable).save("timetable.pdf");
}
