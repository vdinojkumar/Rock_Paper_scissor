import React, { useState } from 'react';
import './App.css';
import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import rock from './image/rock.png';
import paper from './image/paper.png';
import select from './image/select.png'
import scissor from './image/scissor.png';

const buttonStyle = {
  width: '50px',
  height: '50px',
  borderRadius: '30%',
  border: 'solid 2px black',
  backgroundColor: '#fff',
  margin: '2px',
  cursor: 'pointer',
};

const imgStyle = {
  width: '55px',
  height: '55px',
  borderRadius: '30%',
  backgroundColor: '#fff',
  margin: '2px',
};

function Player({ name, score, action }) {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        padding: '20px',
        borderRadius: '10px',
        width: '200px',
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography fontWeight={900} fontSize="22px">
        {`${name}: ${score}`}
      </Typography>
      <img src={action} style={imgStyle} alt={name} />
    </Box>
  );
}

function Versus() {
  return (
    <Typography variant="h2" fontFamily="Brush Script MT" fontWeight={900}>
      V/s
    </Typography>
  );
}

function App() {
  const [playerChoice, setPlayerChoice] = useState(select);
  const [computerChoice, setComputerChoice] = useState(select);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [winner ,setWinner]=useState("SELECT AN OPTION")

  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);
    const computerChoices = [rock, paper, scissor];
    const randomIndex = Math.floor(Math.random() * computerChoices.length);
    setComputerChoice(computerChoices[randomIndex]);

    
    if (
      (choice === rock && computerChoices[randomIndex] === scissor) ||
      (choice === paper && computerChoices[randomIndex] === rock) ||
      (choice === scissor && computerChoices[randomIndex] === paper)
    ) {
      setPlayerScore(playerScore + 1);
      setWinner("YOU WON")
    } else if (
      (choice === rock && computerChoices[randomIndex] === paper) ||
      (choice === paper && computerChoices[randomIndex] === scissor) ||
      (choice === scissor && computerChoices[randomIndex] === rock)
    ) {
      setComputerScore(computerScore + 1);
      setWinner("COMPUTER WINS")
    }
    else{
      setWinner("MATCH TIED")
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: 'rgba(211, 186, 252, 0.6)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h2" fontFamily="Brush Script MT" fontWeight={900}>
        ROCK PAPER SCISSOR
      </Typography>
      <Stack direction="row">
        <Stack mr={4} justifyContent="center">
          <Player name="YOU" score={playerScore} action={playerChoice} />
        </Stack>

        <Versus />

        <Stack justifyContent="center" ml={4}>
          <Player name="COMPUTER" score={computerScore} action={computerChoice} />
        </Stack>
      </Stack>
      <Stack direction="row">
        <IconButton onClick={() => handlePlayerChoice(rock)}>
          <img src={rock} alt="Rock" style={buttonStyle} />
        </IconButton>
        <IconButton onClick={() => handlePlayerChoice(paper)}>
          <img src={paper} alt="Paper" style={buttonStyle} />
        </IconButton>
        <IconButton onClick={() => handlePlayerChoice(scissor)}>
          <img src={scissor} alt="Scissor" style={buttonStyle} />
        </IconButton>
      </Stack>
      <Typography variant='h6' style={{ fontFamily: `'Pacifico', cursive` }}> {winner} </Typography>
    </Box>
  );
}

export default App;
