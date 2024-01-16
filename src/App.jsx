import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ListeEtudiants } from './Listeetudiants';
import { ModifierEtudiant } from './ModifierEtudiant';
import  { AjouterEtudiant } from './ajouterEtudiant';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index path='/' element={<ListeEtudiants />}/>
      <Route  path='/modifier/:id' element={<ModifierEtudiant />}/>
      <Route  path='/ajouterEtudiant/:laid' element={<AjouterEtudiant />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
