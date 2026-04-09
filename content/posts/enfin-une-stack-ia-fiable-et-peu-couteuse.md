---
title: Enfin une stack IA fiable et peu coûteuse !
date: 2026-04-15T00:00:00.000Z
---

## Le roi est mort. Vive le roi !


Je suis ENFIN parvenu à obtenir une tarification et des capacités qui comblent mes besoins. 
Lorsque je parle du roi, je parle d'Opus, le grand indétrônable qui demeure intelligent malgré son contexte large. Cette avantage vient avec l'inconvénient d'un prix important.

Pour piloter intelligemment mon IA agentic à travers mes projets, j'utilise désormais GLM 5.1.


Je vous avais déjà parlé de Z.AI [dans mon précédent post](https://vasilvestre.github.io/blog/Ma-stack-IA-en-janvier-2026---Adieu-Copilot-). Ils ont depuis sorti un modèle qui égalise et dépasse même parfois Opus dans certains domaines, pour un prix ridicule !

| Prix          | Opus | GLM 5.1 |
| ------------- | ---- | ------- |
| Input (MTok)  | $5   | $1.4    |
| Output (MTok) | $25  | $4.4    |

MTok = Million de tokens

***

### Un roi imparfait

Malgré ses qualités, le modèle GLM 5.1 est relativement lent, autant en Tokens/s qu'en temps d'attente d'une réponse. A l'usage, il reste totalement fonctionnel et permet de travailler sans soucis.

J'utilise pour ma part l'offre de Z.AI comme provider, qui coûte 30€/mois pour l'offre pro dont je n'ai jamais atteint le quota, existant dans une fenêtre de 5 heures ([vous trouver ici un lien de parrainage](https://z.ai/subscribe?ic=TP2ZSTFE2R)).

## Evolution de l'usage

oh-my-opencode se nomme désormais [oh-my-agent](https://github.com/code-yeongyu/oh-my-openagent), il propose à la fois des modes (agents) et des Skills.

## C'est quoi un skill ?

> Skills are reusable capabilities for AI agents. They provide procedural knowledge that helps agents accomplish specific tasks more effectively. Think of them as plugins or extensions that enhance what your AI agent can do.

En somme, un skill détecte des mots clefs et permettent de donner des instructions claires et précises concernant une tâche, sous forme de fichier markdown.


Comme un agent mais dédié a des tâches précises ! Review de code, usage d'un framework, d'une librairie etc…

## Comment tu les crées et utilises ?

J'utilise [https://skills.sh/](https://skills.sh/) pour naviguer dans la liste des skills les plus maintenus et utilisés au quotidiens.
Ce standard permet d'installer facilement des skills sur sa machine et/ou dans le projet que l'on utilise (pour les partager).

Pour donner un exemple, un skill permet de construire des skills soit même et un autre permet de configurer Sentry SDK sur son projet PHP. Ce dernier est partagé par Sentry et met donc en avant les meilleures pratiques ! 
