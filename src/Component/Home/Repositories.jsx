import { Button, Box, Typography, TextField, Chip } from "@mui/material";
import Search from "../../assets/Images/search.png";
import Refresh from "../../assets/Images/refresh.png";
import Add from "../../assets/Images/add.png";
import Dot from "../../assets/Images/dot.png";
import Database from "../../assets/Images/database.png";
import Data from "./DummyData.json";


const Repositories = () => {
  return (
    <Box
      m="20px"
      sx={{
        boxShadow: "0px 0px 24px 0px #08173529",
        "@media only screen and (max-width: 768px)": {
          m: "0",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          m: "20px",
          height: "130px",
          "@media only screen and (max-width: 768px)": {
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "column",
            p: "20px",
            m: "0",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-evenly",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Box>
            <Typography fontSize={"24px"} fontWeight={"600"}>
              Repositories
            </Typography>
          </Box>
          <Box>
            <Typography color="#414651" fontSize={"14px"} fontWeight={"400"}>
              33 total repositories
            </Typography>
          </Box>
          <Box>
            <TextField
              variant="outlined"
              slotProps={{
                input: {
                  startAdornment: <img src={Search} />,
                },
              }}
              placeholder="Search Repositories"
              size="small"
              sx={{
                width: "300px",
                "& .MuiInputBase-input": { padding: "10px" },
                boxShadow: "0px 0px 12px 0px #08173529",
              }}
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", mt: "10px" }}>
          <Box>
            <Button
              sx={{
                width: "fit-content",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mr: "10px",
                fontSize: "12px",
                color: "#414651",
                textTransform: "none",
                border: "2px solid #efefef",
              }}
              variant="outlined"
              size="small"
            >
              <img
                src={`${Refresh}`}
                style={{ marginRight: "5px", height: "15px" }}
              />
              <Box>Refresh All</Box>
            </Button>
          </Box>
          <Box>
            <Button
              variant="outlined"
              size="small"
              sx={{
                bgcolor: "#1570EF",
                width: "fit-content",
                height: "40px",
                color: "white",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                textTransform: "none",
                border: "none",
              }}
            >
              <img
                src={`${Add}`}
                style={{ marginRight: "2px", height: "16px" }}
              />
              <Box>Add Repository</Box>
            </Button>
          </Box>
        </Box>
      </Box>
      <Box>
        {Data.repositories.map((value) => (
          <Box key={Math.random*1000000} sx={{ borderTop: "2px solid #efefef" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "10px",
                padding: "0 20px",
                pt: "10px",
              }}
            >
              <Box>
                <Typography fontSize={"18px"} fontWeight={"500"}>
                  {value.name}
                </Typography>
              </Box>

              <Chip
                label={value.visibility}
                variant="outlined"
                sx={{
                  fontSize: "14px",
                  color: "#175CD3",
                  bgcolor: "#EFF8FF",
                  border: "1px solid #B2DDFF",
                  height: "25px",
                }}
              />
            </Box>
            <Box
              width={"fit-content"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              padding="10px 20px"
            >
              <Box mr="30px">
                <Typography color="#181D27" fontSize={"14px"}>
                  {value.language}{" "}
                  <img src={Dot} style={{ marginLeft: "5px" }} />
                </Typography>
              </Box>
              <Box mr="30px">
                <Typography color="#181D27" fontSize={"14px"}>
                  <img src={Database} style={{ marginRight: "5px" }} />{" "}
                  {value.size_kb + " KB"}
                </Typography>
              </Box>
              <Box>
                <Typography color="#181D27" fontSize={"14px"}>
                  {value.last_updated}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Repositories;
