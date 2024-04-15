const registrationData = [
    {
        CODE: "CODE",
        SUBJ: "SUBJ. NO",
        DESC: "DESCRIPTIVE TITLE",
        S: "SCHEDULE",
        TL: "TRANSCRIPT LOAD",
    },
    {
        CODE: "4-109",
        SUBJ: "IT 2242",
        DESC: "STATISTICS FOR RESEARCH",
        S: "9:20A-10:50A D404 MW",
        TL: "3.00",
    },
    {
        CODE: "16-354",
        SUBJ: "GE 3219",
        DESC: "ELECTIVE 2",
        S: "12:25P-1:55P F401 MW",
        TL: "3.00",
    },
    {
        CODE: "16-231",
        SUBJ: "GE 1213",
        DESC: "LIFE AND WORKS OF RIZAL",
        S: "2:05P-3:35P F306 TTH",
        TL: "3.00",
    },
    {
        CODE: "4-107",
        SUBJ: "IT 2239",
        DESC: "FUNDAMENTALS OF DATABASE SYSTEMS",
        S: "9:50A-11:05A F605 F 2:05P-3:35P F605 MW",
        TL: "3.00",
    }
];

document.addEventListener("DOMContentLoaded", function() {
    const registrationData = [
        // Your registration data array here
    ];

    // populate table
    const tbody = document.querySelector('.registration-table tbody');

    // Loop through the registrationData array and create table rows dynamically
    registrationData.forEach(data => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${data.CODE}</td>
            <td>${data.SUBJ}</td>
            <td>${data.DESC}</td>
            <td>${data.S}</td>
            <td>${data.TL}</td>
        `;
        tbody.appendChild(tr);
    });
});
