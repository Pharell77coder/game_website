def carre(fichier):
    f = open(fichier, 'r')

    contenu = f.readlines()
    f.close()

    for ligne in contenu:
        if len(contenu) != len(ligne.replace('\n', '')):
            return False
    return True


print(carre('hello.txt'))