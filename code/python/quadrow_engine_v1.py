import configparser
import ast

def save_options(data):
    print("saving")
    config = configparser.ConfigParser()
    config["Data"] = data
    with open("data.ini", "w") as configfile:
        config.write(configfile)

def load_options():
    config = configparser.ConfigParser()
    config.read("data.ini")
    data =  dict(config.items("Data"))
    data = {key: ast.literal_eval(value) for key, value in data.items()}
    return data 


def fill_column(grid, column, j):
    i = 0
    while i < 6 and grid[i][column] != 0:
        i+=1
    if i < 6:
        grid[i][column] = j
        turn = j%2 +1
        data = {"grid":grid, "turn":turn}
        save_options(data)
        return check_win(grid, i, column, j)
    else:
        return 'unvalid column_full'

def check_win(grid, row, column, j):
    wins = 0
    coordlist = ""

    for i in range(4):
        if 0 <= column-i <= 3: # vertical
            if grid[row][column-i+0] == grid[row][column-i+1] == grid[row][column-i+2] == grid[row][column-i+3] == j:
                coordlist += f" {row} {column-i+0} {row} {column-i+1} {row} {column-i+2} {row} {column-i+3}"
                wins += 1
                    
        if 0 <= row-i <= 2: # horizontal
            if grid[row-i+0][column] == grid[row-i+1][column] == grid[row-i+2][column] == grid[row-i+3][column] == j:
                coordlist += f" {row-i+0} {column} {row-i+1} {column} {row-i+2} {column} {row-i+3} {column}"
                wins += 1

        if 0 <= row-i <= 2 and 0 <= column-i <= 3: # diagonal bas/drote
            if grid[row-i+0][column-i+0] == grid[row-i+1][column-i+1] == grid[row-i+2][column-i+2] == grid[row-i+3][column-i+3] == j:
                coordlist += f" {row-i+0} {column-i+0} {row-i+1} {column-i+1} {row-i+2} {column-i+2} {row-i+3} {column-i+3}"
                wins += 1

        if 0 <= row-i <= 2 and 3 <= column+i <= 6: # diagonal bas/gauche
            if grid[row-i+0][column+i-0] == grid[row-i+1][column+i-1] == grid[row-i+2][column+i-2] == grid[row-i+3][column+i-3] == j:
                coordlist += f" {row-i+0} {column+i-0} {row-i+1} {column+i-1} {row-i+2} {column+i-2} {row-i+3} {column+i-3}"
                wins += 1
    if wins > 0:
        turn = 0
        return f"win {j} {wins}{coordlist}"
    else:
        return f"valid {j}"

def run(command):
    """
    envoyer 'init j=1' pour initialiser/reinitialiser la grille,
    envoyer 'j r' où x est le numéro du joueur et 'r' est la rangé dans la quelle il joue

    revoie 'init j' pour annoncer que la grille est initialisé
    ou revoie 'valid j x y' pour confirmer que le joueur 'j' a fait un mouvement valide et que son pion arrive en position x y
    ou revoie 'win j c x1,y1 x2,y2 ... x4c,y4c' pour annoncer la victoire du joueur 'x'
    ou revoie 'unvalid j e' pour annoncer que le joueur 'x' a fait un mouvement non valide:
        - game_not_in_play, la partie n'est pas initialisé
        - column_full, la colonne joué est déjà pleine
        - not_player_turn, le joueur essaye de jouer alors que ce n'est pas son tour
    """
    data = load_options()
    grid = data["grid"]
    turn = data["turn"]

    command = command.split(' ')

    if command[0] == "init":
        grid = [[0 for j in range(7)]for i in range(6)] # 0 = vide,  1 = jaune,  2 = rouge
        if len(command) > 1:
            turn = int(command[1])
        else: turn = 1
        data = {"grid":grid, "turn":turn}
        save_options(data)
    elif command[0] == "1":
        if turn == 1:
            return fill_column(grid, int(command[1]), 1)
        else:
            return 'unvalid 1 not_player_turn'
    elif command[0] == "2":
        if turn == 2:
            return fill_column(grid, int(command[1]), 2)
        else:
            return 'unvalid 2 not_player_turn'
    else:
        return 'unvalid game_not_in_play'
    
commande = run("init")
print(commande)
print(load_options())
