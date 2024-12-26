import {
  Avatar,
  Box,
  Typography,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import Logo from "../../assets/Images/Logo.png";
import HomeIcon from "../../assets/Images/home.png";
import Code from "../../assets/Images/code.png";
import Cloud from "../../assets/Images/cloud.png";
import Book from "../../assets/Images/book.png";
import Setting from "../../assets/Images/setting.png";
import Call from "../../assets/Images/call.png";
import Logout from "../../assets/Images/logout.png";
import Menu from "../../assets/Images/menu.png";
import Cross from "../../assets/Images/cross.png";
import Homes from "../../assets/Images/Homess.png";
import { useState } from "react";
import Repositories from "./Repositories";

const Home = () => {
  const [user, setUser] = useState("Sarthak");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <Box
        width="15%"
        height={"100vh"}
        position={"relative"}
        sx={{
          "@media only screen and (max-width: 768px)": {
            display: "none",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "160px",
            padding: "20px",
          }}
        >
          <Avatar src={`${Logo}`} sx={{ width: "27px", height: "27px" }} />
          <Box>
            <Typography
              fontSize={"20px"}
              fontWeight={"200"}
              fontFamily={"Satoshi-Normal"}
            >
              CodeAnt AI
            </Typography>
          </Box>
        </Box>
        <Box padding={"0 20px "}>
          <Select
            value={user}
            onChange={(e) => setUser(e.target.value)}
            sx={{ width: "180px", mt: "10px" }}
            size="small"
          >
            <MenuItem value={"Sarthak"}>Sarthak</MenuItem>
            <MenuItem value={"User 1"}>User 1</MenuItem>
            <MenuItem value={"User 2"}>User 2</MenuItem>
            <MenuItem value={"User 3"}>User 3</MenuItem>
          </Select>
        </Box>
        <Box m="0 10px" mt="20px">
          <Button
            sx={{
              border: "1px solid #D8DAE5",
              width: "200px",
              height: "45px",
              color: "white",
              fontWeight: "600",
              fontSize: "12px",
              backgroundColor: "#1570EF",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Avatar
              src={`${HomeIcon}`}
              sx={{ width: "18px", height: "18px", mr: "5px" }}
            />
            Repositories
          </Button>
        </Box>
        <Box m="0 10px">
          <Button
            sx={{
              width: "200px",
              height: "45px",
              color: "black",
              fontWeight: "600",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <img src={`${Code}`} style={{ marginRight: "5px" }} />
            AI Code Review
          </Button>
        </Box>
        <Box m="0 10px">
          <Button
            sx={{
              width: "200px",
              height: "45px",
              color: "black",
              fontWeight: "600",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <img src={`${Cloud}`} style={{ marginRight: "5px" }} />
            Cloud Security
          </Button>
        </Box>
        <Box m="0 10px">
          <Button
            sx={{
              width: "200px",
              height: "45px",
              color: "black",
              fontWeight: "600",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <img src={`${Book}`} style={{ marginRight: "5px" }} />
            How to Use
          </Button>
        </Box>
        <Box m="0 10px">
          <Button
            sx={{
              width: "200px",
              height: "45px",
              color: "black",
              fontWeight: "600",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <img src={`${Setting}`} style={{ marginRight: "5px" }} />
            Settings
          </Button>
        </Box>
        <Box position={"absolute"} left={"0"} bottom={"0"} width={"200px"}>
          <Box m="0 20px">
            <Button
              sx={{
                width: "200px",
                height: "45px",
                color: "black",
                fontWeight: "600",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <img src={`${Call}`} style={{ marginRight: "5px" }} />
              Support
            </Button>
          </Box>
          <Box m="0 20px">
            <Button
              sx={{
                width: "200px",
                height: "45px",
                color: "black",
                fontWeight: "600",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <img src={`${Logout}`} style={{ marginRight: "5px" }} />
              Logout
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        bgcolor={"#FAFAFA"}
        height={"100vh"}
        sx={{
          width: "85%",
          "@media only screen and (max-width: 768px)": {
            width: "100%",
          },
        }}
      >
        <Box
          sx={{
            display: "none",
            "@media only screen and (max-width: 768px)": {
              display: "block",
              height: "60px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px",
              "@media only screen and (min-width: 770px)": {
                display: "none",
              },
              position: "absolute",
              width: "100%",
              zIndex: "10",
              bgcolor: "white",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "80%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Avatar
                  src={`${Logo}`}
                  sx={{ width: "30px", height: "27px" }}
                />
                <Box>
                  <Typography
                    fontSize={"20px"}
                    fontWeight={"200"}
                    fontFamily={"Satoshi-Normal"}
                  >
                    CodeAnt AI
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Button
                  // sx={{ position: "absolute", right: "0", top: "0." }}
                  onClick={toggleMenu}
                >
                  {menuOpen ? (
                    <img
                      src={`${Cross}`}
                      style={{ padding: "0", margin: "0" }}
                    />
                  ) : (
                    <img
                      src={`${Menu}`}
                      style={{ padding: "0", margin: "0" }}
                    />
                  )}
                </Button>
              </Box>
            </Box>
            {menuOpen && (
              <>
                <Box
                  sx={{
                    width: "100%",
                    bgcolor: "white",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Box padding={"0 10px "}>
                    <Select
                      value={user}
                      onChange={(e) => setUser(e.target.value)}
                      sx={{ width: "400px", mt: "10px" }}
                      size="small"
                    >
                      <MenuItem value={"Sarthak"}>Sarthak</MenuItem>
                      <MenuItem value={"User 1"}>User 1</MenuItem>
                      <MenuItem value={"User 2"}>User 2</MenuItem>
                      <MenuItem value={"User 3"}>User 3</MenuItem>
                    </Select>
                  </Box>
                  <Box m="0 10px" >
                    <Button
                      sx={{
                        width: "200px",
                        height: "45px",
                        color: "black",
                        fontWeight: "600",
                        fontSize: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      <img src={`${Homes }`} style={{ marginRight: "5px" }} />
                      Repositories
                    </Button>
                  </Box>
                  <Box m="0 10px">
                    <Button
                      sx={{
                        width: "200px",
                        height: "45px",
                        color: "black",
                        fontWeight: "600",
                        fontSize: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      <img src={`${Code}`} style={{ marginRight: "5px" }} />
                      AI Code Review
                    </Button>
                  </Box>
                  <Box m="0 10px">
                    <Button
                      sx={{
                        width: "200px",
                        height: "45px",
                        color: "black",
                        fontWeight: "600",
                        fontSize: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      <img src={`${Cloud}`} style={{ marginRight: "5px" }} />
                      Cloud Security
                    </Button>
                  </Box>
                  <Box m="0 10px">
                    <Button
                      sx={{
                        width: "200px",
                        height: "45px",
                        color: "black",
                        fontWeight: "600",
                        fontSize: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      <img src={`${Book}`} style={{ marginRight: "5px" }} />
                      How to Use
                    </Button>
                  </Box>
                  <Box m="0 10px">
                    <Button
                      sx={{
                        width: "200px",
                        height: "45px",
                        color: "black",
                        fontWeight: "600",
                        fontSize: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      <img src={`${Setting}`} style={{ marginRight: "5px" }} />
                      Settings
                    </Button>
                  </Box>
                  <Box width={"200px"}>
                    <Box m="0 10px">
                      <Button
                        sx={{
                          width: "200px",
                          height: "45px",
                          color: "black",
                          fontWeight: "600",
                          fontSize: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <img src={`${Call}`} style={{ marginRight: "5px" }} />
                        Support
                      </Button>
                    </Box>
                    <Box m="0 10px">
                      <Button
                        sx={{
                          width: "200px",
                          height: "45px",
                          color: "black",
                          fontWeight: "600",
                          fontSize: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <img src={`${Logout}`} style={{ marginRight: "5px" }} />
                        Logout
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </>
            )}
          </Box>
        </Box>
        <Repositories />{" "}
      </Box>
    </Box>
  );
};

export default Home;
