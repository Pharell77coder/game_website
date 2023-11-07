const users = [
    {nom: "John Doe", elo: 2835},
    {nom: "Jonathan Doe", elo: 2769},
    {nom: "Joe Doe", elo: 2823},
    {nom: "Joey Doe", elo: 2775},
    {nom: "Johnny Doe", elo: 2789}
]

function trieClassement() {
    users.sort((a, b) => {
        return b.elo - a.elo;
    });
}

trieClassement();

let classementTable = document.createElement('table');
let classementHeader = document.createElement('tr');
let classementHeaderCells = ['Position','Utilisateur', 'Elo'];
classementHeaderCells.forEach(cellText => {
    const cell = document.createElement('th');
    cell.textContent = cellText;
    classementHeader.appendChild(cell);
  });
classementTable.appendChild(classementHeader);

users.forEach((user, index) => {

const classementRow = document.createElement('tr');
const classementRowCells = [index + 1, user.nom, user.elo];
classementRow.classList.add('classement-row-' + (index + 1));
classementRowCells.forEach(cellText => {
    const cell = document.createElement('td');
    cell.textContent = cellText;
    classementRow.appendChild(cell);
    });
    classementTable.appendChild(classementRow);
});

const classementContainer = document.getElementById('classement');
classementContainer.appendChild(classementTable);

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
