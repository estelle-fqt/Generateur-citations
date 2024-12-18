const quotes = [
  {
    quote:
      "« On n’est jamais trop vieux pour se fixer un nouveau but ou pour faire de son rêve une réalité. »",
    author: "Clive Staples Lewis, écrivain britannique",
  },
  {
    quote:
      "« Tout ce que l’esprit de l’homme peut concevoir et croire, il peut l’accomplir. »",
    author: "Napoleon Hill, auteur américain",
  },
  {
    quote:
      "« L’optimiste est la foi qui mène au succès. Rien ne peut être accompli sans espoir ni confiance. »",
    author: "Helen Keller, auteure américaine",
  },
  {
    quote: "« L’optimiste, c’est voir les problèmes et croire aux remèdes. »",
    author: "Laurent Roman, auteur franco-belge",
  },
  {
    quote:
      "« La vie est un défi à relever, un bonheur à mériter, une aventure à tenter. »",
    author: "Mère Teresa, missionnaire en Inde",
  },
  {
    quote:
      "« Seulement ceux qui prendront le risque d’aller trop loin découvriront jusqu’où on peut aller. »",
    author: "Thomas Steam Eliot, poète",
  },
  {
    quote:
      "« Il n’y a qu’une chose qui puisse rendre un rêve impossible, c’est la peur d’échouer. »",
    author: "Paulo Coelho, écrivain brésilien",
  },
  {
    quote:
      "« Celui qui déplace les montagnes commence par retirer les petites pierres. »",
    author: "Confucius, philosophe chinois",
  },
  {
    quote:
      "« Rien n’est impossible, seules les limites de nos esprits définissent certaines choses comme inconcevables. »",
    author: "Marc Lévy, écrivain français",
  },
  {
    quote:
      "« Dans la vie, tout est une affaire de risque. Ce que vous devez apprendre, c’est comment le gérer. »",
    author: "Reid Hoffman, entrepreneur et fondateur de Linkedin",
  },
];

// Récupérer les éléments du DOM
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");

const button = document.getElementById("generate-btn");

// Ajout gestionnaire d'évènement au bouton
button.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * quotes.length); // Math.floor(arrondir à l'entier inférieur // Math.random(pour obtenir un nbr aléatoire entre 0 et 1)

  // récupérer la citation et l'auteur correspondant à l'index aléatoire
  const selectedQuote = quotes[randomIndex].quote;
  const selectedAuthor = quotes[randomIndex].author;

  // mettre à jour le contenu des éléments HTML
  quoteElement.textContent = selectedQuote; //mettre la citation
  authorElement.textContent = selectedAuthor;
});
