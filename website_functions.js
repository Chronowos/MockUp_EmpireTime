function getTotalOfRow(rowValuesName, rowNumber) {
    var totalSum = 0;

    var listOfValues = document.getElementsByClassName(rowValuesName);

    for (var i = 0; i < listOfValues.length; i++) {
        totalSum += parseInt(listOfValues.item(i).value);
    }
    document.getElementById("data_table").rows[rowNumber].cells[12].innerHTML = totalSum.toString();

}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function searchFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("mySearchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("data_table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function openCalendar() {
    var pic = document.getElementById("calendar_pic");
    if (pic.style.display === "none") {
        pic.style.display = "block";
    } else {
        pic.style.display = "none";
    }
}