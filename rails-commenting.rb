# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
class BlogPostsController < ApplicationController
  def index

    # BlogPostController is the name of the controller. As the logic/center of an application, it has the ability to organize communication between the user, views, and the model. To generate a controller, the rails command $rails g controller (Controllername) is used. We can also see a def method assigned to the index. This will produce the list entire index list related to the model. 

    # ---2)
    @posts = BlogPost.all
  end

  # This is an example of an instance variable. An instance variable is a variable that is declared in a class to give objects their own private space to store data. In this example, the instance variable is is names "posts" and it is calling on the BlogPost class and saving all of it's content in the variable "posts".

  # ---3)
  def show
    @post = BlogPost.find(params[:id])
  end

  # This example uses the show method to display an item by accessing it's param id through the instance variable. This method will allow users to view the item and display or show it.

  # ---4)
  def new
    @post = BlogPost.new
  end

  def create

    # This uses two methods called "new" and "create". "New" is a restful route that will allow users to push information into the web application and store that information in the database. In this example, "new" will push information from the BlogPost controller to the web application. Create" is another restful route that will submit user data to the database. It will call the strong params method.


    # ---5)
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit

# The instance of post which is BlogPost.all is allowing the users to create an instance whenever the user making a new entry under the blog_post_params in the Active Record. If the post meets all of the parameters, (being a strong param, meaning this will dictate the attributes allowed, so if all of the necessary items are met and deemed valid, than this will happen, which is essentially a conditional statement),than it will redirect to the _path. The path can link to another website, home screen, or confirmation screen,, etc. The def edit. will be send HTML forms, which will allow users to complete and overwrite into the database.



    # ---6)
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])

# Using .find to call one item by its id. This id will come from the url params. The update method will modify information in the database. In this example, the column to be updated is defined by the params id

    # ---7)
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy

# A conditional statement is used to trigger a redirect if the data is valid. The destroy action will remove the data associated with the id from the database

      # ---8)
      redirect_to blog_posts_path
    end
  end

# This is triggering a redirect of the header to the browser to get the destination url 


  # ---9)
  private
  def blog_post_params

# The keyword private used here is restricting the scope of where the method can be called. In this example, blog_post_params are protected and can only be called in the controller class

    # ---10)
    params.require(:blog_post).permit(:title, :content)
  end
end

# The params instance is using the require method to ensure that a specific parameter is present, and if it's not provided, the require method throws an error. The permit method returns a copy of the parameters object, returning only the permitted keys and values. When creating a new ActiveRecord model, only the permitted attributes are passed into the model 
