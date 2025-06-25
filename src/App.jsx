import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import Header from './components/Header';
import PlayerCard from './components/PlayerCard';
import PlayerModal from './components/PlayerModal';
import { players } from './data/players';

export default function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleCardClick = (player) => {
    setSelectedPlayer(player);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedPlayer(null);
    setModalOpen(false);
  };

  return (
    <>
      <Header />
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={3} justifyContent="center">
          {players.map((player, index) => (
            <Grid item key={index}>
              <PlayerCard player={player} onClick={() => handleCardClick(player)} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <PlayerModal open={isModalOpen} onClose={handleCloseModal} player={selectedPlayer} />
    </>
  );
}
