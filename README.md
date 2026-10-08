# Keynotes Apple — 2007 → 2026

Dashboard statique qui réunit **78 keynotes et événements Apple**, du Macworld
de janvier 2007 (présentation de l’iPhone) aux annonces attendues en octobre 2026.

## Lancer

Ouvrez `index.html` directement dans un navigateur, ou servez le dossier :

```bash
python3 -m http.server 4321
```

Aucune dépendance, aucun build.

## Ce qu’il y a dedans

| | |
|---|---|
| **Timeline** | Groupée par année, avec un rail daté et une pastille colorée par type d’événement |
| **Grille** | Même contenu en cartes, 1 à 4 colonnes selon la largeur |
| **Recherche** | Plein texte sur le titre, le résumé, les annonces, le lieu et les intervenants — insensible aux accents |
| **Filtres** | Type × produit × année, combinables ; les compteurs de chaque pastille se recalculent en fonction des autres filtres actifs |
| **Fiche** | Lecteur YouTube intégré, liste des annonces, lieu, intervenants, navigation précédent/suivant |
| **Thème** | Clair / sombre, suit le système par défaut, choix mémorisé |

Raccourcis : `/` pour la recherche, `←` `→` pour naviguer entre les fiches, `Échap` pour fermer.
Chaque événement a une URL profonde : `index.html#2023-wwdc`.

## Fichiers

```
index.html          structure de la page
assets/styles.css   design system (tokens, thèmes, composants)
assets/data.js      les 78 événements + taxonomies
assets/app.js       filtres, rendu, modale
```

## Les données

Chaque événement suit ce format :

```js
{
  id: "2023-wwdc",
  date: "2023-06-05",
  title: "WWDC 2023",
  tagline: "« One more thing » : Vision Pro",
  type: "wwdc",              // macworld | wwdc | iphone | special | press
  venue: "Apple Park",
  host: "Tim Cook, Craig Federighi, Mike Rockwell",
  video: "GYkq9Rgoj8E",      // identifiant YouTube, ou null
  videoSource: "…",          // affiché sous le lecteur si ce n’est pas la chaîne Apple
  products: ["vision", "mac", "iphone", "silicon", "software"],
  summary: "…",
  announcements: ["…"],
  link: "https://…"          // optionnel
}
```

Pour ajouter un événement, insérez-le dans `EVENTS` (le tableau est trié par date
croissante) — l’interface, les compteurs et les statistiques se mettent à jour seuls.

### À propos des vidéos

Les 69 identifiants YouTube ont été vérifiés un par un via l’API oEmbed : tous
répondent et autorisent l’intégration. Apple n’héberge ses keynotes sur sa chaîne
qu’à partir de 2013 environ ; avant, les vidéos viennent d’archives tierces, ce qui
est signalé sous le lecteur. Les 8 événements sans vidéo sont des annonces faites
par communiqué de presse, sans keynote filmé.

L’événement « Welcome home » du 13 octobre 2026 est confirmé par Apple et marqué
**à venir** ; les produits listés viennent de Bloomberg, pas d’Apple.

---

Projet indépendant, sans lien avec Apple Inc.
