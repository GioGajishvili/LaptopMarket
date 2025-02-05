import "./AboutUs.css";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import Review from "../../Components/Review/Review";
import { Box } from "@mui/material";
import { useEffect, useRef } from "react";

const AboutUs = () => {
  const ref = useRef<any>()
  useEffect(()=> {
    ref.current?.scrollIntoView(0,0)
  },[])
  return (
    <Box className="about-us-page">
      <Box ref={ref} className="arrow-routing">
        <Link
          to="/"
          style={{ marginRight: "20px", fontSize: "inherit" }}
          className="about-us-link"
        >
          Home
        </Link>
        <BiChevronRight
          style={{ marginRight: "20px", color: "rgb(56, 91, 187)" }}
          className="greater-than-icon"
          size={"18px"}
        />
        <Link
          to="/AboutUs"
          style={{ fontSize: "inherit" }}
          className="about-us-link"
        >
          About Us
        </Link>
      </Box>
      <Box component={"h1"} className="about-us-title">
        About Us
      </Box>
      <Box>
        <Box className="first-container">
          <Box
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "400px",
              height: "280px",
              marginRight: "200px",
            }}
          >
            <Box style={{ height: "666px", width: "400px" }}>
              <Box
                component={"h1"}
                style={{
                  marginTop: "150px",
                  marginBottom: "60px",
                  color: "white",
                }}
              >
                A Family That Keeps On Growing
              </Box>
              <Box component={"p"} style={{ color: "white" }}>
                We always aim to please the home market, supplying great
                computers and hardware at great prices to non-corporate
                customers, through our large Melbourne CBD showroom and our
                online store.
              </Box>
              <Box component={"p"} style={{ color: "white" }}>
                Shop management approach fosters a strong customer service focus
                in our staff. We prefer to cultivate long-term client
                relationships rather than achieve quick sales, demonstrated in
                the measure of our long-term success.
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              component={"img"}
              style={{
                marginTop: "100px",
                borderRadius: "50px",
                marginRight: "50px",
              }}
              src="./assets/images/PhotoOffice.png"
            />
          </Box>
        </Box>
        <Box className="second-section-container">
          <Box
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginRight: "200px",
            }}
          >
            <Box>
              <Box
                component={"img"}
                style={{
                  marginTop: "50px",
                  borderRadius: "50px",
                }}
                src="./assets/images/Keybord.png"
              />
            </Box>
            <Box style={{ marginLeft: "50px" }}>
              <Box
                component={"h1"}
                style={{
                  marginTop: "160px",
                  marginBottom: "60px",
                  color: "black",
                }}
              >
                Market.com
              </Box>
              <Box component={"p"} style={{ color: "black", width: "420px" }}>
                Shop is a proudly Australian owned, Melbourne based supplier of
                I.T. goods and services, operating since 1991. Our client base
                encompasses individuals, small business, corporate and
                government organisations. We provide complete business IT
                solutions, centred on high quality hardware and exceptional
                customer service.
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="third-section-container">
          <Box
            style={{
              marginTop: "40px",
              marginRight: "200px",
            }}
          >
            <Box
              component={"h1"}
              style={{
                marginTop: "180px",
                marginBottom: "60px",
                color: "white",
              }}
            >
              You're In Safe Hands
            </Box>
            <Box
              component={"p"}
              style={{ color: "white", width: "400px", height: "280px" }}
            >
              Experience a 40% boost in computing from last generation. MSI
              Desktop equips the 10th Gen. Intel® Core™ i7 processor with the
              upmost computing power to bring you an unparalleled gaming
              experience. *Performance compared to i7-9700. Specs varies by
              model.
            </Box>
          </Box>
          <Box>
            <Box
              component={"img"}
              style={{
                marginTop: "80px",
                borderRadius: "50px",
                marginRight: "10px",
              }}
              src="./assets/images/PcPhoto.png"
            />
          </Box>
        </Box>
        <Box className="fourth-section-container">
          <Box
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginRight: "260px",
            }}
          >
            <Box>
              <Box
                component={"img"}
                style={{
                  maxWidth: "750px",
                  marginRight: "50px",
                  borderRadius: "50px",
                }}
                src="./assets/images/WhitePc.png"
              />
            </Box>
            <Box>
              <Box
                component={"h1"}
                style={{
                  maxWidth: "400px",
                  marginTop: "150px",
                  marginBottom: "60px",
                  color: "black",
                }}
              >
                The Highest Quality of Products
              </Box>
              <Box
                component={"p"}
                style={{ color: "black", width: "400px", height: "280px" }}
              >
                We guarantee the highest quality of the products we sell.
                Several decades of successful operation and millions of happy
                customers let us feel certain about that. Besides, all items we
                sell pass thorough quality control, so no characteristics
                mismatch can escape the eye of our professionals.
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="fifth-section-container">
        <Box
          style={{
            marginTop: "30px",
            width: "400px",
            height: "280px",
            marginRight: "230px",
          }}
        >
          <Box
            component={"h1"}
            style={{
              marginTop: "160px",
              marginBottom: "60px",
              color: "white",
            }}
          >
            Delivery to All Regions
          </Box>
          <Box component={"p"} style={{ color: "white" }}>
            We deliver our goods all across Australia. No matter where you live,
            your order will be shipped in time and delivered right to your door
            or to any other location you have stated. The packages are handled
            with utmost care, so the ordered products will be handed to you safe
            and sound, just like you expect them to be.
          </Box>
        </Box>
        <Box>
          <Box
            component={"img"}
            style={{
              maxWidth: "360px",
              marginTop: "100px",
              borderRadius: "50px",
              marginRight: "50px",
            }}
            src="./assets/images/FuturePc.png"
          />
        </Box>
      </Box>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Review />
      </Box>
    </Box>
  );
};

export default AboutUs;
