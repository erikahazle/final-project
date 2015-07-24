Rails.application.routes.draw do

  root "products#index"
  resources :products, :orders, :carts

  delete "/carts/delete" => "destroy#carts"

  get "/carts/:users_id" => "index#carts"
  
  devise_for :users, controllers: {
        sessions: 'users/sessions',
        registrations: 'users/registrations'
      }

  devise_scope :user do 
    get "/users/:authentication_token", to: "users/sessions#show"
    delete "/users/:authentication_token", to: "users/sessions#destroy"
  end

end
