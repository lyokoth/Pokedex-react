from django.http import JsonResponse 

def get_team_1(request, team_id):
    team_data = fetch_team_from_db(team_id)

    return JsonResponse(team_data)