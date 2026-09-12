export interface ConsultationCreate {
  name: string;
  email: string;
  company: string;
  investment: string;
  challenge: string;
}

export interface Consultation extends ConsultationCreate {
  id: string;
  created_at: string;
}

export interface NewsletterSubscription {
  id: string;
  email: string;
  created_at: string;
}

export interface NewsletterCreate {
  email: string;
}