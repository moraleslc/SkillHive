Rails.application.routes.draw do
  get 'overview/index'
  get 'login/index'
  get 'dashboard/index'
  resources :dashboard 
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "login#index"
end
