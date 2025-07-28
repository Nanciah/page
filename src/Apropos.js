import React from 'react';
import { Link } from 'react-router-dom';

function Apropos() {
  return (
    <div>
      <h1>À propos</h1>
      
      <p>Cette application aide à gérer un atelier de couture</p>
      
      <Link to="/">
        <button>Retour</button>
      </Link>
    </div>
  );
}

export default Apropos;