const gradesData = [
    {
      subjNo: "CS 2240",
      descriptiveTitle: "APPLICATIONS DEVELOPMENT AND EMERGING TECHNOLOGIES",
      prelim: "",
      midterm: "",
      preFinal: "",
      final: "",
      units: "3.00",
      creditTo: ""
    },
    {
      subjNo: "GE 3219",
      descriptiveTitle: "ELECTIVE 2",
      prelim: "",
      midterm: "",
      preFinal: "",
      final: "",
      units: "3.00",
      creditTo: ""
    },
    {
      subjNo: "IT 2239",
      descriptiveTitle: "FUNDAMENTALS OF DATABASE SYSTEMS",
      prelim: "",
      midterm: "",
      preFinal: "",
      final: "",
      units: "3.00",
      creditTo: ""
    },
    {
      subjNo: "IT 2241",
      descriptiveTitle: "EVENT-DRIVEN PROGRAMMING",
      prelim: "",
      midterm: "",
      preFinal: "",
      final: "",
      units: "3.00",
      creditTo: ""
    },
    {
      subjNo: "",
      descriptiveTitle: "Quality Point Index (Q.P.I) or Weighted Percentage Average (W.P.A) =",
      prelim: "",
      midterm: "",
      preFinal: "",
      final: "",
      units: "3.00",
      creditTo: ""
    }
  ];
  
  // populate table
  const tbody = document.querySelector('.grades-table tbody');
  
  // Loop gradesData array and create table rows
  gradesData.forEach(data => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${data.subjNo}</td>
      <td>${data.descriptiveTitle}</td>
      <td>${data.prelim}</td>
      <td>${data.midterm}</td>
      <td>${data.preFinal}</td>
      <td>${data.final}</td>
      <td>${data.units}</td>
      <td>${data.creditTo}</td>
    `;
    tbody.appendChild(tr);
  });
  
