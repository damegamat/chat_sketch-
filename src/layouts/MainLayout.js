import { Grid } from '@mui/material'

export const MainLayout = ({ children }) => (
  <Grid container marginTop='51px' overflow='hidden'>
    {children}
  </Grid>
)
