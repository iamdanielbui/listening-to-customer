import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import GaugeComponent from "react-gauge-component";
import { useLocation, useNavigate } from "react-router-dom";
import IconShare from "../../assets/IconShare";
import ContainerBox from "../../components/ContainerBox";
import ResultsData from "../../data/assessment.json";
import { Helmet } from "react-helmet-async";

type Result = {
  level: number;
  icon: string;
  range: number[];
  name: string;
  description: {
    text: string;
    image_url: string;
  };
  key_actions: {
    text: string;
    image_url: string;
  }[];
  key_actions_cta: {
    text: string;
    url: string;
  };
};

const Results = () => {
  const data: Result[] = ResultsData.results as Result[];
  const location = useLocation();
  const navigate = useNavigate();

  const score: number = location.state?.score ?? 0;

  const goToSharePage = () => {
    navigate("/share");
  };

  const getUserResult = (): Result | null => {
    for (const result of data) {
      const [min, max] = result.range;
      if (score >= min && score < max) {
        return result;
      }
    }

    if (score === 10) {
      const maxLevel = data.find((result) => result.range[1] === 10);
      return maxLevel ?? null;
    }

    return null;
  };

  const getUserRank = (value: number) => {
    const rank = data.find((result) => result.level === value / 2)?.name;
    return rank ?? "Bắt đầu";
  };

  const userLevel = getUserResult();

  return (
    <ContainerBox>
      <Helmet>
        <meta property="og:title" content="Kết quả lắng nghe khách hàng của doanh nghiệp" />
        <meta property="og:description" content="Lắng nghe" />
        <meta property="og:image" content="../../assets/thumbnails/tn-lever5.jpg" />
        <meta property="og:url" content="https://listening-to-customer.vercel.app/result" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Box display={"flex"} width={"100%"} gap={1}>
        <Stack display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Avatar
            alt="Remy Sharp"
            src={userLevel?.icon}
            sx={{
              backgroundColor: "lightblue",
              padding: 1,
            }}
          />
        </Stack>

        <Stack>
          <Typography fontSize={14}>VOICE OF THE CUSTOMER - Cấp độ {userLevel?.level}</Typography>
          <Typography variant="h6"> {userLevel?.name}</Typography>
        </Stack>
      </Box>
      <Typography>{userLevel?.description.text}</Typography>
      <Box width={"100%"} maxWidth={700}>
        <GaugeComponent
          value={score}
          // type="radial"
          labels={{
            valueLabel: {
              style: {
                fontSize: 24,
              },
            },
            tickLabels: {
              type: "outer",
              ticks: [{ value: 2 }, { value: 4 }, { value: 6 }, { value: 8 }, { value: 10 }],
              defaultTickValueConfig: {
                style: {
                  fontSize: 12,
                },
                formatTextValue: getUserRank,
              },
            },
          }}
          arc={{
            nbSubArcs: 5,
            colorArray: ["#ffbb10"],
            subArcs: [{ limit: 2 }],
            padding: 0,
            width: 0.2,
          }}
          pointer={{
            elastic: true,
            animationDelay: 0,
          }}
          maxValue={10}
        />
        <Box width={"100%"} marginTop={"-12%"} marginBottom={"2%"} textAlign={"center"}>
          <Typography fontWeight={500}>Score</Typography>
        </Box>
      </Box>
      <Box
        position={"fixed"}
        right={-40}
        bottom={"50%"}
        bgcolor={"#2592f2"}
        sx={{
          transform: "rotate(-90deg)",
        }}
      >
        <Button
          onClick={goToSharePage}
          startIcon={<IconShare size={16} />}
          sx={{
            padding: "8px 20px 8px 20px",
            color: "#dadee3",
          }}
        >
          Chia sẻ
        </Button>
      </Box>
    </ContainerBox>
  );
};

export default Results;
