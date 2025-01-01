import { Button, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import IconLocket from "../../assets/IconLocket";

const Login = () => {
  const navigate = useNavigate();
  const goToGuiPage = () => {
    navigate("/gui");
  };
  return (
    <Stack gap={4} alignItems={"center"} maxWidth={1024} minWidth={355} width={"100%"}>
      <Typography color="#dadee3" fontSize={30} sx={{ textTransform: "uppercase" }} textAlign={"center"}>
        Công ty của bạn đã trưởng thành thế nào trong việc lắng nghe khách hàng?
      </Typography>
      <Typography color="#dadee3" textAlign={"center"}>
        Đánh giá khả năng của bạn trong việc lắng nghe, hiểu và đáp ứng các tín hiệu từ khách hàng.
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Địa chỉ email của bạn"
        sx={{
          backgroundColor: "white",
          borderRadius: "8px",
        }}
      />

      <Button
        onClick={goToGuiPage}
        variant="contained"
        endIcon={<IconLocket />}
        fullWidth
        sx={{
          height: 55,
          borderRadius: 2,
          fontWeight: "500",
          fontSize: 18,
          textTransform: "unset",
        }}
      >
        Bắt đầu
      </Button>
    </Stack>
  );
};

export default Login;
