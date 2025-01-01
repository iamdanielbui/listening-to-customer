// import { Box, Button, Stack, TextField, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const ShareWithEmail = () => {
//   const navigate = useNavigate();
//   const handleGoBack = () => {
//     navigate(-1);
//   };
//   return (
//     <Stack bgcolor={"#051e40"} alignItems={"center"} height={"100vh"} padding={2} justifyContent={"center"}>
//       <Stack boxShadow={1} bgcolor={"white"} borderRadius={2} minWidth={355} maxWidth={700} justifyContent={"center"} alignItems={"center"} padding={3} gap={2}>
//         <Typography variant="h6" color={"#051e40"}>
//           Chia sẻ qua Email
//         </Typography>
//         <Typography>Vui lòng cung cấp địa chỉ Email mà bạn muốn cung cấp kết quả:</Typography>
//         <TextField fullWidth variant="outlined" placeholder="Địa chỉ email nhận kết quả" />
//         <Box display={"flex"} gap={1} width={"100%"}>
//           <Button fullWidth variant="contained" sx={{ bgcolor: "#e9f4ff", color: "#2592f2", boxShadow: 0 }} onClick={handleGoBack}>
//             Quay lại
//           </Button>
//           <Button fullWidth variant="contained" sx={{ boxShadow: 0 }}>
//             Gửi email
//           </Button>
//         </Box>
//       </Stack>
//     </Stack>
//   );
// };

// export default ShareWithEmail;

import { Helmet } from "react-helmet-async";

const ShareWithEmail = () => {
  const handleShare = () => {
    const url = "https://listening-to-customer.vercel.app/share-with-email";
    const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(fbShareUrl, "_blank", "width=600,height=400");
  };

  return (
    <div>
      <Helmet>
        <meta property="og:title" content="Trang chia sẻ lên Facebook" />
        <meta property="og:description" content="Một trang nội dung hay để chia sẻ." />
        <meta property="og:image" content="../../assets/thumbnails/tn-lever5.jpg" />
        <meta property="og:url" content="https://listening-to-customer.vercel.app/share-with-email" />
        <meta property="og:type" content="website" />
      </Helmet>

      <h1>Trang này có thể chia sẻ lên Facebook</h1>
      <p>Click nút dưới để chia sẻ.</p>

      <button onClick={handleShare}>Chia sẻ lên Facebook</button>
    </div>
  );
};

export default ShareWithEmail;
