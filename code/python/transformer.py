def transformer(liste):
    for i in range(len(liste)):
        if liste[i] < 0:
            liste[i] = liste[i] * 10
        elif liste[i] > 0 and liste[i] % 2 == 0:
            liste[i] = liste[i] * 3
    return demo

demo = [3, 6, -12, -66, 5, 4, 9, -76]
print(demo)
demo = transformer(demo)
print(demo)