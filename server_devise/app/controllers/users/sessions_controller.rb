class Users::SessionsController < Devise::SessionsController

  include ActionController::MimeResponds
  include ActionController::ImplicitRender
  skip_before_filter :require_no_authentication, only: [:create]

  def create
   user = User.find_for_database_authentication(email: params[:email])

   if user && user.valid_password?(params[:password])
     sign_in user
     render json: {
       id: user.id,
       success: true,
       email: user.email,
       authentication_token: user.authentication_token
       }, status: 201
    else
      render json: {
        errors: ["Invalid email or password"]
      }, status: 422
    end
  end 

  def show
    cart = []
    current_user.carts.each do |item|
      cart << item.product
    end

    render json: {
      :current_user => current_user,
      :cart => cart
    }
  end

  def destroy
    sign_out current_user
    render :json => {:success => true, :message => 'SUCCESS: logged out'}
  end

  private
    def current_user
      User.find_by authentication_token: params[:authentication_token]
    end

end
