import logisticsService from '~/assets/images/services/logistics.jpg';
import cargoService from '~/assets/images/services/cargo.jpg';
import moneyLendingService from '~/assets/images/services/money_lending.jpg';
import storageService from '~/assets/images/services/storage.jpg';
import truckingService from '~/assets/images/services/trucking.jpg';
import warehousingService from '~/assets/images/services/warehousing.jpg';

import user1 from '~/assets/images/testimonials/1.jpg';
import user2 from '~/assets/images/testimonials/2.jpg';
import user3 from '~/assets/images/testimonials/3.jpg';

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
    name: 'money-lending',
    subtitle:
      'Do we offer personal loans, business loans, or both? What are the terms of the loans.',
    description:
      "What to keep in mind; The types of loans offered. What types of loans does the money lending service offer? What are the terms of the loans, such as the interest rate, repayment period, and fees? What are the borrower's qualifications for getting a loan from the money lending service? Do they have good credit? What is their income and debt-to-income ratio? This we can enlighten you with;",
    image: moneyLendingService,
    offers: [
      'What are the hidden fees?',
      'Is there a prepayment penalty?',
      'What are the terms of the repayment schedule?',
      'Is there a grace period?',
      'What are the options for borrowers who are unable to make a payment?',
      "What is the company's policy on late payments and on collections",
    ],
    otherInfo: [
      'It is important to do know and compare different money lending services before you choose one. We will help you find the best loan for your needs and budget.',
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
    name: 'trucking',
    subtitle:
      'Trucking is the backbone of the global economy, transporting goods and commodities over long distances.',
    description:
      'The trucking industry is a major employer, providing jobs for millions of people around the world. There are many different types of trucking services, including:',
    image: truckingService,
    offers: [
      'Full truckload (TL)',
      'Less-than-truckload (LTL)',
      'Dedicated',
      'Inter-modal',
    ],
    otherInfo: [
      'Full truckload (TL): This is the most common type of trucking service and involves the transportation of a single load that fills an entire truck trailer.',
      'Less-than-truckload (LTL): This type of service involves the transportation of smaller loads that are consolidated with other loads on the same truck.',
      'Dedicated: This type of service is customized to the specific needs of the customer and may involve the use of specialized equipment or drivers.',
      'Inter-modal: This type of service involves the transportation of goods using multiple modes of transportation, such as truck, rail, and ocean shipping.',
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

export const testimonialsInfo: Testimonial[] = [
  {
    name: 'Josh Tyson',
    title: 'Product Manager | Case Hospital',
    message:
      'I was really impressed with the level of customer service I received from Mugafrey Investment. They were very responsive to my questions and helped me find the perfect loan for my business.',
    image: user1,
  },
  {
    name: 'Walimbwa Williams',
    title: 'Entrepreneur | Happy customer',
    message:
      'I was in a tight spot and needed to get my product to market quickly. Mugafrey Investment helped me find a logistics company that could get my product there on time and within my budget.',
    image: user2,
  },
  {
    name: 'Kato Johnson',
    title: 'Senior Director of Operations | UWEC',
    message:
      "I was looking for a loan to expand my business, but I didn't have the best credit. Mugafrey Investment worked with me to find a lender who was willing to give me a loan, even with my credit history.",
    image: user3,
  },
];
