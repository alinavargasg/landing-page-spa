export interface ContactFormData {
  nombre: string;
  email: string;
  mensaje?: string;
}

export type ContactFormErrors = {
  [key in keyof ContactFormData]?: string;
};

export const MAX_MESSAGE_LENGTH = 500;
export const MIN_NAME_LENGTH = 3;