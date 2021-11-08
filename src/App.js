import {
  Box,
  AppBar,
  Typography,
  Grid,
} from '@mui/material'
import Logo from './assets/icario-logo.png'
import './assets/styles.css'
import ContactStrategy from './components/ContactStrategy'

const App = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" >
          <Grid container direction='row' alignItems="center" style={{ padding: 16 }}>
            <img src={Logo} style={{ width: 40, height: 40 }} alt="acme cx logo" />
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              ACME CX
            </Typography>
            <Typography>
              Forecasting Better Connections
            </Typography>
          </Grid>
        </AppBar>
      </Box>
      <ContactStrategy />
    </>
  )
}

export default App
