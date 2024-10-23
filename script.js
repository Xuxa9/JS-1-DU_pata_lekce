const jmeno = prompt("Zadejte vaše jméno (bez diakritiky)","Jindrich")
const prijmeni = prompt("Zadejte vaše příjmení (bez diakritiky)","Novak")

const castJmena = jmeno.toLowerCase().trim().slice(0,3)
const castPrijmeni = prijmeni.toLowerCase().trim().slice(0,5)

const zprava = `
<p> Toto je váš nový e-mail pro přihlášení: </p>


<p> <strong> ${castPrijmeni}${castJmena}@fit.cvut.cz </strong> </p>
`
document.body.innerHTML += zprava