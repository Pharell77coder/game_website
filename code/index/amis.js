const users_friends = [
    {nom: "John Doe", status: "en ligne"},
    {nom: "Jonathan Doe", status: "en ligne"},
    {nom: "Joe Doe", status: "déconnecter"},
    {nom: "Joey Doe", status: "déconnecter"},
    {nom: "Johnny Doe", status:"déconnecter"}
]

let amisTable = document.createElement('table');
let amisHeader = document.createElement('tr');
let amisHeaderCells = ['Utilisateur', 'Status'];
amisHeaderCells.forEach(cellText => {
    const cell = document.createElement('th');
    cell.textContent = cellText;
    amisHeader.appendChild(cell);
  });
amisTable.appendChild(amisHeader);

users_friends.forEach((user) => {

const amisRow = document.createElement('tr');
const amisRowCells = [user.nom, user.status];
amisRowCells.forEach(cellText => {
    const cell = document.createElement('td');
    cell.textContent = cellText;
    amisRow.appendChild(cell);
    });
    amisTable.appendChild(amisRow);
});

const amisContainer = document.getElementById('amis');
amisContainer.appendChild(amisTable);