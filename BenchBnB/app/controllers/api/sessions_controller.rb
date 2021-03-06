class Api::SessionsController < ApplicationController

  def create
    username = params[:user][:username]
    pw = params[:user][:password]

    @user = User.find_by_credentials(username, pw)

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid login credentials"], status: 401
    end
  end

  def destroy
    @user = current_user

    if @user
      logout
      render "api/users/show"
    else
      render json: ['Nobody signed in'], status: 404
    end
  end
end
