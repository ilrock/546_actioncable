Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  
  # /chatrooms/:id
  resources :chatrooms, only: :show do
    # POST /chatrooms/:chatroom_id/messages
    resources :messages, only: :create
  end
  # DELETE /messages/:id
  # resources :messages, only: :destroy
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
