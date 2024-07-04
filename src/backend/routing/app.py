from flask import Flask, jsonify
import requests
import random 


app = Flask(__name__)

@app.route('/api/featured_pokemon', methods=['GET'])

def featured_pokemon():
    try:
        random_pokemon_id = random.randInt(1, 1025)
        random_pkmn_response = requests.get(f"https://pokeapi.co/api/v2/pokemon/{random_pokemon_id}")
        random_pkmn_data = random_pkmn_response.json()

                
        species_response = requests.get(f'https://pokeapi.co/api/v2/pokemon-species/{random_pokemon_id}')
        species_data = species_response.json()

        combined_data = { **random_pkmn_data, **species_data }

        return jsonify(combined_data)
    except Exception as e:
        return jsonify({'error': str(e)})
    
if __name__ == '__main__':
    app.run(debug=True)