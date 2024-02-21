import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { NavBar, SideBar } from "../components";

const drawerWidth = 280;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }} spacing={3}>
      <NavBar drawerWidth={drawerWidth} />

      <SideBar drawerWidth={drawerWidth} />

      <Box component="main" sx={{ flexGrow: 1, p: 3, ml: 35 }}>
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
};

export default JournalLayout;
