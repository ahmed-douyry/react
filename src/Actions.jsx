export const AddOne =(etudiant)=>{
    return{
        type:'add',
        payload:etudiant
    }
}
export const Deleteone=(id)=>{
    return {
        type:'delete',
        payload:id
    }
}
export  const EditAction=(etudiant)=>{
    return{
        type:'edit',
        payload:etudiant
    }
}