defmodule EvolvingContent.Repo do
  use Ecto.Repo,
    otp_app: :evolving_content,
    adapter: Ecto.Adapters.Postgres
end
