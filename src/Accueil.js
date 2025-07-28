import React from 'react';
import { Link } from 'react-router-dom';

function Accueil() {
  return (
    <div>
      <h1>Mon Atelier de Couture</h1>
      
      <p>Bienvenue dans votre application de gestion</p>
      
      <div>
        <Link to="/connexion">
          <button>Connexion</button>
        </Link>
        
        <Link to="/apropos">
          <button>À propos</button>
        </Link>
      </div>
    </div>
  );
}

export default Accueil;