import { BasicBarChart } from "pages/Dashboards/BasicBarChart";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SimplePie from "./BasicPieCharts";
import { StackedBarChart } from "./StackedBarChart";
import SimpleWordCloud from "./WordCloud";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => navigate("/dashboard"), [navigate]);

  return (
    <React.Fragment>
      <div className="mt-5 md:flex md:gap-3">
        <div className="basis-5/12">A</div>
        <div className="md:basis-7/12 md:grid md:grid-cols-2 md:gap-3">
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
              <StackedBarChart chartId="aspect-based-chart"/>
            </div>
          </div>
          {/* TODO: Fix This word cloud that cause css error */}
          {/* Word Cloud Chart */}
          <div className="card col-span-2">
            <div className="card-body">
              <h6 className="mb-4 text-15">Word Cloud Chart</h6>
              <SimpleWordCloud/>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
