## provide the following endpoints: 
## /pokemon/<id> - returns the details of a pokemon
## /pokedex - returns the pokedex
## /natures - returns the natures
## /types - returns the types
## maybe add move, gender, and growth rate endpoints???

from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route('/pokemon/<id>', methods=['GET'])
def get_pokemon(id):
    try:
        response = request.get(f'https://pokeapi.co/api/v2/pokemon/{id}')
        return jsonify(response.json())
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    


@app.route('/pokedex', methods=['GET'])
def get_pokedex(pokemon):
    try:
        response = request.get(f'https://pokeapi.co/api/v2/pokemon-species/{pokemon}')
        return jsonify(response.json())
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    

## filter pokedex based on region
    

@app.route('/api/pokemon/regions', methods=['GET'])
def get_regions():
    regions = [
        {'name': 'Kanto', 'gen': 1, 'limit': 151, 'offset': 0},
        {'name': 'Johto', 'gen': 2, 'limit': 100, 'offset': 151},
        {'name': 'Hoenn', 'gen': 3, 'limit': 135, 'offset': 251},
        {'name': 'Sinnoh', 'gen': 4, 'limit': 107, 'offset': 386},
        {'name': 'Unova', 'gen': 5, 'limit': 156, 'offset': 493},
        {'name': 'Kalos', 'gen': 6, 'limit': 72, 'offset': 649},
        {'name': 'Alola', 'gen': 7, 'limit': 88, 'offset': 721},
        {'name': 'Galar', 'gen': 8, 'limit': 89, 'offset': 809},
        {'name': 'Paldea', 'gen': 9, 'limit': 100, 'offset': 898},
        
    ]


@app.route('/natures', methods=['GET']) 
def get_natures(id):
    try:
        response = request.get(f'https://pokeapi.co/api/v2/nature/{id}')
        return jsonify(response.json())
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    


@app.route('/types', methods=['GET'])
def get_types(id):
    try:
        response = request.get(f'https://pokeapi.co/api/v2/type/{id}')
        return jsonify(response.json())
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    

if __name__ == '__main__':
    app.run(debug=True, host='5000')