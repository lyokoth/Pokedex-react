import pandas as pd 
import numpy as np

class Pokemon: 
    def __init__(self, name, type1, type2, hp, attack, defense, sp_attack, sp_defense, speed):
        self.name = name
        self.type1 = type1
        self.type2 = type2
        self.hp = hp
        self.attack = attack
        self.defense = defense
        self.sp_attack = sp_attack
        self.sp_defense = sp_defense
        self.speed = speed
        self.stats = [hp, attack, defense, sp_attack, sp_defense, speed]
        self.weaknesses = []
        self.resistances = []
        self.immunities = []
        self.abilities = []
        self.moves = []
        self.nature = None

class Types:
    def __init__(self):
        self.types = ['Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice', 'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Dragon', 'Dark', 'Steel', 'Fairy']
        self.type_chart = pd.read_csv('src/backend/type_chart.csv', index_col=0)
        self.type_chart = self.type_chart[self.types]


    def get_effectiveness(self, attacker, defender):
        effectiveness = 1
        for i in range(2):
            if i == 0:
                defender_type = defender.type1
            else:
                defender_type = defender.type2
            if defender_type == None:
                continue
            effectiveness *= self.type_chart[attacker.type1][defender_type]
            effectiveness *= self.type_chart[attacker.type2][defender_type]
        return effectiveness
    
    def get_weaknesses(self, pokemon):
        weaknesses = []
        for type in self.types:
            effectiveness = self.get_effectiveness(pokemon, Pokemon('temp', type, None, 0, 0, 0, 0, 0, 0))
            if effectiveness > 1:
                weaknesses.append(type)
        return weaknesses
    
    def get_resistances(self, pokemon):
        resistances = []
        for type in self.types:
            effectiveness = self.get_effectiveness(pokemon, Pokemon('temp', type, None, 0, 0, 0, 0, 0, 0))
            if effectiveness < 1:
                resistances.append(type)
        return resistances
    
    def get_immunities(self, pokemon):
        immunities = []
        for type in self.types:
            effectiveness = self.get_effectiveness(pokemon, Pokemon('temp', type, None, 0, 0, 0, 0, 0, 0))
            if effectiveness == 0:
                immunities.append(type)
        return immunities
    

class TeamBuilder:
    def __init__(self):
        self.types = Types()
        self.pokemon = []
    
    def add_pokemon(self, name, type1, type2, hp, attack, defense, sp_attack, sp_defense, speed):
        pokemon = Pokemon(name, type1, type2, hp, attack, defense, sp_attack, sp_defense, speed)
        pokemon.weaknesses = self.types.get_weaknesses(pokemon)
        pokemon.resistances = self.types.get_resistances(pokemon)
        pokemon.immunities = self.types.get_immunities(pokemon)
        self.pokemon.append(pokemon)
    
    def remove_pokemon(self, name):
        for i in range(len(self.pokemon)):
            if self.pokemon[i].name == name:
                self.pokemon.pop(i)
                break
    
    def get_pokemon(self, name):
        for i in range(len(self.pokemon)):
            if self.pokemon[i].name == name:
                return self.pokemon[i]
        return None
    
    def get_pokemon_names(self):
        names = []
        for i in range(len(self.pokemon)):
            names.append(self.pokemon[i].name)
        return names
    
    def get_team_weaknesses(self):
        weaknesses = []
        for type in self.types.types:
            effectiveness = 1
            for pokemon in self.pokemon:
                effectiveness *= self.types.get_effectiveness(Pokemon('temp', type, None, 0, 0, 0, 0, 0, 0), pokemon)
            if effectiveness > 1:
                weaknesses.append(type)
        return weaknesses
    
    def get_team_resistances(self):
        resistances = []
        for type in self.types.types:
            effectiveness = 1
            for pokemon in self.pokemon:
                effectiveness *= self.types.get_effectiveness(Pokemon('temp', type, None, 0, 0, 0, 0, 0, 0), pokemon)
            if effectiveness < 1:
                resistances.append(type)
        return resistances
    
    def get_team_immunities(self):
        immunities = []
        for type in self.types.types:
            effectiveness = 1
            for pokemon in self.pokemon:
                effectiveness *= self.types.get_effectiveness(Pokemon('temp', type, None, 0, 0, 0, 0, 0, 0), pokemon)
                if effectiveness == 0:
                    immunities.append(type)