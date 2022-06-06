document.querySelector("form").addEventListener("submit",Submit);
function Submit(event) {
    event.preventDefault();

    let studentName = document.getElementById("name").value;
    let employeeId = document.getElementById("employeeID").value;
    let department = document.getElementById("department").value;
    let Experience = document.getElementById("exp").value;
    let Email = document.getElementById("email").value;
    let mobile = document.getElementById("mbl").value;

    let tbody_tr = document.createElement("tr");
    let tbody_tr_td1 = document.createElement("td");
    tbody_tr_td1.innerText = studentName;
    let tbody_tr_td2 = document.createElement("td");
    tbody_tr_td2.innerText = employeeId;
    let tbody_tr_td3 = document.createElement("td");
    tbody_tr_td3.innerText = department;
    let tbody_tr_td4 = document.createElement("td");
    tbody_tr_td4.innerText = Experience;
    let tbody_tr_td5 = document.createElement("td");
    tbody_tr_td5.innerText = Email;
    let tbody_tr_td6 = document.createElement("td");
    tbody_tr_td6.innerText = mobile;
    let tbody_tr_td7 = document.createElement("td");
    if (Experience > Number(5)) {
        role = "Senior";
    }
    else if (Experience > Number(2) && Experience < Number(5)) {
        role = "Junior";
    }
    else if (Experience <= Number(1)) {
        role = "Fresher";
    }
    tbody_tr_td7.innerText = role;

    let tbody_tr_td8 = document.createElement("td");
    tbody_tr_td8.innerText = Delete;
    tbody_tr_td8.addEventListener("click", Del);

    function del() {
        tbody_tr.remove();
    }
    tbody_tr.append(tbody_tr_td1, tbody_tr_td2, tbody_tr_td3, tbody_tr_td4, tbody_tr_td5, tbody_tr_td6, tbody_tr_td7, tbody_tr_td8);
    document.getElementsByTagName("tbody").append(tbody_tr);
}

