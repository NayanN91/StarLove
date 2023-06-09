  import React, { useState } from "react";
   //Importation des dépendances : Le code commence par importer le fichier de styles CSS requis pour le composant.
   import "./Inscription.css";

//Définition du composant Inscription : Le composant Inscription est défini comme une fonction.
   const Inscription = () => {

  {/*   Utilisation du hook useState : Le hook useState est utilisé pour créer des variables d'état qui vont contenir les valeurs
        des champs du formulaire (nom, prénom, email, username). Chaque variable d'état est initialisée avec une valeur vide. */ }
     const [nom, setNom] = useState("");
     const [prenom, setPrenom] = useState("");
     const [email, setEmail] = useState("");
     const [username, setUsername] = useState("");
  
     {/*Définition de la fonction handleSubmit : Cette fonction est appelée lorsque le formulaire est soumis. Elle empêche
     le comportement par défaut du formulaire (rechargement de la page) en utilisant e.preventDefault(). À ce stade, vous
     pouvez ajouter des actions supplémentaires, comme envoyer les données du formulaire au serveur. Ensuite,
     les champs du formulaire sont réinitialisés en les remettant à une valeur vide. */}
     const handleSubmit = (e) => {
       e.preventDefault(); 
       setNom("");
       setPrenom("");
       setEmail("");
       setUsername("");
     };

   {/*Retour du JSX : Le composant Inscription retourne du JSX, qui représente la structure du formulaire et ses éléments. */}
     return (
       <div className="inscription-container">

       {/* Champs du formulaire : Pour chaque champ du formulaire (nom, prénom, email, username),
        un élément <input> est créé. Chaque champ est lié à une variable d'état correspondante,
         et lorsqu'une valeur est saisie dans le champ, la fonction onChange est appelée pour
          mettre à jour la variable d'état avec la nouvelle valeur.*/}
          <div className="container">   
         <h2>Inscription</h2>
         <form onSubmit={handleSubmit}>
           <div>
             <label htmlFor="nom">Nom :</label>
             <input
               type="text"
               id="nom"
               value={nom}
               onChange={(e) => setNom(e.target.value)}
             />
           </div>
           <div>
             <label htmlFor="prenom">Prénom :</label>
             <input
               type="text"
               id="prenom"
               value={prenom}
               onChange={(e) => setPrenom(e.target.value)}
             />
           </div>
           <div>
             <label htmlFor="email">Email :</label>
             <input
               type="email"
               id="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
             />
           </div>
           <div>
             <label htmlFor="username">Nom d'utilisateur :</label>
             <input
               type="text"
               id="username"
               value={username}
               onChange={(e) => setUsername(e.target.value)}
             />
           </div>

           {/*Bouton d'inscription : Un bouton d'inscription est ajouté avec le texte "Inscription".
            Lorsqu'il est cliqué, le formulaire est soumis et la fonction handleSubmit est appelée. */}
           <button type="submit">Inscription</button>
         </form>
       </div>

       </div>
     );
   };
  
   {/*Exportation du composant : À la fin du fichier, le composant Inscription est exporté pour pouvoir être utilisé dans d'autres parties 
  de l'application. */}
   export default Inscription;
   




