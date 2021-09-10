# frozen_string_literal: true

class HelloWorldController < ApplicationController
  layout "hello_world"

  def index
    @hello_world_props = { name: "Stranger" }
    @list_of_names_props = { names: ["aaron","ryan","becky"] }
  end
end
