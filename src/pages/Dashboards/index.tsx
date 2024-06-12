import { BasicBarChart } from "pages/Dashboards/BasicBarChart";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SimplePie from "./BasicPieCharts";
import { StackedBarChart } from "./StackedBarChart";
import SimpleWordCloud from "./WordCloud";
import AspectBasedStats from "pages/Components/Dashboard/AspectBasedBox";
import AspectBasedList from "pages/Components/Dashboard/AspectBasedList";

const Dashboard = () => {
  document.title = "Dashboard | Bizzagi - Aspect Based Sentiment Analysis";
  const navigate = useNavigate();
  useEffect(() => navigate("/dashboard"), [navigate]);

  const [Search, setSearch] = useState<string>("")
  const [FilterAspect, setFilterAspect] = useState<string|null>(null)
  const [FilterSentiment, setFilterSentiment] = useState<number|null>(null)

  return (
    <React.Fragment>
      <div className="mt-5 md:flex md:gap-3">
        <div className="basis-5/12">
          <div className="bg-white shadow-sm w-full">
            <AspectBasedStats handleSearch={setSearch} handleFilterAspect={setFilterAspect} handleFilterSentiment={setFilterSentiment} />
            <AspectBasedList searchKey={Search} filterSentiment={FilterSentiment} filterAspect={FilterAspect} />
          </div>
        </div>
        <div className="md:basis-7/12 md:grid md:grid-cols-2 md:gap-2">
          {/* Aspect Chart */}
          <div className="card">
            <div className="card-body">
              <h6 className="mb-4 text-15">Aspect</h6>
              <BasicBarChart chartId="basicBar" />
            </div>
          </div>

          {/* Pie Chart for Sentiment */}
          <div className="card">
            <div className="card-body">
              <h6 className="mb-4 text-15">Sentiment</h6>
              <SimplePie chartId="sentiment-chart" />
            </div>
          </div>

          {/* Aspect Based Sentiment Chart */}
          <div className="card col-span-2">
            <div className="card-body">
              <h6 className="mb-4 text-15">Aspect & Sentiment</h6>
              <StackedBarChart chartId="aspect-based-chart" />
            </div>
          </div>
          {/* TODO: Fix This word cloud that cause css error */}
          {/* Word Cloud Chart */}
          <div className="card col-span-2">
            <div className="card-body">
              <h6 className="mb-4 text-15">Word Cloud Chart</h6>
              <SimpleWordCloud />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
