import requests
from flask import jsonify

## connecting to the front end pokedex for the search component.

def search_pokemon(pokemon):
    input = int(input('pokemon_name'))
    response = requests.get(f'https://pokeapi.co/api/v2/pokemon/{input}')
    return jsonify(response.json())


## change this to django!!!