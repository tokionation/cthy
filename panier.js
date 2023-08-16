function envoyerCommande(event) {
    event.preventDefault(); // Empêcher le formulaire de se soumettre normalement
    
    const form = event.target; // Récupérer le formulaire soumis
    const formData = new FormData(form); // Créer un objet FormData à partir du formulaire
    
    // Envoi des données du formulaire au serveur
    fetch('traitement.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('La commande a été envoyée avec succès !'); // Afficher un message de succès
        } else {
            alert('Erreur lors de l\'envoi de la commande. Veuillez réessayer.'); // Afficher un message d'erreur
        }
    })
    .catch(error => {
        console.error('Une erreur s\'est produite :', error);
    });
}