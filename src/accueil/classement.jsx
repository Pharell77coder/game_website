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

function Ranking() {
    return (
        <div className="table">
            <h3>Classement</h3>
            <table>
                <tr>
                    <th>Position</th>
                    <th>Pseudo</th>
                    <th>Elo</th>
                </tr>
                {users.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{key+1}</td>
                            <td>{val.nom}</td>
                            <td>{val.elo}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}

export default Ranking;