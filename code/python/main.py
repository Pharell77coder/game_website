class Satelite:
    def __init__(self, masse : int = 100, vitesse : int = 0):
        self.masse = masse
        self.vitesse = vitesse
    
    def accelerer(self, valeur):
        self.vitesse = valeur
        if self.vitesse > self.masse * 3:
            self.vitesse = self.masse * 3

    def ralentir(self, valeur):
        self.vitesse = valeur
        if self.vitesse < 0:
            self.vitesse = 0

class CompteBancaire:
    def __init__(self, nom : str = 'Doe', solde : float = 1000.00):
        self.nom = nom
        self.solde = solde
    
    def depot(self, somme):
        self.solde += somme

    def retrait(self, somme):
        self.solde -= somme

    def affiche(self):
        print(f"Nom du titulaire : {self.nom}, Solde : {self.solde}")

    def transferer(self, compte):
        compte.solde = self.solde - self.solde * 3 / 100
        self.solde = 0
        compte.nom = self.nom
        
compte1 = CompteBancaire()
compte2 = CompteBancaire("Un Random")
compte1.affiche()
compte2.affiche()
compte1.transferer(compte2)
compte1.affiche()
compte2.affiche()

class Rectangle:
    def __init__(self, nom, largeur, longueur):
        self.nom = nom
        self.largeur = largeur
        self.longueur = longueur

    def perimetre(self):
        return self.largeur * 2 + self.longueur * 2

    def aire(self):
        return self.largeur * self.longueur

class Carre(Rectangle):
    def ___init__(self, nom, largeur, longueur):
        super().__init__(nom, largeur, longueur)
"""
    def perimetre(self):
        return self.largeur * 4

    def aire(self):
        return self.largeur ** 2"""
    
c1 = Carre("carre", 1, 1)
print(c1.perimetre())
print(c1.aire())