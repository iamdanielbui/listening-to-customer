import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Share = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const goToShareWithEmailPage = () => {
    navigate("/share-with-email");
  };
  return (
    <Stack bgcolor={"#051e40"} alignItems={"center"} height={"100vh"} padding={2} justifyContent={"center"}>
      <Stack boxShadow={1} bgcolor={"white"} borderRadius={2} minWidth={355} maxWidth={700} justifyContent={"center"} alignItems={"center"} padding={3} gap={2}>
        <Typography variant="h6" color={"#051e40"}>
          Chia sẻ
        </Typography>
        <Typography>Đây là một số cách bạn có thể chia sẻ với bạn bè và đồng nghiệp của mình:</Typography>
        <Button fullWidth variant="contained">
          Chia sẻ qua Facebook
        </Button>
        <Button fullWidth variant="contained" sx={{ bgcolor: "#e9f4ff", color: "#2592f2", boxShadow: 0 }} onClick={goToShareWithEmailPage}>
          Chia sẻ qua Email
        </Button>
        <Button fullWidth variant="contained" sx={{ bgcolor: "#e9f4ff", color: "#2592f2", boxShadow: 0 }}>
          Sao chép đường dẫn đén trang kết quả
        </Button>
        <Button
          variant="text"
          onClick={handleGoBack}
          sx={{
            fontWeight: 700,
            marginTop: 2,
          }}
        >
          Hủy
        </Button>
      </Stack>
    </Stack>
  );
};

export default Share;
