import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import BGIMG from "../../assets/Images/bg.png";
import Logo from "../../assets/Images/Logo.png";
import Graph from "../../assets/Images/graph.png";
import UpArrow from "../../assets/Images/UpArrow.png";
import GitLogo from "../../assets/Images/GitIcon.png";
import BitBucketIcon from "../../assets/Images/BitBucketIcon.png";
import AzureIcon from "../../assets/Images/AzureIcon.png";
import GitLab from "../../assets/Images/GitLabIcon.png";
import SSOIcon from "../../assets/Images/SSOIcon.png";

export default function Login() {
  const [type, setType] = useState("SAAS");
  
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        background: "#FAFAFA",
        fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif"
      }}
    >
      <Box
        width="50%"
        height="100%"
        sx={{
          position: "relative",
          background: "white",
          "@media only screen and (max-width: 768px)": {
            display:'none'
          },
        }}
      >
        <Box sx={{ position: "absolute", top: "25%", left: "20%" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              flexDirection: "column",
              width: "447px",
              borderRadius: "24px",
              height: "170px",
              boxShadow: "0px 0px 24px 0px #08173529",
              bgcolor: "white",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "60%",
              }}
            >
              <Avatar src={`${Logo}`} sx={{ width: "28px", height: "31px" }} />
              <Box>
                <Typography fontSize={"13px"} fontWeight={"700"}>
                  AI to Detect & Autofix Bad Code
                </Typography>
              </Box>
            </Box>
            <Divider width="100%" />
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box>
                    <Typography fontWeight={700}>30+</Typography>
                  </Box>
                  <Box>
                    <Typography fontSize={"13px"}>Language Support</Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box>
                    <Typography fontWeight={700}>10K+</Typography>
                  </Box>
                  <Box>
                    <Typography fontSize={"13px"}>Developers</Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box>
                    <Typography fontWeight={700}>100K+</Typography>
                  </Box>
                  <Box>
                    <Typography fontSize={"13px"}>Hours</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              boxShadow: "0px 0px 24px 0px #08173529",
              borderRadius: "24px",
              position: "absolute",
              top: "47%",
              left: "46%",
              width: "270px",
              height: "164px",
              bgcolor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "50%",
                width: "100%",
              }}
            >
              <Box sx={{ margin: "30px" }}>
                <Avatar src={Graph} sx={{ width: "56px", height: "56px" }} />
              </Box>
              <Box sx={{ marginRight: "40px" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Avatar
                    src={UpArrow}
                    sx={{ height: "28px", width: "28px" }}
                  />
                  <Typography fontSize="13px" color="#0049C6" fontWeight="700">
                    14%
                  </Typography>
                </Box>
                <Box sx={{ marginLeft: "15px", marginTop: "-5px" }}>
                  <Typography fontSize="11px">This Week</Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ height: "50%", textAlign: "left", width: "75%" }}>
              <Typography fontWeight={700} fontSize={"13px"}>
                Issues Fixed
              </Typography>
              <Typography fontWeight={700} fontSize={"32px"}>
                500K+
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ position: "absolute", bottom: "0", left: "0" }}>
          <img src={`${BGIMG}`} height={"319px"} width={"214px"} />
        </Box>
      </Box>
      <Box
        width="50%"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          
        }}
      >
        <Box
          sx={{
            width: "600px",
            height: "500px",
            boxShadow: "0px 1px 10px 0px #08173529",
            bgcolor: "white",
            borderRadius: "10px",
            border: "1px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              flexDirection: "column",
              height: "220px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "space-evenly",
                justifyContent: "space-between",
                width: "150px",
                
              }}
            >
              <Avatar src={`${Logo}`} sx={{ width: "27px", height: "30px" }} />
              <Box>
                <Typography
                  fontSize={"22px"}
                  fontWeight={"200"}
                  fontFamily={"Satoshi-Normal"}
                >
                  CodeAnt AI
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography fontSize={"28px"} fontWeight={"600"}>
                Welcome to CodeAnt AI
              </Typography>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Button
                sx={{
                  height: "50px",
                  width: "260px",
                  bgcolor: type === "SAAS" ? "#1570EF" : "#E9EAEB",
                  fontSize: "15px",
                  fontWeight: "600",
                  color: type === "SAAS" ? "white" : "black",
                }}
                onClick={() => setType("SAAS")}
              >
                SAAS
              </Button>
              <Button
                sx={{
                  height: "50px",
                  width: "260px",
                  bgcolor: type !== "SAAS" ? "#1570EF" : "#E9EAEB",
                  fontSize: "15px",
                  fontWeight: "600",
                  color: type !== "SAAS" ? "white" : "black",
                }}
                onClick={() => setType("Self Hosted")}
              >
                Self Hosted
              </Button>
            </Box>
          </Box>
          <Divider sx={{ width: "600px", height: "2px" }} />
          {type === "SAAS" ? (
            <>
              <Box mt="20px">
                <Button
                  sx={{
                    border: "1px solid #D8DAE5",
                    width: "400px",
                    height: "50px",
                    color: "black",
                    fontWeight: "600",
                    fontSize: "12px",
                  }}
                >
                  <Avatar
                    src={`${GitLogo}`}
                    sx={{ width: "18px", height: "18px", mr: "5px" }}
                  />
                  Sign in with Github
                </Button>
              </Box>
              <Box mt="10px">
                <Button
                  sx={{
                    border: "1px solid #D8DAE5",
                    width: "400px",
                    height: "50px",
                    color: "black",
                    fontWeight: "600",
                    fontSize: "12px",
                  }}
                >
                  <Avatar
                    src={`${BitBucketIcon}`}
                    sx={{ width: "18px", height: "18px", mr: "5px" }}
                  />
                  Sign in with Bitbucket
                </Button>
              </Box>
              <Box mt="10px">
                <Button
                  sx={{
                    border: "1px solid #D8DAE5",
                    width: "400px",
                    height: "50px",
                    color: "black",
                    fontWeight: "600",
                    fontSize: "12px",
                  }}
                >
                  <Avatar
                    src={`${AzureIcon}`}
                    sx={{ width: "18px", height: "18px", mr: "5px" }}
                  />
                  Sign in with Azure Devops
                </Button>
              </Box>
              <Box mt="10px">
                <Button
                  sx={{
                    border: "1px solid #D8DAE5",
                    width: "400px",
                    height: "50px",
                    color: "black",
                    fontWeight: "600",
                    fontSize: "12px",
                  }}
                >
                  <Avatar
                    src={`${GitLab}`}
                    sx={{ width: "18px", height: "18px", mr: "5px" }}
                  />
                  Sign in with GitLab
                </Button>
              </Box>
            </>
          ) : (
            <>
              <Box mt="20px">
                <Button
                  sx={{
                    border: "1px solid #D8DAE5",
                    width: "400px",
                    height: "50px",
                    color: "black",
                    fontWeight: "600",
                    fontSize: "12px",
                  }}
                >
                  <Avatar
                    src={`${GitLab}`}
                    sx={{ width: "18px", height: "18px", mr: "5px" }}
                  />
                  Self Hosted GitLab
                </Button>
              </Box>
              <Box mt="10px">
                <Button
                  sx={{
                    border: "1px solid #D8DAE5",
                    width: "400px",
                    height: "50px",
                    color: "black",
                    fontWeight: "600",
                    fontSize: "12px",
                  }}
                >
                  <Avatar
                    src={`${SSOIcon}`}
                    sx={{ width: "18px", height: "18px", mr: "5px" }}
                  />
                  Sign in with SSO
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Box>
      <Box position={"absolute"} right={"15%"} bottom={"8%"}>
        <Typography fontSize={"13px"} fontWeight={"500"}>
          By signing up you agree to the
          <span style={{ fontWeight: "bold" }}> Privacy Policy.</span>
        </Typography>
      </Box>
    </Box>
  );
}
