// Electronics domain content: edit text, builds and team here.
export const ELEC = {
  label: '// ELECTRONICS DOMAIN',
  title: 'ELECTRONICS',
  intro: 'We tinker with circuits, sensors and microcontrollers. From blinking LEDs to robots and IoT gadgets, we turn ideas into working hardware.',
  services: [
    { icon: 'chip', title: 'ARDUINO & MICROCONTROLLERS', text: 'Program boards and bring your circuits to life.' },
    { icon: 'signal', title: 'SENSORS & IoT', text: 'Connect sensors and gadgets to the internet.' },
    { icon: 'bot', title: 'ROBOTICS & CIRCUITS', text: 'Build robots and custom circuits from scratch.' }
  ],
  // art: board | robot | matrix (built-in pixel pictures in BuildArt.jsx)
  work: [
    { art: 'board', label: 'Smart Weather Station', href: '#' },
    { art: 'robot', label: 'Line Follower Robot', href: '#' },
    { art: 'matrix', label: 'LED Matrix Display', href: '#' }
  ],
  team: [
    { name: 'Member 01', role: 'Lead', photo: '' },
    { name: 'Member 02', role: 'Embedded', photo: '' },
    { name: 'Member 03', role: 'IoT', photo: '' },
    { name: 'Member 04', role: 'Robotics', photo: '' }
  ]
};
