import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function AlertPage(props) {

  const [show, setShow] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      console.log('This will run after 10 second!')
      setShow(false)
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  if(show){
    return (
      <div>
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity={props.name} onClose={() => setShow(false)}>This is an error alert — check it out!</Alert>
        </Stack>
      </div>
    );
  }
}

export default AlertPage