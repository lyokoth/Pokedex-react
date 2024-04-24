from django.db import models

# Create your models here.
class Pokemon(models.Model):
    name = models.CharField(max_length=255)
    number = models.IntegerField()
    type1 = models.CharField(max_length=255)
    type2 = models.CharField(max_length=255)
    ability = models.CharField(max_length=255)
    nature = models.CharField(max_length=255)
    hidden_ability = models.CharField(max_length=255)
    stats = models.JSONField()
    moves = models.JSONField()
    description = models.TextField()


class Team(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    pokemon = models.ManyToManyField(Pokemon)
    nature = models.CharField(max_length=255)
    ability = models.CharField(max_length=255)
    moves = models.JSONField()
    stats = models.JSONField()
    type1 = models.CharField(max_length=255)
    type2 = models.CharField(max_length=255)
    hidden_ability = models.CharField(max_length=255)   
    
# Path: src/backend/pokedexapi/pokedexapi/urls.py

