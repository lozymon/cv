import { Contact } from "./contact";
import { Experience } from "./experience";

export interface CV {
  name: string;
  roll: string;
  summary: string;
  language: string[];
  skills: string[];
  contact: Contact[];
  experience: Experience[];
  schools: Experience[];
}
