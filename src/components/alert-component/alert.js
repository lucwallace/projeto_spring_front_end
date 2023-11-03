import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function AlertPage(props) {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity={props.name}>This is an error alert — check it out!</Alert>
        </Stack>
      );
}

export default AlertPage