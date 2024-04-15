const another_table_data2 = [
    {
        SUBJ: "SUBJ NO.",
        DESC: "DESCRIPTIVE TITLE",
        P: "PRELIM",
        M: "MIDTERM",
        PREF: "PRE-FINAL",
        FIN: "FINAL",
        UN: "UNITS",
        CRE: "CREDIT TO",
    },
    {
        Column1: "CS 2240<br>(4-111)",
        Column2: "APPLICATIONS DEVELOPMENT AND EMERGING TECHNOLOGIES<br>(* 12:25P-1:55P F610 TTH * 3:05P-5:05P F610 F*)",
        Column3: "",
        Column4: "",
        Column5: "",
        Column6: "",
        Column7: "3.00",
        Column8: "",
    },
    {
        Column1: "GE 1213<br>(16-231)",
        Column2: "LIFE AND WORKS OF RIZAL<br>(* 2:05P-3:35P F306 TTH *)",
        Column3: "",
        Column4: "",
        Column5: "",
        Column6: "",
        Column7: "3.00",
        Column8: "",
    },
    {
        Column1: "GE 3219<br>(16-354)",
        Column2: "ELECTIVE 2<br>(* 12:25P-1:55P F401 MW *)",
        Column3: "",
        Column4: "",
        Column5: "",
        Column6: "",
        Column7: "3.00",
        Column8: "",
    },
    {
        Column1: "IT 2239<br>(4-107)",
        Column2: "FUNDAMENTALS OF DATABASE SYSTEMS<br>(* 9:50A-11:50A F605 F * 2:05P-3:35P F605 MW *)",
        Column3: "",
        Column4: "",
        Column5: "",
        Column6: "",
        Column7: "3.00",
        Column8: "",
    },
    {
        Column1: "IT 2241<br>(4-113)",
        Column2: "EVENT-DRIVEN PROGRAMMING<br>(* 5:50P - 8:20P F610 TTH *)",
        Column3: "",
        Column4: "",
        Column5: "",
        Column6: "",
        Column7: "3.00",
        Column8: "",
    },
    {
        Column1: " ",
        DESC: "Quality Point Index (Q.P.I)<br>or Weighted Percentage Average (W.P.A) =",
        Column3: "",
        Column4: "",
        Column5: "",
        Column6: "",
        UN: "0",
        Column8: "",
    },
    // Add more rows as needed
];

const anotherTable2 = document.getElementById('another-table2').getElementsByTagName('tbody')[0];

for (let rowData of another_table_data2) {
    const newRow = anotherTable2.insertRow(-1);

    for (let field in rowData) {
        const newCell = newRow.insertCell();

        if (field === 'SUBJ'|| field === 'DESC'|| field === 'P'|| field === 'M'|| field === 'PREF'||
        field === 'FIN'|| field === 'UN'|| field === 'CRE'){
            newCell.innerHTML = "<b>" + rowData[field] + "</b>";
        } else {
            newCell.innerHTML = rowData[field];
        }
    }
}