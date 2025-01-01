import { Typography } from "@mui/material";
import data from "../data/assessment.json";
type titleData = {
  title: string;
};
const Header = () => {
  const db = data as titleData;
  const title = db.title;
  return (
    <Typography color="#dadee3" sx={{ textTransform: "uppercase", textAlign: "center" }}>
      {title}
    </Typography>
  );
};

export default Header;
