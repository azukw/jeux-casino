# Monke Games - Collection de Jeux

Ce dépôt contient une collection de jeux de casino développés avec Python (Pygame) et JavaScript (HTML/CSS). Voici un guide pour chaque jeu disponible.

## Table des matières
- [Wild West Gold](#wild-west-gold)
- [Crash](#crash)
- [Bingo](#bingo)
- [Aim Trainer](#aim-trainer)
- [Jackpot](#jackpot)
- [Pile ou Face](#pile-ou-face)

## Wild West Gold

**Description**: Un jeu de hasard où vous pariez sur un côté ou sur l'autre. Vous pouvez augmenter vos gains en continuant à parier, mais vous risquez de tout perdre si vous vous trompez.

**Emplacement**: `Wild West Gold/WWG 0.2/Wild West Gold/WWG/recttesgclas/rectsclassos.py`

**Comment lancer**:
1. Assurez-vous d'avoir Python et Pygame installés
2. Ouvrez un terminal dans le dossier du jeu
3. Exécutez la commande: `python rectsclassos.py`

**Comment jouer**:
- Utilisez les boutons numériques (0.1, 1, 10, 100) pour placer vos paris
- Cliquez sur "MonkeBet" pour commencer le jeu
- Si vous gagnez, vous pouvez continuer à parier pour augmenter vos gains
- Cliquez sur "Retirer" pour encaisser vos gains

## Crash

**Description**: Un jeu de type "crash" où vous devez retirer vos gains avant que la fusée n'explose. Plus vous attendez, plus les gains potentiels sont élevés, mais le risque d'explosion augmente aussi.

**Emplacement**: `jeux/crash.py`

**Comment lancer**:
1. Assurez-vous d'avoir Python et Pygame installés
2. Ouvrez un terminal dans le dossier `jeux`
3. Exécutez la commande: `python crash.py`

**Comment jouer**:
- Utilisez la souris pour contrôler la fusée
- Plus la fusée monte, plus les gains potentiels sont élevés
- Cliquez pour retirer vos gains avant que la fusée n'explose

## Bingo

**Description**: Un jeu de bingo classique où des numéros sont tirés au hasard et vous devez compléter votre grille.

**Emplacement**: `web/html/game3.html`

**Comment lancer**:
1. Ouvrez le fichier `web/html/game3.html` dans votre navigateur web
2. Ou accédez-y via le menu principal des jeux en ouvrant `web/html/games.html`

**Comment jouer**:
- Cliquez sur les numéros de votre grille pour les marquer
- Attendez que les numéros soient tirés
- Criez "BINGO" quand vous avez complété une ligne, une colonne ou une diagonale

## Aim Trainer

**Description**: Un jeu d'entraînement à la précision où vous devez viser et tirer sur des cibles qui apparaissent à l'écran.

**Emplacement**: `web/html/freemonke.html`

**How to launch**:
1. Ouvrez le fichier `web/html/freemonke.html` dans votre navigateur web
2. Ou accédez-y via le menu principal des jeux en ouvrant `web/html/games.html`

**Comment jouer**:
- Cliquez sur "Start" pour commencer
- Visez et cliquez sur les cibles qui apparaissent
- Vous avez un nombre limité de munitions
- Essayez d'obtenir le meilleur score possible


## Pile ou Face

**Description**: Un jeu simple où vous pariez sur le résultat d'un lancer de pièce (pile ou face).

**Emplacement**: Ce jeu n'est pas directement visible dans les fichiers fournis, mais il pourrait être intégré dans l'un des autres jeux ou dans le launcher.

**Comment lancer**:
- Vérifiez le launcher principal (`jeux/launcher.py`) pour voir s'il contient une option pour ce jeu

## Launcher Principal

Un launcher est disponible pour accéder à tous les jeux depuis une interface.

**Emplacement**: `jeux/launcher.py`

**Comment lancer**:
1. Assurez-vous d'avoir Python et Tkinter installés
2. Ouvrez un terminal dans le dossier `jeux`
3. Exécutez la commande: `python launcher.py`

## Prérequis

- Python 3.x
- Pygame (pour les jeux Python)
- Un navigateur web (pour les jeux HTML/JavaScript)

## Installation des dépendances

Pour installer les dépendances Python nécessaires:

```
pip install pygame
```

Les jeux web ne nécessitent pas d'installation supplémentaire, mais doivent être exécutés depuis un serveur web ou ouverts directement dans un navigateur. 
