
  const courses = [
    { code: "MATH 101", name: "Calculus II", dept: "Mathematics", credit: 4 },
    { code: "ENG 202", name: "English Literature", dept: "English", credit: 3 },
    { code: "HIST 110", name: "Pakistan History", dept: "History", credit: 3 },
    { code: "PHYS 205", name: "Physics", dept: "Physics", credit: 4 },
    { code: "CS 150", name: "Computer Networks", dept: "Computer Science", credit: 4 },
    { code: "SE 120", name: "Software Requirements", dept: "Software Engineering", credit: 3 },
  ];

  const table = document.getElementById("course-table");

  function renderTable() {
    table.innerHTML = "";
    courses.forEach((course, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td><span>${course.code}</span><input type="text" value="${course.code}" class="edit-field" style="display:none"></td>
        <td><span>${course.name}</span><input type="text" value="${course.name}" class="edit-field" style="display:none"></td>
        <td><span>${course.dept}</span><input type="text" value="${course.dept}" class="edit-field" style="display:none"></td>
        <td><span>${course.credit}</span><input type="number" value="${course.credit}" class="edit-field" style="display:none" min="1" max="6"></td>
        <td><a href="#" onclick="toggleEdit(${index}, this)">Edit</a></td>
      `;
      table.appendChild(row);
    });
  }

  function toggleEdit(index, linkElement) {
    const row = linkElement.closest("tr");
    const spans = row.querySelectorAll("span");
    const inputs = row.querySelectorAll("input");

    const isEditing = linkElement.textContent === "Save";

    if (isEditing) {
      // Save data
      const newCode = inputs[0].value.trim();
      const newName = inputs[1].value.trim();
      const newDept = inputs[2].value.trim();
      const newCredit = parseInt(inputs[3].value);

      courses[index] = {
        code: newCode,
        name: newName,
        dept: newDept,
        credit: newCredit
      };
      renderTable();
    } else {
      // Switch to edit mode
      spans.forEach(span => span.style.display = "none");
      inputs.forEach(input => input.style.display = "inline-block");
      linkElement.textContent = "Save";
    }
  }

  renderTable();

