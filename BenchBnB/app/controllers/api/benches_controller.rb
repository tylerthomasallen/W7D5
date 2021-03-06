class Api::BenchesController < ApplicationController
  before_action :require_login, only: [:create]

  def index
    @benches = Bench.in_bounds(bounds);
    render :index
  end

  def create
    @bench = Bench.create(bench_params)

    if @bench.save
      render :show
    else
      render json: @bench.errors.full_messages
    end
  end

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng);
  end

  def bounds
    params[:bounds]
  end
end
