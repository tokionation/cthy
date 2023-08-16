<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nom = $_POST["nom"];
    $email = $_POST["email"];
    $produit = $_POST["produit"];
    $quantite = $_POST["quantite"];
    $adresse = $_POST["adresse"];
    
    $to = "didikonate888@gmail.com"; // Remplacez par votre adresse Gmail
    $subject = "Nouvelle commande de $nom";
    $message = "Nom: $nom\nEmail: $email\nProduit: $produit\nQuantité: $quantite\nAdresse: $adresse";
    
    // Envoi de l'e-mail
    $result = mail($to, $subject, $message);
    
    if ($result) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false]);
    }
}
?>

