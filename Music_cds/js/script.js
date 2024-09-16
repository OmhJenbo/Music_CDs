const cdForm = document.getElementById("cdForm");
const cdList = document.querySelector("#cdList>tbody");

function addCd(author, title, year) {
    const newRow = document.createElement("tr");

    newRow.innerHTML = `<td>${author}</td>
                        <td>${title}</td>
                        <td>${year}</td>
                        <td><button class="deleteButton">Delete</button>
                        `;
    

    cdList.appendChild(newRow);

    const deleteRow = newRow.querySelector(".deleteButton");
    deleteRow.addEventListener("click", function() {
        cdList.removeChild(newRow);
    });
};


cdForm.addEventListener("submit", function(f) {
    f.preventDefault();

    const author = document.getElementById("author").value;
    const title =  document.getElementById("title").value;
    const year = document.getElementById("year").value;



    addCd(author, title, year);
})