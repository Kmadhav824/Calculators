const subjectsDiv = document.getElementById('subjects');

function addSubject() {
  const div = document.createElement('div');
  div.className = 'subject';
  div.innerHTML = `
    <label>Sem:
        <input type="number" class="sem" min="1" max="8"/>
    </label>
    <label>Subject:
        <input type="text" class="sub"/>
    </label>
    <label>Credit:
    <input type="number" class="credit" min="1" max="5" />
    </label>
    <label>Grade:
      <select class="grade">
        <option value="10">S</option>
        <option value="9">A</option>
        <option value="8">B</option>
        <option value="7">C</option>
        <option value="6">D</option>
        <option value="5">E</option>
        <option value="0">F</option>
      </select>
    </label>
  `;
  subjectsDiv.appendChild(div);
}

function calculateCGPA() {
  const grades = document.querySelectorAll('.grade');
  const credits = document.querySelectorAll('.credit');
  let totalPoints = 0, totalCredits = 0;

  for (let i = 0; i < grades.length; i++) {
    const grade = parseFloat(grades[i].value);
    const credit = parseFloat(credits[i].value);
    if (!isNaN(grade) && !isNaN(credit)) {
      totalPoints += grade * credit;
      totalCredits += credit;
    }
  }

  const cgpa = totalCredits === 0 ? 0 : (totalPoints / totalCredits).toFixed(2);
  document.getElementById('result').innerText = `Your CGPA is: ${cgpa}`;
}