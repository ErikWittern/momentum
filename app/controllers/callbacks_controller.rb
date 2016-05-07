class CallbacksController < ApplicationController
  skip_before_action :authenticate_user!

  def facebook
      @user = User.from_omniauth(request.env["omniauth.auth"])
      sign_in_and_redirect @user
    end

  def failure
    byebug
  end

end
