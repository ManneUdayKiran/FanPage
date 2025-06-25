import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Box,
  Divider
} from '@mui/material';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

export default function PlayerModal({ open, onClose, player }) {
  if (!player) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        {player.name}
      </DialogTitle>

      <DialogContent sx={{ textAlign: 'center' }}>
        <Box
          component="img"
          src={player.image}
          alt={player.name}
          sx={{
            width: '100%',
            height: 'auto',
            borderRadius: 2,
            mb: 2
          }}
        />

        <Divider sx={{ my: 1.5 }} />

        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <FormatListNumberedIcon color="primary" />
          <Typography variant="body1">
            <strong>Jersey:</strong> {player.jersey}
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <SportsCricketIcon color="secondary" />
          <Typography variant="body1">
            <strong>Matches:</strong> {player.matches}
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <SportsScoreIcon color="action" />
          <Typography variant="body1">
            <strong>Strike Rate:</strong> {player.strikeRate}
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={1}>
          <MilitaryTechIcon sx={{ color: '#ff9800' }} />
          <Typography style={{paddingRight:'30px',wordWrap:'break-word'}}  variant="body1">
            <strong>Best Performance:</strong> {player.performance}
          </Typography>
        </Box>

        
      </DialogContent>
      
    </Dialog>
  );
}
