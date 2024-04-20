import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../../pages/api/authContext";

const withAuth = (WrappedComponent) => {
  const WithAuthWrapper = (props) => {
    const router = useRouter();
    const { isAuthenticated } = useContext(AuthContext);

    useEffect(() => {
      if (!isAuthenticated) {
        router.push("/login");
      }
    }, [isAuthenticated]);

    if (!isAuthenticated) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuthWrapper;
};

export default withAuth;
