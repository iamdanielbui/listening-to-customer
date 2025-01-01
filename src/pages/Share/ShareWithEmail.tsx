import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ShareWithEmail = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <Stack bgcolor={"#051e40"} alignItems={"center"} height={"100vh"} padding={2} justifyContent={"center"}>
      <Stack boxShadow={1} bgcolor={"white"} borderRadius={2} minWidth={355} maxWidth={700} justifyContent={"center"} alignItems={"center"} padding={3} gap={2}>
        <Typography variant="h6" color={"#051e40"}>
          Chia sẻ qua Email
        </Typography>
        <Typography>Vui lòng cung cấp địa chỉ Email mà bạn muốn cung cấp kết quả:</Typography>
        <TextField fullWidth variant="outlined" placeholder="Địa chỉ email nhận kết quả" />
        <Box display={"flex"} gap={1} width={"100%"}>
          <Button fullWidth variant="contained" sx={{ bgcolor: "#e9f4ff", color: "#2592f2", boxShadow: 0 }} onClick={handleGoBack}>
            Quay lại
          </Button>
          <Button fullWidth variant="contained" sx={{ boxShadow: 0 }}>
            Gửi email
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

export default ShareWithEmail;
