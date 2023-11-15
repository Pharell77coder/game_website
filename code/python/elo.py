class Joueur:
    def __init__(self, nom, elo):
        self.nom = nom
        self.elo = elo

    def get_elo(self):
        return self.elo
    
    def set_elo(self, value):
        self.elo = value

    def affiche(self):
        return f"{self.nom} a {self.elo} elo"

def valeur(elo):
    """Plus le elo est elevée moins on en gagne"""
    if elo < 1000: k = 80
    elif elo >= 1000 and elo < 2000: k = 50
    elif elo >= 2000 and elo <= 2500: k = 30
    elif elo > 2500: k = 20
    return k

def estimation(e1, e2):
    """Prend en parametre les deux entire qui represente les elos des deux joueurs et retourne estime"""
    esp = (e1 - e2) / 400
    return 1 / (1 + 10 ** esp)


def calcul_elo(player, e2, resultat):
    """Parametre player : class Joueur e2 : entier representant le score elo adverse resultat : 1 = victoire 0.5 nul et 0 defaite"""
    e1 = player.get_elo()
    k = valeur(e1)
    estime = estimation(e1, e2)
    rang = e1 + k * (resultat - estime)
    if rang < 100: rang = 100
    return player.set_elo(int(rang))

j1 = Joueur("Red", 2000)
j2 = Joueur("Pierre", 1500)

n = int(input("1 j1 gagne - 2 egalite - 3 j2 gagne : "))

e1 = j1.get_elo()
e2 = j2.get_elo()

if n == 1 :
    calcul_elo(j1, e2, 1)
    calcul_elo(j2, e1, 0)

if n == 2:
    calcul_elo(j1, e2, 0.5)
    calcul_elo(j2, e1, 0.5)

if n == 3:
    calcul_elo(j1, e2, 0)
    calcul_elo(j2, e1, 1)

print(j1.affiche())
print(j2.affiche())