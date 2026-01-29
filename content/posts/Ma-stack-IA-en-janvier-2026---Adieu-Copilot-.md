---
title: Ma stack IA en janvier 2026 - Adieu Copilot ?
date: 2026-01-29T00:00:00.000Z
updatedAt: 2026-01-29T00:00:00.000Z
---

Pour ce second article, je vous propose un suivi de l'évolution de ma "stack IA". Si vous avez raté le début de l'aventure, je vous invite à lire [mon premier article ici](/blog/ma-stack-ia-decembre-2025).

Tout ne s'est pas passé comme prévu. Il m'est arrivé un petit souci de quota... ou plutôt de conformité. L'outil que j'utilisais, **OpenCode**, ne respectait pas strictement les conditions d'utilisation de l'API Github Copilot. Résultat : des bannissements de comptes en cascade. Si OpenCode a depuis corrigé le tir avec une intégration officielle, le mal était fait pour mon quota, épuisé en seulement 4 jours alors que je ne l'avais jamais atteint auparavant.

J'ai donc regardé du côté des providers à dispo, je ne voulais pas payer à l'usage. J''ai donc opté pour un coding plan de [Z.AI](http://z.ai/).

Pourquoi eux ? Un quota très généreux, un prix dérisoire, et l'accès au modèle **GLM-4.7**, qui a fait beaucoup de bruit lorsqu'il était gratuit sur OpenCode pendant plus d'un mois.

## Z.AI : Low cost, High volume

Z.AI propose plusieurs formules (Lite, Pro, Max). J'ai opté pour le **plan Pro**, qui offre une vitesse de génération 40 à 60% supérieure au plan Lite. Ce qui est intéressant, c'est leur modèle de gestion des limites : **le quota se réinitialise toutes les 5 heures**. C'est donc virtuellement "illimité" pour un usage humain normal ; impossible de finir le mois à sec.

Les modèles mis à disposition sont hébergés par Z.AI eux-mêmes ([liste exhaustive](https://z.ai/model-api)) :

* **GLM-4.7** : Le flagship, orienté raisonnement et coding.
* **GLM-4.6V** : Le modèle multimodal avec vision (très utile pour analyser des captures d'écran d'UI).
* **GLM-4-6-Flash** : Plus léger, "gratuit" et rapide, pour les tâches simples.

J'ai principalement exploité GLM-4.7. Malgré une utilisation intensive, je n'ai jamais touché la limite du quota, pour plusieurs raisons :

1. **Le volume est énorme.**
2. **La vitesse est moyenne** (80-100 tokens/s), ce qui limite mécaniquement la consommation.
3. **La stabilité du service** laisse parfois à désirer (quelques temps d'arrêt).
4. **Un bug de parser spécifique** : GLM-4.7 a tendance à insérer des blocs d'appel d'outils (`call_block`) à l'intérieur de ses blocs de réflexion (`thinking_block`), ce qui fait planter les clients qui ne s'y attendent pas.
5. **La concurrence est limitée** : un seul processus concurrent ! Une spec qui n'est pas mise en avant, pas moyen de l'utiliser en simultanés 24h/24h sur 3 terminals.

## Est-ce que GLM-4.7 performe bien ?

Soyons honnêtes : **Non, pas intrinsèquement.**

Il n'est pas le plus rapide et, en termes de "QI pur", il reste légèrement moins intelligent que Claude 3.5 Sonnet. Bien qu'il annonce un contexte de 200K tokens, j'ai remarqué une dégradation nette des performances autour des 100K. Passé ce seuil, le contexte est pollué et le modèle commence à manquer de pertinence.

## Alors on en fait quoi ?

Si le modèle est moyen, pourquoi l'utiliser ? C'est là qu'intervient l'outillage.

Avez-vous entendu parler de **[oh-my-opencode](https://github.com/code-yeongyu/oh-my-opencode)** ? C'est un toolkit complet pour OpenCode qui change totalement la donne. Il apporte :

* De la **parallélisation** des tâches.
* Des agents en **background** dédiés à la recherche.
* Une boucle de travail autonome.

C'est particulièrement efficace avec son agent principal, **Sisyphus**. Comme son nom l'indique, il ne s'arrête pas. Contrairement à un usage classique où l'on attend une réponse parfaite du premier coup, OhMyOpenCode utilise une approche itérative.

La version 3 du toolkit intègre des boucles de vérification (loops) : l'agent travaille, teste, échoue, corrige, et recommence, parfois pendant plusieurs heures, jusqu'à ce que :

1. L'objectif soit atteint.
2. Aucune spec définie ne soit ignorée.
3. Tous les tests passent au vert.

## Résultat : Quantité vs Qualité

J'ai voulu tester si **beaucoup de crédits** (Z.AI) pouvaient compenser un modèle **moins intelligent** (GLM-4.7).

La réponse est **oui**. J'ai été agréablement surpris de voir à quel point le cadre rigide imposé par OhMyOpenCode corrige les défauts du modèle. Là où GLM-4.7 seul aurait abandonné ou produit du code erroné, l'acharnement de l'agent Sisyphus finit par produire un résultat fonctionnel. C'est plus long, mais ça marche.

## Faut-il abandonner Github Copilot ?

**Non !** (Enfin, j'espère).

Ces outils ne répondent pas au même besoin. Copilot dispose de nombreux modèles et j'espère pour intégrer Opus 4.5 à mon workflow sans perdre tout mon quota. Ou bien Sonnet qui est plus intelligent selon moi.

Je vais consacrer le mois de février à peaufiner cette méthode hybride pour tirer le meilleur des deux mondes. Je ne manquerai pas de vous faire un retour ici dès que j'aurai trouvé l'équilibre parfait.

D'ici là, prenez soin de vous et au plaisir de vous croiser durant les événements **AFUP** à Lille !
