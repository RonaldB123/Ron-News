import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArticleIcon from '@mui/icons-material/Article';
import CategoryIcon from '@mui/icons-material/Category';
import { Link } from "react-router-dom";
import NewspaperIcon from '@mui/icons-material/Newspaper';

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: {xs:"80%",sm:"50%"}, mr: "auto", ml: "auto" }}>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <NewspaperIcon sx={{mr: 1}}/>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontSize: 25 }}
          >
            <Link to="/">Ron News</Link>
          </Typography>
          <Typography sx={{display: {xs: "none", md: "block"}}}><Link to="/articles">All Articles</Link></Typography>
          <Typography sx={{display: {xs: "none", md: "block"}, ml: 5}}><Link to="/topics">Topics</Link></Typography>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{display: {md:"none", }}}
          >
            <MenuIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}><ArticleIcon sx={{mr: 2}}/><Link to="/articles">All articles</Link></MenuItem>
            <MenuItem onClick={handleClose}><CategoryIcon sx={{mr: 2}}/><Link to="/topics">Topics</Link></MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
