import React from 'react';
import './slides.css';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
const Feedback = () => {
  return (
    <div id='feedback'>
      <Typography className='feedtitle'>See what users are</Typography>
      <Typography className='feedtitle'>saying about us</Typography>
      <div className='feedbacks'>
        <div className='feed'>
          <Typography>
            <StarIcon className='star' />
            <StarIcon className='star' />
            <StarIcon className='star' />
            <StarIcon className='star' />
            <StarIcon className='star' />
          </Typography>
          <Typography>VAISHALI VASSU</Typography>
          <p>
            It's a very unique and interesting concept of co-working space for
            doctors and for patients also visited there for my consult. Very
            well spoken and humble staff Delhi's best doctors are there. Met a
            girl there Ritiksha she is so kind and helping. Must ....
          </p>
        </div>
        <div className='feed'>
          <Typography>
            <StarIcon className='star' />
            <StarIcon className='star' />
            <StarIcon className='star' />
            <StarIcon className='star' />
            <StarIcon className='star' />
          </Typography>
          <Typography>RAVINDER MAINI</Typography>
          <p>
            Awesome ambience, thoroughly professional staff. Very knowledgeable
            doctors. A really wonderful startup by Ankur Sharma. Wish the whole
            Aartas team best of luck
          </p>
        </div>
        <div className='feed'>
          <Typography>
            <StarIcon className='star' />
            <StarIcon className='star' />
            <StarIcon className='star' />
            <StarIcon className='star' />
            <StarIcon className='star' />
          </Typography>
          <Typography>CHANDRESH JAIN</Typography>
          <p>
            An cool, new age, friendly concept of Clinishare. It's like Co
            working space from doctors where they can attend their patients in
            stress free environment at their free will with no corporate
            hospital type pressure to recommend certain...
          </p>
        </div>

        <div className='feed'>
          <Typography>
            <StarIcon className='star' />
            <StarIcon className='star' />
            <StarIcon className='star' />
            <StarIcon className='star' />
            <StarIcon className='star' />
          </Typography>
          <Typography>ROSHAN SINGH</Typography>
          <p>Wonderful team and respectful environment</p>
        </div>
        <div className='feed'>
          <Typography>
            <StarIcon className='star' />
            <StarIcon className='star' />
            <StarIcon className='star' />
            <StarIcon className='star' />
            <StarIcon className='star' />
          </Typography>
          <Typography>VIVEK KUMAR</Typography>
          <p>
            It's a totally different kind of combo clinic place with natural
            ambience and positive vibes <ThumbUpIcon className='thumbIcon' />{' '}
            <ThumbUpIcon className='thumbIcon' />{' '}
            <ThumbUpIcon className='thumbIcon' />{' '}
            <ThumbUpIcon className='thumbIcon' />{' '}
            <ThumbUpIcon className='thumbIcon' />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
