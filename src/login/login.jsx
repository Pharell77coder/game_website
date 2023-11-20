import React from 'react'

function login() {
  return (
    <div class="card">      
      <form method="post">
        <h2>Connexion</h2><br></br>
        <label><b>Nom de l'utilisateur</b></label><br></br>
        <input type="text" placeholder="Entrer votre nom d'utilisateur" /><br></br>

        <label><b>Mot de passe</b></label><br></br>
        <input type="password" placeholder="Entrer votre mot de passe" /><br></br>

        <button type="submit">Se connecter</button><br></br>
     </form>
    </div>
  )
}

export default login
