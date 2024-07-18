import * as React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
<<<<<<< HEAD
// import { toast } from "react-toastify";
=======
import { toast } from "react-hot-toast";
>>>>>>> 071011f9e65f8c6381d007b45e9d76300fb7bab8

export default function BlogCard({
  title,
  description,
  image,
  userName,
  time,
  id,
  isUser,
}) {
  const navigate = useNavigate();
  const handleEdit = async () => {
    navigate(`/blog-details/${id}`);
  };
  //delete blog
  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(`/api/v1/blog/delete-blog/${id}`);
      if (data?.success) {
        alert("Blog Deleted Successfully");
        // navigate("/my-blogs");
        window.location.reload();
      } else {
        alert(data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(`/api/v1/blog/delete-blog/${id}`);
      if (data?.success) {
        toast.success("Blog Deleted Successfully");
        // navigate("/my-blogs");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card
      sx={{
        width: "40%",
        margin: "auto",
        mt: 2,
        padding: 2,
        boxShadow: "5px 5px 10px #ccc",
        ":hover:": { boxShadow: "10px 10px 20px #ccc" },
      }}
    >
      {isUser && (
        <Box display="flex">
          <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
            <EditIcon
              sx={{ float: "right", cursor: "pointer" }}
              color="warning"
            />
          </IconButton>
          <IconButton onClick={handleDelete}>
            <DeleteForeverIcon
              onClick={handleDelete}
              sx={{ float: "right", cursor: "pointer", mr: 1 }}
              color="error"
            />
          </IconButton>
        </Box>
      )}

      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe"></Avatar>
        }
        title={userName || "Unknown"}
        subheader={`By ${userName} on ${time} `}
      />
      <CardMedia component="img" height="194" image={image} alt="Blog Banner" />
      <CardContent>
        <Typography variant="body2" color="text.primary">
          Title: {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          &nbsp; Description: {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
