<!doctype html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="form.css">
        <title> Formulaire </title>
    </head>
<body>
    <header>
        <main>
        <?php
        $avezVous = htmlentities($_POST['avezVous']);
        $combien = htmlentities($_POST['cb']);
        $nom = htmlentities($_POST['noms']);
        $espèce = htmlentities($_POST['espèce']);
        if($avezVous == "non"){
            echo "Vous n'avez pas d'animaux!";
        } else if ($combien == 1){
            echo "Vous êtes sûr d'avoir un seul animal?";
        } else if($combien != 2){
            echo "Vous avez trop d'animaux! Le plan gratuit ne permet que de digitaliser 2 animaux!";
        } else if ($nom != "Niet, Lulu" && $nom != "Lulu, Niet" && $nom != "niet, lulu" && $nom != "lulu, niet" && $nom != "Niet, Petit Lulu" && $nom != "Petit Lulu, Niet" && $nom != "niet, petit lulu" && $nom != "petit lulu, niet"){
            echo "Vous devez utiliser le nom officiel de vos animaux!";
        } else if ($espèce != "chat"){
            echo "Pour l'instant, seuls les chats peuvent être digitalisés!";
        }
        ?>
        </main>
</body>