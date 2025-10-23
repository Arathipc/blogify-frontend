
// export default AppRoutes;
import { Routes, Route } from "react-router-dom";
import PublicLayout from "../layout/layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Post from "../pages/Post";
import UserPost from "../pages/UserPost";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/post/:id" element={<Post />} />
        
        {/* Protected routes - require authentication */}
        <Route 
          path="/user-posts" 
          element={
            <ProtectedRoute>
              <UserPost />
            </ProtectedRoute>
          } 
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;





