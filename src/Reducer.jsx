const initialState = [
    {id:1,nom:'douyry',prenom:'ahmed' ,email:'ahmed.douyry@gmail.com',sexe:'masculin'},
    {id:2,nom:'jadid',prenom:'khadija' ,email:'khadija_jadid@gmail.com',sexe:'feminin'},
    {id:3,nom:'douyry',prenom:'youssef' ,email:'youssef.douyry@gmail.com',sexe:'masculin'}
]


export const reducer =  (state = initialState, { type, payload }) => {
  switch (type) {

  case 'add':
    return [...state,payload ]
case 'edit':
    const etud = state.find(e=>e.id == payload.id)
    etud.nom = payload.nom
    etud.prenom = payload.prenom
    etud.email = payload.email
    etud.sexe = payload.sexe
    return [...state]
case 'delete':
    return state.filter(s=>s.id!=payload)

  default:
    return state
  }
}
