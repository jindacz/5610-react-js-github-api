import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import AppLayout from "./components/AppLayout";
import Repositories from "./components/Repositories";
import RepositoryDetail from "./components/RepositoryDetail";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./UserContext";
import "./style/normalize.css";
import "./style/index.css";

ReactDOM.render(
  // wrap everthing in user provider, have access to user, and setUser
  <UserProvider>
    <BrowserRouter> 
    {/* comes from react router package */}
      <Routes>
        {/* home route */}
        <Route path="/" element={<Home />} />

        {/* app routes, all of them have layout */}
        <Route path="app" element={<AppLayout />}>
          {/* /app/repo */}
          <Route path="repositories" element={<Repositories />} />
          <Route index element={<Profile />} />
          {/* dynamic routing, render repo details /: */}
          <Route
            path="repositories/:repositoryId"
            element={<RepositoryDetail />}
          />
        </Route>

        {/* else route: everything else render this route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </UserProvider>,
  document.getElementById("root")
);
