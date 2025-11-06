import { Mail, Phone, Map, Clock, Headphones } from 'lucide-react';

export const contactdata = [
  {
    id: 0,
    legend: "Email",
    title: "abc@gmail.com",
    icon: Mail,
  },
  {
    id: 1,
    legend: "Phone",
    title: "+1234567890",
    icon: Phone,
  },
  {
    id: 2,
    legend: "Direct Support",
    title: "Live Chat / Call Center",
    icon: Headphones, // Best match for support
  },
  {
    id: 3,
    legend: "Address",
    title: "123 Main St, City, Country",
    icon: Map,
  },
  {
    id: 4,
    legend: "Opening Hours",
    title: "Mon - Fri: 9 AM - 5 PM",
    icon: Clock,
  }
];
