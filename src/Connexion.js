import React, { useState } from 'react';

function Connexion() {
  // États pour stocker les valeurs des champs
  const [email, setEmail] = useState('');
  const [mdp, setMdp] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Email: ${email}, Mot de passe: ${mdp}`);
  }

  return (
    <div>
      <h1>Connexion</h1>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <div>
          <label>Mot de passe:</label>
          <input 
            type="password" 
            value={mdp}
            onChange={(e) => setMdp(e.target.value)}
          />
        </div>
        
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Connexion;