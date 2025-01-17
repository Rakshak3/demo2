# api/urls.py

from django.urls import path
from .views import RegistrationView, LoginView, UploadVideoView,StartInterviewView
# ForgotPasswordView, ResetPasswordView

urlpatterns = [
    path("register", RegistrationView.as_view(), name="register"),
    path("login", LoginView.as_view(), name="login"),
    path("video", UploadVideoView.as_view(), name="video"),
    path("start-interview/", StartInterviewView.as_view(), name="start-interview/"),
    # path("forgotPassword", ForgotPasswordView.as_view(), name="forgotPassword"),
    # path("resetPassword", ResetPasswordView.as_view(), name="resetPassword"),
]
