export type Process = {
  id: number;
  heading: string;
  imageUrl: string;
  description: string;
};

export const processes: Process[] = [
  {
    id: 1,
    heading: 'Prepare',
    imageUrl: '/images/chef-cooking.webp',
    description: 'Our cooks are very passionate to cook your order.',
  },
  {
    id: 2,
    heading: 'Waiting',
    imageUrl: '/images/man-and-woman-sitting-sofa.webp',
    description: 'Wait for your order drinking coffee for free.',
  },
  {
    id: 3,
    heading: 'Deliver',
    imageUrl: '/images/man-sitting-drinking-coffee.webp',
    description: 'Once your order is ready just receive and no need to pay.',
  },
];
