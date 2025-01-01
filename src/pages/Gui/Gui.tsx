import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import IconArrowRight from "../../assets/IconArrowRight";
import ContainerBox from "../../components/ContainerBox";

const Gui = () => {
  const navigate = useNavigate();
  const goToQuestionPage = () => {
    navigate("/question");
  };
  return (
    <ContainerBox>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={1.5}>
        <Box bgcolor={"#198df9"} padding={0.6} borderRadius={"50%"} />
        <Typography fontSize={14}>HƯỚNG DẪN TRẢ LỜI</Typography>
      </Box>
      <Stack width={"100%"} gap={2}>
        <Typography fontWeight={"bold"} fontSize={20}>
          Hãy dựa vào hướng dẫn sau đây để trả lời các câu hỏi:
        </Typography>
        <Box marginLeft={2}>
          <Box component="ul" sx={{ typography: "body1", padding: 0, margin: 0 }}>
            <Box component="li" sx={{ marginBottom: 1 }}>
              Chọn "Có": nếu câu đó phản ánh hiện trạng đang có VÀ được thực hiện một cách nhất quán (ít nhất 80% thời gian)
            </Box>
            <Box component="li" sx={{ marginBottom: 1 }}>
              Chọn "Không có": nếu hoàn toàn chưa từng thực hiện
            </Box>
            <Box component="li">Chọn "Không rõ vấn đề này": nếu không chắc chắn đã thực hiện hay chưa</Box>
          </Box>
        </Box>
      </Stack>
      <Button
        onClick={goToQuestionPage}
        variant="contained"
        endIcon={<IconArrowRight />}
        fullWidth
        sx={{
          borderRadius: 2,
          fontWeight: "500",
          fontSize: 18,
          textTransform: "unset",
        }}
      >
        Bắt đầu
      </Button>
    </ContainerBox>
  );
};

export default Gui;
