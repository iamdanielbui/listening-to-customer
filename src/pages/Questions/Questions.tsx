import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import IconArrowLeft from "../../assets/IconArrowLeft";
import ContainerBox from "../../components/ContainerBox";
import QuestionsData from "../../data/assessment.json"; // Đường dẫn tới file JSON
import IconArrowRight from "../../assets/IconArrowRight";
import { useNavigate } from "react-router-dom";

interface Option {
  id: number;
  text: string;
  score: number;
}

interface Question {
  id: number;
  title: string;
  options: Option[];
}

interface QuestionsData {
  title: string;
  description: string;
  questions: Question[];
}

const Questions: React.FC = () => {
  const data: QuestionsData = QuestionsData as QuestionsData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number | null>>({}); //
  const [totalScore, setTotalScore] = useState(0);
  const navigate = useNavigate();
  const currentQuestion = data.questions[currentIndex];

  const goToResultPage = () => {
    navigate("/result", { state: { score: totalScore } });
  };
  const handleAnswer = (questionId: number, option: Option) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: option.id,
    }));

    setTotalScore((prevScore) => {
      const previousOptionId = answers[questionId];
      const previousOptionScore = currentQuestion.options.find((opt) => opt.id === previousOptionId)?.score || 0;

      return prevScore - previousOptionScore + option.score;
    });
  };

  const handleNext = () => {
    if (currentIndex < data.questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert(`Hoàn thành! Tổng điểm của bạn: ${totalScore}`);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <ContainerBox>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={1.5}>
        <Box bgcolor={"#198df9"} padding={0.6} borderRadius={"50%"} />
        <Typography fontSize={14}>CÂU HỎI {currentIndex + 1}/10</Typography>
      </Box>
      <Typography fontWeight={400} fontSize={20}>
        {currentQuestion.title}
      </Typography>
      <Stack gap={2} width={"100%"}>
        {currentQuestion.options.map((option) => (
          <Button
            key={option.id}
            variant="outlined"
            fullWidth
            onClick={() => handleAnswer(currentQuestion.id, option)}
            style={{
              borderColor: answers[currentQuestion.id] === option.id ? "#49a4ff" : "#979ea5",
              borderWidth: "2px",
              color: answers[currentQuestion.id] === option.id ? "#49a4ff" : "#979ea5",
            }}
          >
            {option.text}
          </Button>
        ))}
      </Stack>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} width={"100%"}>
        <Button variant="contained" onClick={handlePrevious} fullWidth disabled={currentIndex === 0} style={{ marginRight: "10px", backgroundColor: "lightblue", color: "#49a4ff" }} startIcon={<IconArrowLeft fontSize={20} />}>
          Quay lại
        </Button>
        {currentIndex !== data.questions.length - 1 ? (
          <Button variant="contained" fullWidth onClick={handleNext} disabled={currentIndex === data.questions.length - 1} style={{ marginLeft: "10px", height: "100%" }} endIcon={<IconArrowRight fontSize={20} />}>
            Tiếp theo
          </Button>
        ) : (
          <Button variant="contained" fullWidth style={{ marginLeft: "10px" }} onClick={goToResultPage}>
            Kết quả
          </Button>
        )}
      </Box>
    </ContainerBox>
  );
};

export default Questions;
