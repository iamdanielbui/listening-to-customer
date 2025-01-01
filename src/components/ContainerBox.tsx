import { Stack } from "@mui/material";

type TContainerBox = {
  children: React.ReactNode;
};

const ContainerBox = ({ children }: TContainerBox) => {
  return (
    <Stack maxWidth={1024} minWidth={355} bgcolor={"#385171a9"} color={"#dadee3"} borderRadius={2} padding={3} width={"100%"} gap={2} justifyContent={"center"} alignItems={"center"}>
      {children}
    </Stack>
  );
};

export default ContainerBox;
