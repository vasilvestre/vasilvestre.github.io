---
title: Ma stack IA en décembre 2025
date: 2025-12-19T00:00:00.000Z
updatedAt: 2025-12-19T00:00:00.000Z
---

## Hello World!

Pour ce premier article, j'aimerais partager un sujet dont je parle régulièrement, que ce soit auprès de [l'AFUP](https://afup.org/) en meetup ou sur mes réseaux.

L'époque où l'IA n'était qu'une simple autocomplétion améliorée n'est pas si loin derrière nous et pourtant.

Aujourd'hui, mon flux de travail repose sur un écosystème d'agents et de protocoles qui me permettent de me concentrer sur l'architecture et la valeur métier. Ma capacité mentale passe moins dans l'écriture du code et plus dans un code avec de la valeur.

## Au coeur de mon travail : OpenCode

Je n'utilise désormais plus mon IDE 7h par jour, j'utilise désormais l'outil [OpenCode](https://github.com/sst/opencode), un logiciel CLI opensource permettant de se connecter à n'importe quel provider (OpenAI, Github Copitlot, Claude…) et d'utiliser les modèles de son choix.

## Mon écosystème MCP

J'utilise plusieurs MCP activement en cette fin d'année, seuls eux font partis de 100% de mes workflows.

| Nom        | Usage                        | Pourquoi je l'utilise                                                                                                                                                                                                       |
| ---------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Deepwiki   | Recherches d'infos à jour    | Il crawl les projets et répond à des questions avec une documentation à jour.                                                                                                                                               |
| Playwright | Contrôle navigateur par l'IA | L'IA écrit des changements puis manipule le navigateur pour vérifier que les interactions avec le navigateur fonctionnent.                                                                                                  |
| Serena     | Toolking d'IA                | Ce MCP fonctionne comme un “copilote”, il navigue dans le projet, se souvient dans le long terme de demandes, de règles, de l'architecture, il maintient dans le temps une logique et édite le projet sans (trop) d'erreur. |

## Mes modèles favoris

L'année aura été riche en modèle ! Mon top 3 n'aura pas été compliqué, ayant des préférences envers les modèles Claude depuis un moment (désolé GPT..)

1. Claude sonnet (4) : il est rapide et fonctionne bien pour tout mes langages au quotidien
2. Claude Opus : ses grandes performances le rend simplement meilleur sur des tâches complexes, avec moins d'erreur et une meilleur logique
3. Gemini 3 : avec un grand contexte, il est capable d'avoir une vision globale d'un problème et de poser un plan de manière efficace

## Le Spec Driven Development

### Greenfield (Nouveaux projets perso) : GitHub Spec-Kit

Pour mes projets persos, j'utilise Spec-Kit. C'est très rigoureux : on définit d'abord les principes (/speckit.constitution), puis les specs. L'IA n'implémente que ce qui a été validé au préalable. La constitution de spec est longue, il remet énormément de points en doute et force une certaine rigueur. Toutes mes excuses aux PO, c'est vraiment dur de définir des specs !

### Brownfield (Maintenance de projets existants) : Fission-AI OpenSpec

Sur mes projets professionnels existants, OpenSpec est plus agile. Il me permet de proposer des changements (/openspec:proposal) sur une base de code PHP déjà là, de valider l'impact, et de laisser l'IA appliquer les modifications de manière granulaire. Il est moins contraignant que Spec-kit et me permet d'itérer plus vite, ce que j'apprécie mieux.

## Mes plugins opencode

Je n'utilise qu'un seul plugin, de son nom [“opencode synamic context pruning”](https://github.com/Opencode-DCP/opencode-dynamic-context-pruning), qui permet de retirer de la discussion les outputs des outils appelés durant l'éxécution de mon contexte, ce qui l'allège et évite de compacter trop souvent.

## Conclusion

Cette année, je me suis réconcilié avec mon métier. Je suis devenu las d'écrire du code, de perdre 4h pour rédiger du code bateau, 50 tests pour une feature et de ne pas avoir la capacité mentale de remettre en question la structure de mon code tellement j'étais fatigué d'écrire du code.

Désormais, je suis l'orchestre de mes outils, j'écris encore du code bien évidemment mais moins, avec plus de valeur, sur des sujets plus complexes et qui me passionne.

Voila qui conclut ce premier et modeste article, j'espère que celui ci ne sera pas le dernier. Si vous êtes désireux d'échanger avec moi, mes réseaux sont disponibles sur ce site et je suis toujours proche des évènements AFUP Haut de France dont je suis membre pour 2025-2026.
