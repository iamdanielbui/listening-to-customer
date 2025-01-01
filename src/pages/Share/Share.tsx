import { Button, Stack, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const Share = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const goToShareWithEmailPage = () => {
    navigate("/share-with-email");
  };
  const handleShare = () => {
    const url = "https://listening-to-customer.vercel.app/share-with-email";
    const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(fbShareUrl, "_blank", "width=600,height=400");
  };
  return (
    <Stack bgcolor={"#051e40"} alignItems={"center"} height={"100vh"} padding={2} justifyContent={"center"}>
      <Helmet>
        <meta property="og:title" content="Trang chia sẻ lên Facebook" />
        <meta property="og:description" content="Một trang nội dung hay để chia sẻ." />
        <meta property="og:image" content="../../assets/thumbnails/tn-lever5.jpg" />
        <meta property="og:url" content="https://listening-to-customer.vercel.app/share-with-email" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Stack boxShadow={1} bgcolor={"white"} borderRadius={2} minWidth={355} maxWidth={700} justifyContent={"center"} alignItems={"center"} padding={3} gap={2}>
        <Typography variant="h6" color={"#051e40"}>
          Chia sẻ
        </Typography>
        <Typography>Đây là một số cách bạn có thể chia sẻ với bạn bè và đồng nghiệp của mình:</Typography>
        <Button fullWidth variant="contained" onClick={handleShare}>
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
