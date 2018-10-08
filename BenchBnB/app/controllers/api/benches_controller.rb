class Api::BenchesController < ApplicationController
  before_action :require_login, only: [:create]

  def index
    @benches = Bench.all
  end

  def create
    debugger
    @bench = Bench.create(bench_params)

    if @bench.save
      debugger
      render :show
    else
      render json: @bench.errors.full_messages
    end
  end

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng);
  end
end
