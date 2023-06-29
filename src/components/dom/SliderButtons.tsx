import { useSwiper } from 'swiper/react';

import Arrow from '../../../public/arrow.svg';

export default function SliderButtons() {
  const slider = useSwiper();

  return (
    <div className="mt-2 flex justify-center gap-x-4">
      <button className="rounded-full bg-deepPurple p-2 sm:p-4" onClick={() => slider.slidePrev()}>
        <Arrow className="h-8 w-8 rotate-180 fill-white" />
      </button>
      <button className="rounded-full bg-deepPurple p-2 sm:p-4" onClick={() => slider.slideNext()}>
        <Arrow className="h-8 w-8 fill-white" />
      </button>
    </div>
  );
}
