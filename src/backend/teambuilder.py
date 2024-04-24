import pandas as pd 
import numpy as np
from poke_env import teambuilder

class NewTeam(teambuilder):
    def __init__(self, teams):
        self.teams = [self.join_teams(self.parse_showdown_team(team)) for team in teams]
        self.team = self.teams[0]
        self.team = self.team.drop_duplicates()
        self.team = self.team.dropna()
        self.team = self.team.reset_index(drop=True)

    def join_teams(self, team):
        return pd.concat(team)
    
    def yield_team(self):
        return np.random.choice(self.teams)
    


team_1 = """
 Dragonite @ Expert Belt
    Ability: Multiscale
    EVs: 252 Atk / 4 SpD / 252 Spe
    Nature: Adamant
    - Breaking Swipe
    - Extreme Speed
    - Hurricane
    - Thunder 

    Grimmsnarl @ Focus Sash
    Ability: Prankster
    EVs: 252 HP / 4 Atk / 252 Def
    Impish Nature
    - Reflect
    - Light Screen
    - Spirit Break
    - Sucker Punch

    Politoed @ Wacan Berry
    Ability: Drizzle
    EVs: 252 HP / 252 Def / 4 SpD
    Bold Nature
    - Ice Beam
    - Scald
    - Weather Ball
    - Helping Hand

    Incineroar @ Sitrus Berry
    Ability: Intimidate
    EVs: 252 HP / 252 Atk / 4 SpD
    Adamant Nature
    - Darkest Lariat
    - Flare Blitz
    - Fake Out
    - Brick Break

    PorigonZ @ Life Orb
    Ability: Adaptability
    EVs: 252 SpA / 4 SpD / 252 Spe
    Timid Nature
    - Tri Attack
    - Thunderbolt
    - Ice Beam
    - Recover

    Hydrapple @ Assault Vest
    Ability: Supersweet Syrup
    Tera Type: Fighting
    EVs: 252 HP / 252 Atk / 4 SpD
    Adamant Nature
    - Earth Power
    - Fickle Beam
    - Gyro Ball
    - Tera Blast
    """
    
team_2 = """
     Flygon @ Choice Scarf
    Ability: Levitate
    EVs: 252 Atk / 4 SpD / 252 Spe
    Jolly Nature
    - Earthquake
    - Dragon Claw
    - Iron Tail
    - U-turn

    Blaziken @ Focus Sash
    Ability: Speed Boost
    EVs: 252 Atk / 4 SpD / 252 Spe
    Jolly Nature
    - Blaze Kick
    - Thunder Punch
    - Earthquake
    - Swords Dance

    Cloyster @ King's Rock
    Ability: Skill Link
    EVs: 252 Atk / 4 SpD / 252 Spe
    Adamant Nature
    - Icicle Spear
    - Rock Blast
    - Shell Smash
    - Ice Shard

    Malamar @ Leftovers
    Ability: Contrary
    EVs: 252 HP / 252 Atk / 4 SpD
    Adamant Nature
    - Superpower
    - Psycho Cut
    - Night Slash
    - Rest

    Gengar @ Black Sludge 
    Ability: Cursed Body
    EVs: 252 SpA / 4 SpD / 252 Spe
    Timid Nature
    - Shadow Ball
    - Sludge Wave
    - Thunderbolt
    - Destiny Bond

    Excadrill @ Focus Sash
    Tera Type: Steel
    Ability: Sand Rush
    EVs: 252 Atk / 4 SpD / 252 Spe
    Jolly Nature
    - Earthquake
    - Iron Head
    - Rock Slide
    - Swords Dance

"""
custom_builder = NewTeam([team_1, team_2])


