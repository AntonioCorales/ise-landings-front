export type Details = {
  version: string;
  input?: Input | null;
};

export type Data = Input[];

export type Input = {
  complementaryProducts: any[];
  id: string;
  templateID: string;
  name: string;
  price: number;
  discountPercentage: string;
  normalPrice: number;
  slug: string;
  buttonMessage: null;
  whatsAppURL: null;
  eventID: string;
  dateStart: Date;
  dateEnd: Date;
  createdAt: Date;
  updatedAt: Date;
  template: Template;
};

export type Template = {
  id: string;
  name: string;
  image: string;
  url: string;
  description: string;
  students: number;
  quantity: number;
  contentQuantity: number;
  practiceQuantity: number;
  assetsQuantity: number;
  originalID: string;
  temaryText: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  curriculum: Curriculum[];
};

export type Curriculum = {
  name: string;
  position: number;
  time: null | string;
  items?: Curriculum[];
  url?: null;
};
