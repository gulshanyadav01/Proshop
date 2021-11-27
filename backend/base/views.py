from django.shortcuts import render
from django.http import JsonResponse
from .products import products
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(["GET"])
def getRoutes(request):
    path = [
        {'key': 'value'},
        {'key': 'value'},
        {'key': 'value'}
    ]
    return Response(path)


@api_view(["GET"])
def getProducts(requests):
    return Response(products)


@api_view(["GET"])
def getProduct(requests, pk):
    product = None
    for i in products:
        if i['_id'] == pk:
            product = i
            break
    return Response(product)


