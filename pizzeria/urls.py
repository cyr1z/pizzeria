from django.urls import path

from pizzeria.views import MainPage

urlpatterns = [
    # path('login/', UserLogin.as_view(), name="login"),
    # path('logout/', UserLogout.as_view(), name="logout"),
    # path('register/', Register.as_view(), name="register"),
    path('', MainPage.as_view(), name='index'),



]
