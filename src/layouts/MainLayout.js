import { Grid } from '@mui/material'

export const MainLayout = ({ children }) => (
  <Grid container margin='51px auto 0' overflow='hidden' maxWidth='600px'>
    {children}
  </Grid>
)
