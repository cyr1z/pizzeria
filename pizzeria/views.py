from django.shortcuts import render

# Create your views here.
from django.views.generic import TemplateView


class MainPage(TemplateView):
    """
    main page / index page
    """
    template_name = 'index.html'

    # def get_context_data(self, *, object_list=None, **kwargs):
    #     context = super().get_context_data(object_list=object_list, **kwargs)
    #     # add latest post
    #     latest_post = Post.objects.order_by('-published_at').filter(is_published=True).first()
    #     if latest_post:
    #         context.update({'latest_post': latest_post})
    #     # add 3 next latest posts
    #     next_three_posts = Post.objects.filter(is_published=True).order_by('-published_at')[1:4]
    #     if next_three_posts:
    #         context.update({'next_three_posts': next_three_posts})
    #     # add pinned top post
    #     pinned_on_main_top_post = Post.objects.filter(
    #         pinned_on_main_top=True).first()
    #     if pinned_on_main_top_post:
    #         context.update({
    #             'pinned_on_main_top_post': pinned_on_main_top_post
    #         })
    #     # add pinned bottom post
    #     pinned_on_main_bottom_post = Post.objects.filter(
    #         pinned_on_main_bottom=True).first()
    #     if pinned_on_main_bottom_post:
    #         context.update(
    #             {'pinned_on_main_bottom_post': pinned_on_main_bottom_post}
    #         )
    #
    #     return context
