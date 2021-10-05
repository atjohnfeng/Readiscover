Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only:[:create]
    resources :books, only:[:show, :index] do
      resources :reviews, only:[:show, :index, :create, :update, :destroy]
    end
    resource :session, only:[:create, :destroy]
  end

end
