from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer

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
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    print(serializer.data)
    return Response(serializer.data)


@api_view(["GET"])
def getProduct(requests, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)




