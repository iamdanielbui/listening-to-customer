import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login/Login";
import Questions from "./pages/Questions/Questions";
import Gui from "./pages/Gui/Gui";
import Results from "./pages/Resutls/Results";
import { Box, Stack } from "@mui/material";
import Header from "./components/Hearder";
import Share from "./pages/Share/Share";
import ShareWithEmail from "./pages/Share/ShareWithEmail";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const location = useLocation();

  const noHeaderRoutes = ["*", "/404", "/share", "/share-with-email"];

  const isNoHeaderRoute = noHeaderRoutes.includes(location.pathname);

  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
      <Stack bgcolor={"#051e40"} alignItems={"center"} height={"100vh"} padding={2}>
        {!isNoHeaderRoute && (
          <Box paddingY={12}>
            <Header />
          </Box>
        )}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/gui" element={<Gui />} />
          <Route path="/question" element={<Questions />} />
          <Route path="/result" element={<Results />} />
          <Route path="/share" element={<Share />} />
          <Route path="/share-with-email" element={<ShareWithEmail />} />
          <Route path="*" element={<h1 style={{ color: "#fff", textAlign: "center" }}>404 - Trang không tồn tại</h1>} />
        </Routes>
      </Stack>
    </HelmetProvider>
  );
}

export default App;
