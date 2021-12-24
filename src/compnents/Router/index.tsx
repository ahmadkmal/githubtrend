import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from '../Layout'
import TrendingTable from "../pages/TrendingTable";
import {
  LoadingOutlined,
} from '@ant-design/icons';
const Developers = React.lazy(() => import("../pages/TrendingTable/Developers"));
const Repositories = React.lazy(() => import("../pages/TrendingTable/Repositories"));

const Loading1 = () => {
  return <div style={{
    display: "flex", justifyContent: 'center', alignItems: 'center', flex: 1
  }}>
    <LoadingOutlined style={{ color: 'white' }} />
  </div>
}
const Loading = React.memo(Loading1)
const App = () => {


  return (




    <Routes>

      <Route path="/" element={<Navigate to="/repositories" replace={true} />}>
      </Route>

      <Route path="/" element={<Layout><TrendingTable /></Layout>}>

        <Route path="/developer" element={
          <React.Suspense fallback={<Loading />}>
            
            <Developers />
          </React.Suspense>
        }>

        </Route>
        <Route path="/repositories" element={
          <React.Suspense fallback={<Loading />}>

            <Repositories />
          </React.Suspense>
        }>

        </Route>
      </Route>

    </Routes>


  );
};
export default App;
