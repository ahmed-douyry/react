import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { EditAction } from "./Actions";

export const ModifierEtudiant = () => {
    const { id } = useParams();
    const etudiant = useSelector(state => state.find(e => e.id == id));
    const [nom, setNom] = useState(etudiant.nom);
    const [prenom, setPrenom] = useState(etudiant.prenom);
    const [sexe, setSexe] = useState(etudiant.sexe);
    const [email, setEmail] = useState(etudiant.email);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const enregistrer = () => {
        const etudiant = { id: id, nom: nom, prenom: prenom, sexe: sexe, email: email };
        dispatch(EditAction(etudiant));
        navigate('/');
        
    };

    const annuler = () => {
        navigate('/');
    };

    return (
        <div className="container mt-5">
            <form>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Numéro</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="text" value={id} readOnly />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Nom</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="text" value={nom} onChange={e => setNom(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Prénom</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="text" value={prenom} onChange={e => setPrenom(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Sexe</label>
                    <div className="col-sm-10">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="sexe" value="masculin" checked={sexe === 'masculin'} onChange={() => setSexe('masculin')} />
                            <label className="form-check-label">Masculin</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="sexe" value="feminin" checked={sexe === 'feminin'} onChange={() => setSexe('feminin')} />
                            <label className="form-check-label">Féminin</label>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row mt-3">
                    <div className="col-sm-10 offset-sm-2">
                        <button type="button" onClick={enregistrer} className='btn btn-primary'>Enregistrer les modifications</button>
                        <button type="button" onClick={annuler} className='btn btn-danger ml-2'>Annuler</button>
                    </div>
                </div>
            </form>
        </div>
    );
};
