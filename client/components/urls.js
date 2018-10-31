import React, {Component} from 'react';
import MicrolinkCard from 'react-microlink';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class Urls extends Component {
  render() {
    return (
      <div>
        <MicrolinkCard
          url='https://www.theverge.com/tldr/2018/2/7/16984284/tesla-space-falcon-heavy-launch-elon-musk'
          // size='large'
          target='_blank'
        />
        <Typography variant="body1">
        <a href="#">/abd123</a></Typography> <Button>Copy</Button><Button>Edit</Button><Button>Delete</Button>
        <Typography variant='caption'>Created OCT 29, 3:05 PM</Typography>
        <MicrolinkCard 
          url='https://medium.freecodecamp.org/learning-python-from-zero-to-hero-120ea540b567?fbclid=IwAR1GY8Y7RcG0uK_wuPuFhmqV6xV82wupRqh5GQ5NPKd8GDsTkD3KrDuex9E'
          target='_blank'
        />
        <Typography variant="body1">
        <a href="#">/abd123</a></Typography> <Button>Copy</Button><Button>Edit</Button><Button>Delete</Button>
        <Typography variant='caption'>Created OCT 29, 3:05 PM</Typography>
        <MicrolinkCard
          url='https://docs.mongodb.com/manual/mongo/'
          target='_blank'
        />
        <Typography variant="body1">
        <a href="#">/abd123</a></Typography> <Button>Copy</Button><Button>Edit</Button><Button>Delete</Button>
        <Typography variant='caption'>Created OCT 29, 3:05 PM</Typography>
        <MicrolinkCard
          url='https://blog.cloudboost.io/creating-your-first-mern-stack-application-b6604d12e4d3'
          target='_blank'
        />
        <Typography variant="body1">
        <a href="#">/abd123</a></Typography> <Button>Copy</Button><Button>Edit</Button><Button>Delete</Button>
        <Typography variant='caption'>Created OCT 29, 3:05 PM</Typography>
      </div>
    )
  }
}

export default Urls;