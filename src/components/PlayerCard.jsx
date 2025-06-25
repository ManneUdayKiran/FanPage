import { Card, CardContent, Typography, Box } from '@mui/material';

export default function PlayerCard({ player, onClick }) {
  return (
    <Card
    style={{
    }}
      onClick={onClick}
      sx={{
        marginTop:'20vh',
        cursor: 'pointer',
        maxWidth: 220,
        borderRadius: 3,
        boxShadow: 4,
        overflow: 'hidden',
        textAlign: 'center',
        transition: 'transform 0.2s',
        '&:hover': { transform: 'scale(1.05)' }
      }}
    >
      <Box
        component="img"
        src={player.image}
        alt={player.name}
        sx={{
          width: '100%',
          height: 220,
          objectFit: 'cover'
        }}
      />
      <CardContent sx={{ p: 1.5 }}>
        <Typography variant="subtitle1" fontWeight="bold">
          {player.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
