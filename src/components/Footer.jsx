import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
        marginTop: 20,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {t("footer_1")}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are Artkotec company, dedicated to providing the best service
              to our customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {t("footer_2")}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              25-ci məhəllə,Natavan küçəsi,Sumqayıt
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Şeyx Şamil Küç-3, İçərişəhər metrosu, Bakı
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Email: agaliagazadeh@gmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +994 55 979 81 71  
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {t("footer_3")}
            </Typography>
            <Link href="https://www.facebook.com/artintiqam" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/artintiqam?igsh=ZHRqMnZnZGRmajdm"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link
              color="inherit"
              href="https://my-portfolio-2-flax.vercel.app/"
            >
              Senan Memmedov
            </Link>{" "}
            {new Date().getFullYear()}.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
