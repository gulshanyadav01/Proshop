from django.contrib import admin
from .models import Product
# Register your models here.

@admin.register(Product)

class ProductAdmin(admin.ModelAdmin):
    list_display = [ '_id', 'name', 'brand', 'category', 'price', 'numReviews', "countInStock", 'rating']


