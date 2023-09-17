# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    # where our requests are coming from, eg.: our react app's IP or URL
    # origins "example.com"
    origins "http://127.0.0.1:5173/"
    # origins "*"     # anyone can access API
    # origins "https://deploy.domain.com"

    resource "*",
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
