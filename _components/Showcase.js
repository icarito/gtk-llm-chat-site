import Carousel3 from './Carousel3d';

const mac = { image: './images/pretty.png', title: 'Macos', desktop: './images/macos.jpg' }
const linux = { image: './images/hello.png', title: 'Linux', desktop: './images/linux.jpg' }
const win = { image: './images/exciting.png', title: 'Windows', desktop: './images/win11.jpg' }

let items;

if (navigator.userAgent.includes('Mac')) {
  items = [linux, mac, win];
}
else if (navigator.userAgent.includes('Windows')) {
  items = [mac, win, linux];
} else {
  items = [mac, linux, win];
}

function Showcase() {

  return (
    <Carousel3 items={items} />
  );
}

export default Showcase;