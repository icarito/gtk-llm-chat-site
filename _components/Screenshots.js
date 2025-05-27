import Carousel from './Carousel';
import GtkWindow from "./GtkWindow";

function Screenshots() {
    const items = [
        { image: 'https://placehold.co/600x400', title: 'Screenshot 2' },
        { image: 'https://placehold.co/600x400', title: 'Screenshot 3' },
        { image: 'https://placehold.co/600x400', title: 'Screenshot 4' },
    ];

  return (
    <Carousel items={items} />
  );
}

export default Screenshots;