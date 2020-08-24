import { AllHtmlEntities } from 'html-entities';

const entities = new AllHtmlEntities();

export const decodeHtml = (html: string): string => {
  return entities.decode(html);
};
