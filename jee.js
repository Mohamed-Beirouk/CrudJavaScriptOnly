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

let brk = -1;
function fetch1(etudiants) {
    
    for (var i in etudiants) {
       var ligne =
        `

        <tr>
            <td> ${etudiants[i].nom}</td>
            <td> ${etudiants[i].prenom}</td>
            <td> ${etudiants[i].genre}</td>
            <td> ${etudiants[i].dtNaiss}</td>
           
            <td>
            <button type="button" class="btn btn-outline-warning" onclick="modifier(${i})" id="modifier">Modifier</button>
            <button type="button" class="btn btn-danger">Suprimer</button>
            </td>
        </tr>

        `
        var table = $('#t1body')
        table.append(ligne)
    }
}  
const search = () => {

    let filter = document.getElementById('chercher').value.toUpperCase();

}

window.onload = function() {
    fetch1(etudiants);
  };


  let ajouter = document.getElementById("ajouter")
  let chercher = document.getElementById("chercher")

 

function modifier(i){
      
    t1.style.display = "none"
    ajouter.style.display = "none"
    chercher.style.display = "none"
    document.getElementById("MyForm").style.display = "none"
    document.getElementById("MyFormedit").style.display = "block"

    document.getElementById("nomm").value = etudiants[i].nom
    document.getElementById("prenomm").value = etudiants[i].prenom
    document.getElementById("genree").value = etudiants[i].genre
    document.getElementById("datee").value = etudiants[i].date
    brk = i;
    
    
}

  ajouter.addEventListener("click", function(e) {
      
      t1.style.display = "none"
      ajouter.style.display = "none"
      chercher.style.display = "none"
      document.getElementById("MyFormedit").style.display = "none"
      document.getElementById("MyForm").style.display = "block"
      
       
  })

  let ajouteyt = document.getElementById("submit")

  ajouteyt.addEventListener("click", function(e) {
        ajouter.style.display = "block"
        chercher.style.display = "block"
        t1.style.display = "block"
        
      
      document.getElementById("MyForm").style.display = "none"
      
       
  })
  let save = document.getElementById("submit")
  save.addEventListener("click", function() {
  
    const d = new Date();
    const da = d.getDate() +'/'+ (d.getMonth()+1) +'/'+ d.getFullYear()
  
      let etu = {
          nom:  document.getElementById("nom").value,
          prenom: document.getElementById("prenom").value,
          genre: document.getElementById("genre").value,
          dtNaiss: da
      }
       $("#t1body").empty();
      etudiants.push(etu)
      fetch1(etudiants)
    })


    let modifeyt = document.getElementById("submitedit")

    modifeyt.addEventListener("click", function(e) {
          ajouter.style.display = "block"
          chercher.style.display = "block"
          t1.style.display = "block"
          
        
        document.getElementById("MyFormedit").style.display = "none"
        
         
    })
    let modi = document.getElementById("submitedit")

    modi.addEventListener("click", function() {
    
    
        etudiants[brk].nom = document.getElementById("nomm").value 
        etudiants[brk].prenom = document.getElementById("prenomm").value 
        etudiants[brk].genre = document.getElementById("genree").value  
        etudiants[brk].date = document.getElementById("datee").value 
       
    $("#t1body").empty();
        
    fetch1(etudiants)
    })

    
