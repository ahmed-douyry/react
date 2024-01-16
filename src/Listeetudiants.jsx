import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Deleteone } from "./Actions";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import { useEffect } from "react";

export const ListeEtudiants = () => {
  const Liste = useSelector((r) => r);
  const laid = Liste.length > 0 ? Liste[Liste.length - 1].id : 0;
  const disptach = useDispatch();
  const [recherche,setrecherche]= useState('')
    const [etudiants,setEtudiants] = useState([])
    useEffect(()=>setEtudiants(Liste),[Liste])
const rechercher =() =>{
    setEtudiants(Liste.filter(e=>e.nom==recherche))
}
const initialiser =() =>{
    setEtudiants(Liste)
}
  function supprimer(id) {
    const ok = window.confirm("Êtes-vous sûr de vouloir supprimer cet étudiant ?");
    ok && disptach(Deleteone(id));
  }

  return (
    <>
      <div className="container mt-5">
      <fieldset className="border p-3">
    <legend className="fs-5">Barre de recherche</legend>
    <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Entrez votre recherche..." onChange={e => setrecherche(e.target.value)} />
        <button type="button" className="btn btn-primary" onClick={rechercher}>Rechercher</button>
        <button type="button" className="btn btn-secondary" onClick={initialiser}>Réinitialiser</button>
    </div>
</fieldset>



        <Link to={`/ajouterEtudiant/${laid}`}>
          <button type="button" className="btn btn-success mt-3">
            Ajouter étudiant
          </button>
        </Link>

        <table className="table table-hover mt-4">
          <thead className="table-success">
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Email</th>
              <th>Sexe</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {etudiants.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.nom}</td>
                <td>{e.prenom}</td>
                <td>{e.email}</td>
                <td>{e.sexe}</td>
                <td>
                  <button type="button" className="btn btn-danger" onClick={() => supprimer(e.id)}>
                    Supprimer
                  </button>
                </td>
                <td>
                  <Link to={`modifier/${e.id}`}>
                    <button type="button" className="btn btn-primary">
                      Éditer
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
