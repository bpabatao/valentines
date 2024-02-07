import { useState } from "react";
import "./App.css";
import {
  Box,
  Button,
  Grid,
  Typography,
} from '@mui/material'
import picture from "./assets/swis.jpg"
import colosseum from "./assets/colo.jpg"

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 15 + 20;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Ayaw",
      "What if, ayaw ko nga? 🥺",
      "Oo nga ayaw ko? 💔",
      "Kuilit mo 🤬",
      "Last chance! 🥺",
      "Talagang ayaw mo? 😭",
      "Pagsisisihan mo to! ",
      "Bigyan kita isa pang pagkakataon!",
      "Sigurado kana talaga? 💔",
      "This could be a mistake!",
      "Change of heart? 💔",
      "Wouldn't you reconsider? 😭",
      "Final na?",
      "Sinasaktan mo ang puso ko 💔",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };
  const fontFamily = '-apple-system'

  return (
    <Grid container spacing={2} mt={0} justifyContent={"center"}>
      {/* <a
        href="https://github.com/dikshikaaa/Valentine-s-day-experiment"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        Visit Source Code on GitHub
      </a> */}
      {yesPressed ? (
        <Box alignItems="center" justifySelf={"center"} textAlign={"center"}>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" style={{ marginBottom: 20 }} />
          <Typography fontSize={"20px"} color="#fe7f6c" mb={1}>OKAY, I LOVE YOU 💕</Typography>
          <Typography fontSize={"14px"} color="#fe7f6c" mb={4}>(SABI NA HINDI MO AKO MATITIIS 😏)</Typography>

          <Typography color={"#f0a1a5"} fontSize={"20px"} fontFamily={fontFamily} mb={2}>
            February 14, 2024, Wednesday
          </Typography>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/FaceTime_iOS.svg/512px-FaceTime_iOS.svg.png" style={{ width: "8%" }} />
          <Typography color={"#f0a1a5"} fontSize={"20px"} fontFamily={fontFamily}>
            Starting at 8pm CET timezone 🇮🇹
          </Typography>
          <Typography color={"#f0a1a5"} fontSize={"20px"} fontFamily={fontFamily} mb={2}>
           See you, Amo! 😘
          </Typography>

          <Box display="flex" alignItems="center" justifyContent={"center"} mt={2}>
            <img
              style={{ width: "80%", marginTop: 20, margin: 'auto' }}
              src={colosseum}
            />
          </Box>
        </Box>

      ) : (
        <>
          <Box display="flex" alignItems="center" justifyContent={"center"} mt={3}>
            <img
              className="h-[200px]"
              style={{ width: "60%" }}
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            />
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center" mb={1} mt={3}>
            <Typography color="#010B0E" fontSize={"25px"}>
              Will you be my Valentine?
            </Typography>

          </Box>
          <Box display="flex" alignItems="center" justifyContent="inherit" m={3}>
            <Button
              variant="contained"
              color="success"
              sx={{ fontSize: yesButtonSize, mr: 2 }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </Button>
            <Button variant="outlined" color="error" onClick={handleNoClick} className="no-button">
              {noCount === 0 ? "No" : getNoButtonText()}
            </Button>
          </Box>
          <Box display="flex" alignItems="center" justifyContent={"center"}>
            <img
              className="h-[200px]"
              style={{ width: "80%", marginTop: 20 }}
              src={picture}
            />
          </Box>
        </>
      )}
    </Grid>
  );
}