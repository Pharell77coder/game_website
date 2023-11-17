const users_friends = [
    {nom: "John Doe", status: "en ligne"},
    {nom: "Jonathan Doe", status: "en ligne"},
    {nom: "Joe Doe", status: "déconnecter"},
    {nom: "Joey Doe", status: "déconnecter"},
    {nom: "Johnny Doe", status:"déconnecter"}
]

function Friends() {
    return (
        <div className="table">
            <h3>Liste amis</h3>
            <table>
                <tr>
                    <th>Pseudo</th>
                    <th>Status</th>
                </tr>
                {users_friends.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.nom}</td>
                            <td>{val.status}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}

export default Friends;