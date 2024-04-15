const studentsData = [
    {
        code: 1026,
        studentName: "ACLAIDE, HANNAH BEA REYES",
        prelim: "",
        midterm: "",
        prefinal: "",
        final: "",
        grdType: "NEW",
        yrLevel: 2,
        acadStatus: "Regular",
        yrOfEntry: 2021,
        entryYrLvl: 1
    },
    {
        code: 1026,
        studentName: "ACLAIDE, HANNAH BEA REYES",
        prelim: "",
        midterm: "",
        prefinal: "",
        final: "",
        grdType: "NEW",
        yrLevel: 2,
        acadStatus: "Regular",
        yrOfEntry: 2021,
        entryYrLvl: 1
    },
    {
        code: 1026,
        studentName: "ACLAIDE, HANNAH BEA REYES",
        prelim: "",
        midterm: "",
        prefinal: "",
        final: "",
        grdType: "NEW",
        yrLevel: 2,
        acadStatus: "Regular",
        yrOfEntry: 2021,
        entryYrLvl: 1
    },
    {
        code: 1026,
        studentName: "ACLAIDE, HANNAH BEA REYES",
        prelim: "",
        midterm: "",
        prefinal: "",
        final: "",
        grdType: "NEW",
        yrLevel: 2,
        acadStatus: "Regular",
        yrOfEntry: 2021,
        entryYrLvl: 1
    },
    {
        code: 1026,
        studentName: "ACLAIDE, HANNAH BEA REYES",
        prelim: "",
        midterm: "",
        prefinal: "",
        final: "",
        grdType: "NEW",
        yrLevel: 2,
        acadStatus: "Regular",
        yrOfEntry: 2021,
        entryYrLvl: 1
    },
    {
        code: 1026,
        studentName: "ACLAIDE, HANNAH BEA REYES",
        prelim: "",
        midterm: "",
        prefinal: "",
        final: "",
        grdType: "NEW",
        yrLevel: 2,
        acadStatus: "Regular",
        yrOfEntry: 2021,
        entryYrLvl: 1
    },
    {
        code: 1026,
        studentName: "ACLAIDE, HANNAH BEA REYES",
        prelim: "",
        midterm: "",
        prefinal: "",
        final: "",
        grdType: "NEW",
        yrLevel: 2,
        acadStatus: "Regular",
        yrOfEntry: 2021,
        entryYrLvl: 1
    },
    {
        code: 1026,
        studentName: "ACLAIDE, HANNAH BEA REYES",
        prelim: "",
        midterm: "",
        prefinal: "",
        final: "",
        grdType: "NEW",
        yrLevel: 2,
        acadStatus: "Regular",
        yrOfEntry: 2021,
        entryYrLvl: 1
    },
    {
        code: 1026,
        studentName: "ACLAIDE, HANNAH BEA REYES",
        prelim: "",
        midterm: "",
        prefinal: "",
        final: "",
        grdType: "NEW",
        yrLevel: 2,
        acadStatus: "Regular",
        yrOfEntry: 2021,
        entryYrLvl: 1
    },
    {
        code: 1026,
        studentName: "ACLAIDE, HANNAH BEA REYES",
        prelim: "",
        midterm: "",
        prefinal: "",
        final: "",
        grdType: "NEW",
        yrLevel: 2,
        acadStatus: "Regular",
        yrOfEntry: 2021,
        entryYrLvl: 1
    }
]

const tbody = document.querySelector('.listOfStudents tbody');
studentsData.forEach(data => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${data.code}</td>
      <td>${data.studentName}</td>
      <td>${data.prelim}</td>
      <td>${data.midterm}</td>
      <td>${data.prefinal}</td>
      <td>${data.final}</td>
      <td>${data.grdType}</td>
      <td>${data.yrLevel}</td>
      <td>${data.acadStatus}</td>
      <td>${data.yrOfEntry}</td>
      <td>${data.entryYrLvl}</td>
    `;
    tbody.appendChild(tr);
  });