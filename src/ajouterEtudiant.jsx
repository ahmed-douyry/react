import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AddOne } from "./Actions";

export const AjouterEtudiant = () => {
  const { laid } = useParams();
  const [id, setID] = useState(Number(laid) + 1);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [sexe, setSexe] = useState("");
  const dispatcher = useDispatch();
  const navigate = useNavigate();

  const revenir = () => {
    navigate("/");
  };

  const ajouter = () => {
    const etudiant = { id: id, nom: nom, prenom: prenom, email: email, sexe: sexe };
    setID(id + 1);
    dispatcher(AddOne(etudiant));
    navigate("/");
  };

  return (
    <div className="container  " >
        
      <h1>Ajouter Étudiant</h1>
      <form  >
        <div className="mb-3">
          <label htmlFor="id" className="form-label">
            ID
          </label>
          <input type="text" className="form-control w-50" id="id" value={id} readOnly />
        </div>

        <div className="mb-3">
          <label htmlFor="nom" className="form-label">
            Nom
          </label>
          <input type="text" className="form-control w-50" id="nom" onChange={(e) => setNom(e.target.value)} placeholder="Taper votre nom" />
        </div>

        <div className="mb-3">
          <label htmlFor="prenom" className="form-label">
            Prénom
          </label>
          <input type="text" className="form-control w-50" id="prenom" onChange={(e) => setPrenom(e.target.value)} placeholder="Taper votre prénom" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control w-50" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="exemple@exemple.com" />
        </div>

        <div className="mb-3">
          <label className="form-label">Sexe</label>
          <div className="form-check">
            <input type="radio" className="form-check-input" name="sexe" value="masculin" onClick={() => setSexe('masculin')} />
            <label className="form-check-label">Masculin</label>
          </div>
          <div className="form-check">
            <input type="radio" className="form-check-input" name="sexe" value="Feminin" onClick={() => setSexe('Feminin')} />
            <label className="form-check-label">Féminin</label>
          </div>
        </div>

        <button type="button" className="btn btn-primary" onClick={ajouter}>
          Ajouter
        </button>
        <button type="button" className="btn btn-secondary ms-2" onClick={revenir}>
          Revenir
        </button>
      </form>
    </div>
  );
};
