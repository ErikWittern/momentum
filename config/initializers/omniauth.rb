if ENV['PROXY_HOST'].present?
  OmniAuth.config.full_host = ENV['PROXY_HOST']
end
