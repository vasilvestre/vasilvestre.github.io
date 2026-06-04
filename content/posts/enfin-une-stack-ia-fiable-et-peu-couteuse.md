---
title: Enfin une stack IA fiable et peu coûteuse !
date: 2026-04-14T00:00:00.000Z
---

## Le roi est mort. Vive le roi !

Je suis ENFIN parvenu à obtenir une tarification et des capacités qui comblent mes besoins.
Lorsque je parle du roi, je parle d'Opus, le grand indétrônable qui demeure intelligent malgré son contexte large. Cet avantage vient avec l'inconvénient d'un prix important.

Pour piloter intelligemment mon IA agentique à travers mes projets, j'utilise désormais GLM 5.1.

Je vous avais déjà parlé de Z.AI [dans mon précédent post](https://vasilvestre.github.io/blog/Ma-stack-IA-en-janvier-2026---Adieu-Copilot-). Ils ont depuis sorti un modèle qui égale et dépasse même parfois Opus dans certains domaines, pour un prix ridicule !

| Prix          | Opus | GLM 5.1 |
| ------------- | ---- | ------- |
| Input (MTok)  | $5   | $1.4    |
| Output (MTok) | $25  | $4.4    |

MTok = Million de tokens

***

### Un roi imparfait

Malgré ses qualités, le modèle GLM 5.1 est relativement lent, autant en Tokens/s qu'en temps d'attente d'une réponse. À l'usage, il reste totalement fonctionnel et permet de travailler sans souci.

J'utilise pour ma part l'offre de Z.AI comme provider, qui coûte 30€/mois pour l'offre pro dont je n'ai jamais atteint le quota, existant dans une fenêtre de 5 heures ([vous trouverez ici un lien de parrainage](https://z.ai/subscribe?ic=TP2ZSTFE2R)).

## Evolution de l'usage

oh-my-opencode se nomme désormais [oh-my-agent](https://github.com/code-yeongyu/oh-my-openagent), il propose à la fois des modes (agents) et des Skills.

## C'est quoi un skill ?

> Skills are reusable capabilities for AI agents. They provide procedural knowledge that helps agents accomplish specific tasks more effectively. Think of them as plugins or extensions that enhance what your AI agent can do.

En somme, un skill détecte des mots clefs et permet de donner des instructions claires et précises concernant une tâche, sous forme de fichier Markdown.

Comme un agent mais dédié a des tâches précises ! Revue de code, usage d'un framework, d'une librairie etc…

## Comment tu les crées et utilises ?

J'utilise [https://skills.sh/](https://skills.sh/) pour naviguer dans la liste des skills les plus maintenus et utilisés au quotidien.
Ce standard permet d'installer facilement des skills sur sa machine et/ou dans le projet que l'on utilise (pour les partager).

Pour donner un exemple, un skill permet de construire des skills soi-même et un autre permet de configurer Sentry SDK sur son projet PHP. Ce dernier est partagé par Sentry et met donc en avant les meilleures pratiques !

## Mon workflow

1. Je passe opencode en mode agent.
2. Je demande à GLM 5.1 d'établir une tâche.
   1. Des agents se lancent en fond pour explorer le projet, recherche le besoin, lire la documentation des solutions impliquées.
3. L'agent plan me pose des questions si le sujet n'est pas précis puis me demande si je veux faire une review automatisé en profondeur de la tâche produite.
4. Je lance le travail et l'agent de plan va continuer jusqu'à obtenir toutes les preuves de fonctionnements et remplir tout les objectifs via une boucle.
5. J'interviens (parfois) durant et à la fin du processus pour relire, vérifier le bon fonctionnement et ajuster ce qui doit l'être.
6. Je demande a opencode d'utiliser le skill “git master” pour commit proprement, il s'adapte de lui même au projet et produit des commits atomiques.

### A quoi ressemble ma configuration oh-my-openagent

```json
{
  "$schema": "https://raw.githubusercontent.com/code-yeongyu/oh-my-opencode/master/assets/oh-my-opencode.schema.json",
  "categories": {
    "quick": {
      "model": "zai-coding-plan/glm-5-flash",
      "fallbackChain": [
        { "providers": ["github-copilot"], "model": "gpt-5-mini" },
        { "providers": ["opencode"], "model": "gpt-5-nano" }
      ]
    },
    
    "ultrabrain": {
      "model": "zai-coding-plan/glm-5.1",
      "fallbackChain": [
        { "providers": ["github-copilot"], "model": "gpt-5.2-codex" },
        { "providers": ["github-copilot"], "model": "gpt-5.2" },
        { "providers": ["opencode"], "model": "kimi-k2.5-free" }
      ]
    },
    
    "deep": {
      "model": "zai-coding-plan/glm-5.1",
      "fallbackChain": [
        { "providers": ["github-copilot"], "model": "claude-sonnet-4.5" },
        { "providers": ["github-copilot"], "model": "gpt-5.2" },
        { "providers": ["zai-coding-plan"], "model": "glm-5" }
      ]
    },
    
    "visual-engineering": {
      "model": "zai-coding-plan/glm-5v-turbo",
      "fallbackChain": [
        { "providers": ["github-copilot"], "model": "gemini-3-pro-preview" },
        { "providers": ["google"], "model": "gemini-2.5-pro" },
        { "providers": ["github-copilot"], "model": "claude-sonnet-4.5" }
      ]
    },
    
    "writing": {
      "model": "zai-coding-plan/glm-5-flash",
      "fallbackChain": [
        { "providers": ["github-copilot"], "model": "gemini-3-flash-preview" },
        { "providers": ["zai-coding-plan"], "model": "glm-5-flash" },
        { "providers": ["opencode"], "model": "kimi-k2.5-free" }
      ]
    }
  }
}
```

Petit example, sur une journée j'ai dépensé 160M de tokens dont 55M dans une fenêtre de 5 heures avant d'avoir un soucis. Et cela est arrivé car GLM 5 consomme 3x plus de tokens pendant les heures de pointes.


Cela n'est valide que durant la transition de leur technologie.

J'espère que ce ticket de blog vous aura plu, n'hésitez pas à me contacter sur les réseaux ou à travers Akawaka.
