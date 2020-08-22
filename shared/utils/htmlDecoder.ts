import { XmlEntities } from 'html-entities';

const entities = new XmlEntities();

export const decodeHtml = (html: string): string => {
  return entities.decode(html);
};
