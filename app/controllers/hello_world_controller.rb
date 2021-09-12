# frozen_string_literal: true

class HelloWorldController < ApplicationController
  layout "hello_world"

  def index
    @hello_world_props = { name: "Stranger" }
    @list_of_names_props = { people: Person.select(:name) }
  end
end
