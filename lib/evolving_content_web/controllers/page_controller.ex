defmodule EvolvingContentWeb.PageController do
  use EvolvingContentWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
