<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wydruk</title>

    <style>
        table, body 
        {
            min-height: 100vh;
        }
        table
        {
            margin: auto;
            width: 1200px;
        }

        table, th ,td 
        {
            border: 3px solid black;
            border-collapse: collapse;
        }

        th, td {padding: 8px;}
        td 
        {
            width: 50%;
        }
    </style>
</head>

<?php

    $fName = $_POST["fName"];
    $lName = $_POST["fName"];

    $country = $_POST["kraj"];
    $adress = $_POST['adres'];
    $post_code = $_POST["kd_poczta"];
    $email = $_POST["email"];
    $phone_num = $_POST["telefon"];
    $pesel = $_POST['pesel'];

    $card_num = $_POST['nr_karty'];
    $card_term = $_POST['trm_waz_karty'];
    $card_sec_code = $_POST['kod_bezp'];
    $bill = $_POST['sumaRel'];
?>

<body>
    <table>
        <thead>
            <th colspan='2'> Potwierdzenie zakupu ze sklepu Kwiatlobiks </th>
        </thead>
        <tbody>
            <tr>
                <?= "<td>Wartość zakupu</td><td> $bill </td>" ?>
            </tr>
            <tr>
               <?="<td>Imie i nazwisko</td><td> $fName $lName</td>" ?>
            </tr>
            <tr>
               <?="<td>Kraj</td><td> $country</td>" ?>
            </tr>
            <tr>
               <?="<td>Adres</td><td> $adress</td>" ?>
            </tr>
            <tr>
               <?="<td>Kod pocztowy</td><td> $post_code</td>" ?>
            </tr>
            <tr>
               <?="<td>Adres poczty e-mail</td><td> $email</td>" ?>
            </tr>
            <tr>
               <?="<td>Numer telefonu</td><td> $phone_num</td>" ?>
            </tr>
            <tr>
               <?="<td>Pesel</td><td> $pesel</td>" ?>
            </tr>
        </tbody>
        <tfoot>
            <td colspan='2'>Odpowiadasz w pełni za swoje decyzje. Zwrotów nie przyjmujemy, chyba że zostanie zapłacona równowatosć 50% produktów </td>
        </tfoot>
    </table>

</body>
</html>