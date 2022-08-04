import { createTheme, ThemeProvider, colors } from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { LocalizationProvider } from '@mui/lab'
import './App.css'
// import { MuiTable } from './components/MuiTable'
import { MuiCustomTheme } from './components/custom/MuiCustomTheme'

import { MuiTypography } from './components/data/MuiTypography'
import { MuiButton } from './components/inputs/MuiButton'
import { MuiTextField } from './components/data/MuiTextField'
import { MuiSelect } from './components/inputs/MuiSelect'
import { MuiRadioButton } from './components/inputs/MuiRadioButton'
import { MuiCheckbox } from './components/inputs/MuiCheckbox'
import { MuiSwitch } from './components/data/MuiSwitch'
import { MuiRating } from './components/inputs/MuiRating'
import { MuiAutocomplete } from './components/inputs/MuiAutocomplete'
import { MuiLayout } from './components/layout/MuiLayout'
import { MuiCard } from './components/surfaces/MuiCard'
import { MuiAccordion } from './components/surfaces/MuiAccordion'
import { MuiImageList } from './components/layout/MuiImageList'
import { MuiNavbar } from './components/surfaces/MuiNavbar'
import { MuiLink } from './components/navigation/MuiLink'
import { MuiBreadcrumbs } from './components/navigation/MuiBreadcrumbs'
import { MuiDrawer } from './components/navigation/MuiDrawer'
import { MuiTabs } from './components/lab/MuiTabs'
import { MuiSpeedDial } from './components/navigation/MuiSpeedDial'
import { MuiBottomNavigation } from './components/navigation/MuiBottomNavigation'
import { MuiAvatar } from './components/data/MuiAvatar'
import { MuiBadge } from './components/data/MuiBadge'
import { MuiList } from './components/data/MuiList'
import { MuiChip } from './components/data/MuiChip'
import { MuiTooltip } from './components/data/MuiTooltip'
import { MuiAlert } from './components/feedback/MuiAlert'
import { MuiSnackbar } from './components/feedback/MuiSnackbar'
import { MuiDialog } from './components/feedback/MuiDialog'
import { MuiSkeleton } from './components/feedback/MuiSkeleton'
import { MuiProgress } from './components/feedback/MuiProgress'
import { MuiLoadingButton } from './components/lab/MuiLoadingButton'
import { MuiDateTimePicker } from './components/lab/MuiDateTimePicker'
import { MuiDateRangePicker } from './components/lab/MuiDateRangePicker'
import { MuiTimeline } from './components/lab/MuiTimeline'
import { MuiMasonry } from './components/lab/MuiMasonry'

const theme = createTheme({
  status: {
    danger: '#e53e3e'
  },
  palette: {
    secondary: {
      main: colors.orange[500]
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700]
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className='App'>
          {/* <MuiTypography /> */}
          {/* <MuiButton /> */}
          {/* <MuiTextField /> */}
          {/* <MuiSelect /> */}
          {/* <MuiRadioButton /> */}
          {/* <MuiCheckbox /> */}
          {/* <MuiSwitch /> */}
          {/* <MuiRating /> */}
          {/* <MuiAutocomplete /> */}
          {/* <MuiLayout /> */}
          {/* <MuiCard /> */}
          {/* <MuiAccordion /> */}
          {/* <MuiImageList /> */}
          {/* <MuiNavbar /> */}
          {/* <MuiLink /> */}
          {/* <MuiBreadcrumbs /> */}
          {/* <MuiDrawer /> */}
          {/* <MuiTabs /> */}
          {/* <MuiSpeedDial /> */}
          {/* <MuiBottomNavigation /> */}
          {/* <MuiAvatar /> */}
          {/* <MuiBadge /> */}
          {/* <MuiList /> */}
          {/* <MuiChip /> */}
          {/* <MuiTooltip /> */}
          {/* <MuiTable /> */}
          {/* <MuiAlert /> */}
          {/* <MuiSnackbar /> */}
          {/* <MuiDialog /> */}
          {/* <MuiSkeleton /> */}
          {/* <MuiProgress /> */}
          {/* <MuiLoadingButton /> */}
          {/* <MuiDateTimePicker /> */}
          {/* <MuiDateRangePicker /> */}
          {/* <MuiMasonry /> */}
          {/* <MuiTimeline /> */}
          <MuiCustomTheme />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  )
}

export default App
