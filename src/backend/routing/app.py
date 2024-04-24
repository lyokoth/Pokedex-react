from django.http import JsonResponse, HttpResponse

def index(request):
    return JsonResponse({'message': 'Pokemon Team Builder'})

