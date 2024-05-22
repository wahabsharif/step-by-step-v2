import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
// internal
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/headers/header";
import Footer from "@/layout/footers/footer";
import ProfileArea from "@/components/my-account/profile-area";
import { useGetUserOrdersQuery } from "@/redux/features/order/orderApi";
import Loader from "@/components/loader/loader";

const ProfilePage = () => {
  const router = useRouter();
  const { data: orderData, isError, isLoading } = useGetUserOrdersQuery();
  useEffect(() => {
    const isAuthenticate = Cookies.get("userInfo");
    if (!isAuthenticate) {
      router.push("/login");
    }
  }, [router]);

  if (isLoading) {
    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <Loader loading={isLoading} />
      </div>
    );
  }

  return (
    <Wrapper>
      <SEO pageTitle="Profile" />
      <Header />
      <ProfileArea orderData={orderData} />
      <Footer />
    </Wrapper>
  );
};

export default ProfilePage;
