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
      "We'll help manage the flow of goods and services from the point of origin to the point of consumption.",
    description:
      'When you use a logistics provider, you are essentially giving them control of your goods. This can be a challenge if you are not familiar with the provider or if you have had bad experiences with other providers in the past. It is important to communicate your needs clearly to the logistics provider so that they can provide the best possible service',
    image: logisticsService,
    offers: [
      "We' help negotiate better rates with carriers and other suppliers.",
      "We'll help your business to streamline their supply chain operations.",
    ],
    otherInfo: [
      'It is important to set realistic expectations with the logistics provider so that you are not disappointed with the results.',
      'Overall, logistics services can be a valuable asset for businesses of all sizes. By carefully selecting a provider and managing expectations, businesses can reap the many benefits of using logistics services.',
    ],
  },
  {
    name: 'storage',
    subtitle:
      'How much data do you need to store? How often do you need to access the data? How important is security?',
    description:
      "Once you've considered these factors, you can start brainstorming specific information about the storage service you're looking for. Here are some questions you can ask yourself. Here are some of the most popular storage services:",
    image: storageService,
    offers: ['Object storage', 'Block storage'],
    otherInfo: [
      'Object storage: Object storage is a type of storage that stores data as objects. Objects are typically made up of a key, value, and metadata. This type of storage is often used for storing large amounts of unstructured data. Some popular object storage providers include Amazon S3, Google Cloud Storage, and IBM Cloud Object Storage.',
      'Block storage: Block storage is a type of storage that stores data as blocks. Blocks are typically 512 bytes or 4 kilobytes in size. This type of storage is often used for storing virtual machines and databases. Some popular block storage providers include Amazon EBS, Google Compute Engine Persistent Disk, and Microsoft Azure Managed Disks.',
    ],
  },
  {
    name: 'cargo',
    subtitle:
      'Cargo services are a transportation service that is used to transport large quantities of goods over long distances.',
    description:
      'They are typically used by businesses to transport raw materials, finished goods, and other products. Cargo services can be arranged by air, sea, or land. Cargo services include;',
    image: cargoService,
    offers: ['Door-to-door Cargo service.', 'Port-to-port Cargo service.'],
    otherInfo: [
      "Door-to-door services pick up the goods from the shipper's location and deliver them to the recipient's location.",
      'Port-to-port services only transport the goods between ports. The cost of cargo services will vary depending on the mode of transportation, the distance traveled, and the weight and size of the goods being shipped.',
      'Cargo services help businesses to save time and money by transporting large quantities of goods in bulk.',
      'Cargo services help businesses to reach a wider range of customers by shipping goods to different parts of the world.',
      'Cargo services help businesses to reduce their carbon footprint by transporting goods in a more efficient way.',
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
      'Warehousing is the process of storing physical inventory for sale or distribution.',
    description:
      ' It helps businesses to improve efficiency, reduce costs, and meet customer demands.There are many different types of warehousing services available, each with its own set of benefits and drawbacks. Some of the most common types of warehousing services include:',
    image: warehousingService,
    offers: ['Public warehouses', 'Private warehouses.', 'Contract warehouses'],
    otherInfo: [
      'Public warehouses: These are warehouses that are owned and operated by a third-party company. They offer a variety of services, including storage, picking, packing, and shipping.',
      'Private warehouses: These are warehouses that are owned and operated by the business itself. They offer more control over the storage and handling of goods, but they can also be more expensive.',
      'Contract warehouses: These are warehouses that are leased to businesses for a specific period of time. They offer a flexible option for businesses that need temporary storage space. When choosing a warehousing service, businesses need to consider a number of factors, including the type of goods they need to store, the volume of goods, the desired level of service, and the budget. Here are some of the benefits of using warehousing services:',
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
