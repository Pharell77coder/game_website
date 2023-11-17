import './login.css';

function Login() {
  return (
    <div class="login">
        <form method="post">
            <h2>Connexion</h2><br></br>
            <label><b>Nom de l'utilisateur</b></label><br></br>
            <input type="text" placeholder="Entrer votre nom d'utilisateur"/><br></br>
        
            <label><b>Mot de passe</b></label><br></br>
            <input type="password" placeholder="Entrer votre mot de passe" /><br></br>
    
            <button type="submit">Se connecter</button><br></br>
            <label><input type="checkbox" checked="checked" name="remember" />Se souvenir de moi?</label>
        </form>
    </div>
  );
}

export default Login;
