import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function NewsCard({ article }) {
  const openExternalLink = (url) => {
    window.open(url, "_blank", "noopener noreferrer");
  };
  return (
    <>
      {article && (
        <Card
          sx={{ maxWidth: 345 }}
          onClick={() => openExternalLink(article.url)}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={article.urlToImage}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {article.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {article.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </>
  );
}
