import { Box } from "@mui/material";
import { ArrayForLinks } from "./ArrayForLinks";
import "./FooterLinksComponent.css";

const WrapperComponent = () => {
  return (
    <Box className="link-container">
      {ArrayForLinks.map((item) => {
        const { title, value, id } = item;
        return (
          <Box className="link-container" key={id}>
            <Box className="child-div">
              <Box component={"h2"} className="link-titles">
                {title}
              </Box>
              {value.map((item, index) => (
                <Box key={index}>
                  <Box component={"p"} className="link-values">
                    {item}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default WrapperComponent;
