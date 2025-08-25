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
//edit the slot

let currentDate = new Date("2025-04-15");

function changeDate(offset) {
  currentDate.setDate(currentDate.getDate() + offset);
  document.getElementById("date-title").innerText =
    currentDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

// function editSlot(element) {
//   const current = element.innerText;
//   const updated = prompt("Enter new course info:", current);
//   if (updated !== null) {
//     element.innerHTML = updated;
//   }
// }


function downloadPDF() {
  // const timetable = document.getElementsBy("timetable"); // Your timetable container's ID
  const timetable = document.getElementById("timetable");

  html2pdf().from(timetable).save("timetable.pdf");
}


function editSlot(cell) {
  // Open modal
  document.getElementById("editModal").style.display = "block";
  document.getElementById("modalOverlay").style.display = "block";
  window.activeCell = cell;

  // Load values if already set
  const html = cell.innerHTML;
  const match = html.match(/<strong>(.*?)<\/strong><br>(.*?)<br>(.*)/);
  if (match) {
   document.getElementById("courseInput").value = match[1];
   document.getElementById("roomInput").value = match[2];
   document.getElementById("teacherInput").value = match[3];

  } else {
    document.getElementById("courseSelect").value = "";
    document.getElementById("roomSelect").value = "";
    document.getElementById("teacherSelect").value = "";
  }
}

function closeModal() {
  document.getElementById("editModal").style.display = "none";
  document.getElementById("modalOverlay").style.display = "none";
}

document.getElementById("editForm").addEventListener("submit", function(e) {
  e.preventDefault();

const course = document.getElementById("courseInput").value;
const teacher = document.getElementById("teacherInput").value;
const room = document.getElementById("roomInput").value;
  if (window.activeCell) {
    window.activeCell.innerHTML = `<strong>${course}</strong><br>${room}<br>${teacher}`;
  }

  closeModal();
});