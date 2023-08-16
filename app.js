 // JS pour l'animation de l'onglet de navigation
 const links = document.querySelectorAll('nav ul li a');

 links.forEach(link => {
     link.addEventListener('mouseover', () => {
         link.style.transform = 'rotate(360deg)';
         link.style.transition = 'transform 0.5s ease';
     });

     link.addEventListener('mouseout', () => {
         link.style.transform = 'rotate(0deg)';
         link.style.transition = 'transform 0.5s ease';
     });
 });
  // Récupérer tous les boutons "Ajouter au panier"
  const addToCartButtons = document.querySelectorAll('.add-to-cart');

  // Fonction de gestion du clic sur le bouton "Ajouter au panier"
  function addToCartButtonClick(event) {
      // Ici, vous pouvez implémenter la logique pour ajouter le produit au panier
      // par exemple : envoyer une requête au serveur, mettre à jour le panier en JavaScript, etc.
      
      // Rediriger l'utilisateur vers la page du panier
      window.location.href = "panier.html";
  }

  // Ajouter des écouteurs d'événements aux boutons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', addToCartButtonClick);
  });