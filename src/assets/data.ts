import logisticsService from '~/assets/images/services/logistics.jpg';
import cargoService from '~/assets/images/services/cargo.jpg';
import packagingService from '~/assets/images/services/packaging.jpg';
import storageService from '~/assets/images/services/storage.jpg';
import truckingService from '~/assets/images/services/trucking.jpg';
import warehousingService from '~/assets/images/services/warehousing.jpg';

import user1 from '~/assets/images/users/1.jpeg';
import user2 from '~/assets/images/users/2.jpeg';
import user3 from '~/assets/images/users/3.jpeg';

export interface Service {
  name: string;
  subtitle: string;
  description: string;
  image: ImageMetadata;
  offers: string[];
  otherInfo: string[];
}

export interface Testimonial {
  name: string;
  title: string;
  message: string;
  image: ImageMetadata;
}

export const servicesInfo: Service[] = [
  {
    name: 'logistics',
    subtitle:
      'Temporibus et in vero dicta aut eius lidero plastis trand lined voluptas dolorem ut voluptas',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias deleniti aperiam qui, magni iste sapiente culpa totam quia corrupti modi incidunt voluptate, non temporibus impedit repudiandae repellendus, sequi repellat quisquam. Harum, quam? Rem libero labore asperiores? Mollitia consectetur delectus ad consequuntur, iusto labore. Officiis dolores eligendi in cupiditate architecto sit.',
    image: logisticsService,
    offers: [
      'Aut eum totam accusantium voluptatem.',
      'Assumenda et porro nisi nihil nesciunt voluptatibus.',
    ],
    otherInfo: [
      'Est reprehenderit voluptatem necessitatibus asperiores neque sed ea illo. Deleniti quam sequi optio iste veniam repellat odit. Aut pariatur itaque nesciunt fuga.',
      'Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam aut consequuntur recusandae mollitia doloremque est architecto cupiditate ullam. Quia est ut occaecati fuga. Distinctio ex repellendus eveniet velit sint quia sapiente cumque. Et ipsa perferendis ut nihil. Laboriosam vel voluptates tenetur nostrum. Eaque iusto cupiditate et totam et quia dolorum in. Sunt molestiae ipsum at consequatur vero. Architecto ut pariatur autem ad non cumque nesciunt qui maxime. Sunt eum quia impedit dolore alias explicabo ea.',
    ],
  },
  {
    name: 'storage',
    subtitle:
      'Temporibus et in vero dicta aut eius lidero plastis trand lined voluptas dolorem ut voluptas',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias deleniti aperiam qui, magni iste sapiente culpa totam quia corrupti modi incidunt voluptate, non temporibus impedit repudiandae repellendus, sequi repellat quisquam. Harum, quam? Rem libero labore asperiores? Mollitia consectetur delectus ad consequuntur, iusto labore. Officiis dolores eligendi in cupiditate architecto sit.',
    image: storageService,
    offers: [
      'Aut eum totam accusantium voluptatem.',
      'Assumenda et porro nisi nihil nesciunt voluptatibus.',
    ],
    otherInfo: [
      'Est reprehenderit voluptatem necessitatibus asperiores neque sed ea illo. Deleniti quam sequi optio iste veniam repellat odit. Aut pariatur itaque nesciunt fuga.',
      'Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam aut consequuntur recusandae mollitia doloremque est architecto cupiditate ullam. Quia est ut occaecati fuga. Distinctio ex repellendus eveniet velit sint quia sapiente cumque. Et ipsa perferendis ut nihil. Laboriosam vel voluptates tenetur nostrum. Eaque iusto cupiditate et totam et quia dolorum in. Sunt molestiae ipsum at consequatur vero. Architecto ut pariatur autem ad non cumque nesciunt qui maxime. Sunt eum quia impedit dolore alias explicabo ea.',
    ],
  },
  {
    name: 'cargo',
    subtitle:
      'Temporibus et in vero dicta aut eius lidero plastis trand lined voluptas dolorem ut voluptas',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias deleniti aperiam qui, magni iste sapiente culpa totam quia corrupti modi incidunt voluptate, non temporibus impedit repudiandae repellendus, sequi repellat quisquam. Harum, quam? Rem libero labore asperiores? Mollitia consectetur delectus ad consequuntur, iusto labore. Officiis dolores eligendi in cupiditate architecto sit.',
    image: cargoService,
    offers: [
      'Aut eum totam accusantium voluptatem.',
      'Assumenda et porro nisi nihil nesciunt voluptatibus.',
    ],
    otherInfo: [
      'Est reprehenderit voluptatem necessitatibus asperiores neque sed ea illo. Deleniti quam sequi optio iste veniam repellat odit. Aut pariatur itaque nesciunt fuga.',
      'Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam aut consequuntur recusandae mollitia doloremque est architecto cupiditate ullam. Quia est ut occaecati fuga. Distinctio ex repellendus eveniet velit sint quia sapiente cumque. Et ipsa perferendis ut nihil. Laboriosam vel voluptates tenetur nostrum. Eaque iusto cupiditate et totam et quia dolorum in. Sunt molestiae ipsum at consequatur vero. Architecto ut pariatur autem ad non cumque nesciunt qui maxime. Sunt eum quia impedit dolore alias explicabo ea.',
    ],
  },
  {
    name: 'packaging',
    subtitle:
      'Temporibus et in vero dicta aut eius lidero plastis trand lined voluptas dolorem ut voluptas',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias deleniti aperiam qui, magni iste sapiente culpa totam quia corrupti modi incidunt voluptate, non temporibus impedit repudiandae repellendus, sequi repellat quisquam. Harum, quam? Rem libero labore asperiores? Mollitia consectetur delectus ad consequuntur, iusto labore. Officiis dolores eligendi in cupiditate architecto sit.',
    image: packagingService,
    offers: [
      'Aut eum totam accusantium voluptatem.',
      'Assumenda et porro nisi nihil nesciunt voluptatibus.',
    ],
    otherInfo: [
      'Est reprehenderit voluptatem necessitatibus asperiores neque sed ea illo. Deleniti quam sequi optio iste veniam repellat odit. Aut pariatur itaque nesciunt fuga.',
      'Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam aut consequuntur recusandae mollitia doloremque est architecto cupiditate ullam. Quia est ut occaecati fuga. Distinctio ex repellendus eveniet velit sint quia sapiente cumque. Et ipsa perferendis ut nihil. Laboriosam vel voluptates tenetur nostrum. Eaque iusto cupiditate et totam et quia dolorum in. Sunt molestiae ipsum at consequatur vero. Architecto ut pariatur autem ad non cumque nesciunt qui maxime. Sunt eum quia impedit dolore alias explicabo ea.',
    ],
  },
  {
    name: 'trucking',
    subtitle:
      'Temporibus et in vero dicta aut eius lidero plastis trand lined voluptas dolorem ut voluptas',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias deleniti aperiam qui, magni iste sapiente culpa totam quia corrupti modi incidunt voluptate, non temporibus impedit repudiandae repellendus, sequi repellat quisquam. Harum, quam? Rem libero labore asperiores? Mollitia consectetur delectus ad consequuntur, iusto labore. Officiis dolores eligendi in cupiditate architecto sit.',
    image: truckingService,
    offers: [
      'Aut eum totam accusantium voluptatem.',
      'Assumenda et porro nisi nihil nesciunt voluptatibus.',
    ],
    otherInfo: [
      'Est reprehenderit voluptatem necessitatibus asperiores neque sed ea illo. Deleniti quam sequi optio iste veniam repellat odit. Aut pariatur itaque nesciunt fuga.',
      'Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam aut consequuntur recusandae mollitia doloremque est architecto cupiditate ullam. Quia est ut occaecati fuga. Distinctio ex repellendus eveniet velit sint quia sapiente cumque. Et ipsa perferendis ut nihil. Laboriosam vel voluptates tenetur nostrum. Eaque iusto cupiditate et totam et quia dolorum in. Sunt molestiae ipsum at consequatur vero. Architecto ut pariatur autem ad non cumque nesciunt qui maxime. Sunt eum quia impedit dolore alias explicabo ea.',
    ],
  },
  {
    name: 'warehousing',
    subtitle:
      'Temporibus et in vero dicta aut eius lidero plastis trand lined voluptas dolorem ut voluptas',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias deleniti aperiam qui, magni iste sapiente culpa totam quia corrupti modi incidunt voluptate, non temporibus impedit repudiandae repellendus, sequi repellat quisquam. Harum, quam? Rem libero labore asperiores? Mollitia consectetur delectus ad consequuntur, iusto labore. Officiis dolores eligendi in cupiditate architecto sit.',
    image: warehousingService,
    offers: [
      'Aut eum totam accusantium voluptatem.',
      'Assumenda et porro nisi nihil nesciunt voluptatibus.',
    ],
    otherInfo: [
      'Est reprehenderit voluptatem necessitatibus asperiores neque sed ea illo. Deleniti quam sequi optio iste veniam repellat odit. Aut pariatur itaque nesciunt fuga.',
      'Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam aut consequuntur recusandae mollitia doloremque est architecto cupiditate ullam. Quia est ut occaecati fuga. Distinctio ex repellendus eveniet velit sint quia sapiente cumque. Et ipsa perferendis ut nihil. Laboriosam vel voluptates tenetur nostrum. Eaque iusto cupiditate et totam et quia dolorum in. Sunt molestiae ipsum at consequatur vero. Architecto ut pariatur autem ad non cumque nesciunt qui maxime. Sunt eum quia impedit dolore alias explicabo ea.',
    ],
  },
];

export const tesimonialsInfo: Testimonial[] = [
  {
    name: 'Josh Tyson',
    title: 'Product Manager | Capsule',
    message:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam quidem in natus eos vel iusto quisquam nam aliquam eveniet excepturi. Nulla modi sint veniam doloribus tenetur.',
    image: user1,
  },
  {
    name: 'Luisa',
    title: 'Senior Director of Operations | Fitbit',
    message:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam quidem in natus eos vel iusto quisquam nam aliquam eveniet excepturi. Nulla modi sint veniam doloribus tenetur.',
    image: user2,
  },
  {
    name: 'Alisa Williams',
    title: 'Entrepreneur | Happy customer',
    message:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam quidem in natus eos vel iusto quisquam nam aliquam eveniet excepturi. Nulla modi sint veniam doloribus tenetur.',
    image: user3,
  },
];
