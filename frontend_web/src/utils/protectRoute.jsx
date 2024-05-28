export function ProtectRoute({ children }) {
    const location = useLocation();
    if (!checkAuthToken()) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
  }