import json

if __name__ == '__main__':
    with open("data/fundamental_syntax.json", encoding="utf-8") as file:
        print(json.load(file))