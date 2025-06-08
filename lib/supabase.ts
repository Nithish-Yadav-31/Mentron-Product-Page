import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Optimized client for static export - disable realtime features
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  realtime: {
    params: {
      log_level: 'fatal',
    },
  },
  global: {
    headers: {
      'x-client-info': 'mentron-static-site',
    },
  },
});

// Types for our database tables
export interface InstitutionalDemoForm {
  id?: string;
  institution_name: string;
  contact_name: string;
  email: string;
  phone?: string;
  job_title?: string;
  institution_type?: string;
  number_of_students?: string;
  current_lms?: string;
  primary_interest?: string;
  timeline?: string;
  additional_info?: string;
  created_at?: string;
}

export interface IndividualInquiryForm {
  id?: string;
  full_name: string;
  email: string;
  phone?: string;
  education_level?: string;
  field_of_study?: string;
  current_status?: string;
  primary_interest?: string;
  experience_level?: string;
  timeline?: string;
  additional_info?: string;
  created_at?: string;
}

// Note: Forms connect directly to Supabase using the client above
// No additional helper functions needed - forms handle their own submissions 