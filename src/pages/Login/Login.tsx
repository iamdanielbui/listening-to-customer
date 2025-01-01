import { useState } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import IconLocket from "../../assets/IconLocket";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const goToGuiPage = () => {
    if (isValidEmail) {
      navigate("/gui");
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = event.target.value;
    setEmail(emailValue);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(emailValue));
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
        value={email}
        onChange={handleEmailChange}
        sx={{
          backgroundColor: "white",
          borderRadius: "8px",
        }}
        error={!!email && !isValidEmail}
        helperText={!!email && !isValidEmail ? "Định dạng email không hợp lệ" : ""}
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
        disabled={!isValidEmail}
      >
        Bắt đầu
      </Button>
    </Stack>
  );
};

export default Login;
