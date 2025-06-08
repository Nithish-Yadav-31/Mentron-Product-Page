"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageBreadcrumb from "@/components/page-breadcrumb";

const formSchema = z.object({
  institutionName: z.string().min(2, "Institution name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  jobTitle: z.string().optional(),
  institutionType: z.string().optional(),
  numberOfStudents: z.string().optional(),
  currentLMS: z.string().optional(),
  primaryInterest: z.string().optional(),
  timeline: z.string().optional(),
  additionalInfo: z.string().optional(),
});

export default function InstitutionalDemoPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      institutionName: "",
      contactName: "",
      email: "",
      phone: "",
      jobTitle: "",
      institutionType: "",
      numberOfStudents: "",
      currentLMS: "",
      primaryInterest: "",
      timeline: "",
      additionalInfo: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Import Supabase client
      const { supabase } = await import('@/lib/supabase');
      
      // Submit directly to Supabase
      const { data, error } = await supabase
        .from('institutional_demo_forms')
        .insert([
          {
            institution_name: values.institutionName,
            contact_name: values.contactName,
            email: values.email,
            phone: values.phone || null,
            job_title: values.jobTitle || null,
            institution_type: values.institutionType || null,
            number_of_students: values.numberOfStudents || null,
            current_lms: values.currentLMS || null,
            primary_interest: values.primaryInterest || null,
            timeline: values.timeline || null,
            additional_info: values.additionalInfo || null,
            created_at: new Date().toISOString()
          }
        ])
        .select();

      if (error) {
        console.error('Supabase error:', error);
        alert('Failed to submit form. Please try again.');
        return;
      }

      alert("Form submitted successfully! We'll contact you soon.");
      router.push("/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  }

  return (
    <>
      <Navbar />
      <PageBreadcrumb currentPage="Institutional Demo" />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Request Institutional Demo</h1>
        <div className="max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-sm border">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="institutionName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Institution Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your institution name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="contactName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="jobTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your job title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="institutionType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Institution Type</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., University, College, K-12 School" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="numberOfStudents"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Students</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter approximate number of students" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="currentLMS"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current LMS (if any)</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your current LMS" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="primaryInterest"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Primary Interest</FormLabel>
                    <FormControl>
                      <Input placeholder="What are you most interested in? (e.g., AI tutoring, analytics)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="timeline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Implementation Timeline</FormLabel>
                    <FormControl>
                      <Input placeholder="When are you looking to implement? (e.g., Next semester, This year)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="additionalInfo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Information</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Please describe your institution's specific needs, challenges, or any other relevant information"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">Submit Request</Button>
            </form>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
}
