import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";

import RubikGemstones from "../../photos//RubikGemstones-Regular.ttf";
import Button from "../Button/Button";
import Qr from "../../photos/qr.png";

const theme = createTheme({
  typography: {
    fontFamily: "RubikGemstones, Arial",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'RubikGemstones';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('RubikGemstones'), local('RubikGemstones-Regular'), url(${RubikGemstones}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

const MessageBox = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          border: "3px solid #db5461",
          background: "#fafafa",
          padding: "10px",
          borderRadius: "20px",
          margin: "20% 0",
        }}
      >
        <Typography
          variant="h5"
          textAlign="center"
          fontWeight="bolder"
          sx={{ fontFamily: "RubikGemstones", color: "#db5461" }}
        >
          Fresher Welcome 11/2022
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#db5461",
            textAlign: "center",
            wordWrap: "break-word",
          }}
        >
          Selectionထဲပါ၀င်သွားတဲ့သူငယ်ချင်းတွေကိုတူတူအားပေးလိုက်ကြရအောင်။
        </Typography>
      </Box>
      <Box>
        <img src={Qr} alt="Qrcode" style={{ width: "100%" }} />
      </Box>
      <Box
        sx={{
          border: "3px solid #db5461",
          background: "#fafafa",
          padding: "10px",
          borderRadius: "20px",
          margin: "20% 0",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            color: "#db5461",
            textAlign: "center",
            wordWrap: "break-word",
          }}
        >
          --Joker Title နေရာမှာ (မောင်/မ .....) အတိုင်းမြန်မာလိုရေးပေးပါခင်ဗျာ။
          <br />
          --ခုမဲပေးတဲ့စနစ်ကSelection
          တစ်ယောက်ချင်းဆီကိုTitleတစ်ခုဆီပေးလို့ရပါတယ်။
        </Typography>
      </Box>
      <Button />
    </ThemeProvider>
  );
};

export default MessageBox;
