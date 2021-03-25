from django.urls import path
from pizzeria.views import MainPage, Shop, ShopCategoryDetailView, FoodDetail

urlpatterns = [
    # path('login/', UserLogin.as_view(), name="login"),
    # path('logout/', UserLogout.as_view(), name="logout"),
    # path('register/', Register.as_view(), name="register"),
    path('', MainPage.as_view(), name='index'),
    path('categories/<slug:slug>/', ShopCategoryDetailView.as_view(),
         name='category'),
    path('shop/<slug:slug>/', FoodDetail.as_view(), name='food'),
    path('shop/', Shop.as_view(), name='shop'),



]
