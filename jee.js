// TP JS: table : last name first name gender date of birth actions.
// actions(update (nouveau form),delete(demande de confirmation !!!)).
// trier par tout.


var etudiants = [
    {
        'nom': "Mohamed",
        'prenom': "Beirouk", 
        'genre': "Homme",
        'dtNaiss': "08/08/1998",
    },
    {
        'nom': "medos",
        'prenom': "le goss", 
        'genre': "Homme",
        'dtNaiss': "08/08/2000",
    },
    {
        'nom': "meimouna",
        'prenom': "Beirouk", 
        'genre': "Femme",
        'dtNaiss': "10/10/2001",
    },
    {
        'nom': "ramla",
        'prenom': "Beirouk", 
        'genre': "Femme",
        'dtNaiss': "15/08/2005",
    },
    
  ];
function fetch1(etudiants) {
    
    for (var i in etudiants) {
       var ligne =
        `

        <tr>
            <td> ${etudiants[i].nom}</td>
            <td> ${etudiants[i].prenom}</td>
            <td> ${etudiants[i].genre}</td>
            <td> ${etudiants[i].dtNaiss}</td>
        </tr>

        `
        var table = $('#t1body')
        table.append(ligne)
    }
}  
const search = () => {

    let filter = document.getElementById('chercher').value.toUpperCase();

}




//https://www.youtube.com/watch?v=DzXmAKdEYIs&t=78s








window.onload = function() {
    fetch1(etudiants);
  };


  let aj = document.getElementById("ajouter")

  aj.addEventListener("click", function(e) {
      
      t1.style.display = "none"
      aj.style.display = "none"
      
      document.getElementById("MyForm").style.display = "block"
      
       
  })

  let ajouteyt = document.getElementById("submit")

  ajouteyt.addEventListener("click", function(e) {
      
      t1.style.display = "block"
      aj.style.display = "block"
      
      document.getElementById("MyForm").style.display = "none"
      
       
  })






