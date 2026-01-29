import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

interface EmployerDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName?: string;
}

export default function EmployerDemoModal({ isOpen, onClose, planName = "Employer Plan" }: EmployerDemoModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    employees: "",
    phone: "",
    message: "1. Employee Safety Monitoring\n2. Health & Wellness Tracking\n3. Emergency Response Coordination"
  });

  // tRPC mutation for demo request
  const demoMutation = trpc.demo.request.useMutation({
    onSuccess: () => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form after success
      setFormData({
        name: "",
        email: "",
        company: "",
        employees: "",
        phone: "",
        message: "1. Employee Safety Monitoring\n2. Health & Wellness Tracking\n3. Emergency Response Coordination"
      });
    },
    onError: (error) => {
      setIsSubmitting(false);
      toast.error(error.message || "Failed to submit demo request. Please try again.");
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Submit to backend via tRPC
    demoMutation.mutate({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || undefined,
      company: formData.company,
      companySize: formData.employees,
      useCase: "employer",
      message: formData.message || undefined,
    });
  };

  const handleClose = () => {
    onClose();
    // Reset success state after modal closes (with a slight delay for smooth transition)
    setTimeout(() => {
      setIsSuccess(false);
    }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-white border-primary/20 p-0 gap-0">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-16 px-8 text-center space-y-6 bg-white m-1 rounded-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <DialogTitle className="text-2xl font-bold text-[#1a1a1a]">Request Received!</DialogTitle>
            <DialogDescription className="text-base text-gray-600 max-w-xs mx-auto">
              Thank you for your interest in MySentry for {formData.company || "your company"}. Our team will contact you shortly to schedule your personalized demo.
            </DialogDescription>
            <Button onClick={handleClose} className="mt-6 bg-primary text-white hover:bg-primary/90 w-full sm:w-auto px-8">
              Close
            </Button>
          </div>
        ) : (
          <>
            <div className="bg-primary p-8 text-center border-b border-primary/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 uppercase tracking-tight leading-tight">
                24/7 monitored safety and health for your workforce.
              </h2>
              <p className="text-white/90 text-lg font-medium max-w-xl mx-auto">
                Detect near-falls, falls, crashes, and abnormal Health Vitals, then escalate fast with live location and incident data.
              </p>
            </div>
            
            <div className="p-8 bg-white">
              <DialogHeader className="mb-6">
                <DialogTitle className="text-xl font-bold text-[#1a1a1a]">Schedule Your Personalized Demo</DialogTitle>
                <DialogDescription className="text-gray-600">
                  Fill out the form below to see {planName} in action.
                </DialogDescription>
              </DialogHeader>
            
              <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#1a1a1a] font-bold">Full Name *</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="John Doe" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white border-input text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#1a1a1a] font-bold">Phone Number</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    placeholder="(555) 123-4567" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-white border-input text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#1a1a1a] font-bold">Work Email *</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="john@company.com" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white border-input text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-[#1a1a1a] font-bold">Company Name *</Label>
                  <Input 
                    id="company" 
                    name="company" 
                    placeholder="Acme Inc." 
                    required 
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-white border-input text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="employees" className="text-[#1a1a1a] font-bold">Employee Count *</Label>
                  <Input 
                    id="employees" 
                    name="employees" 
                    type="number" 
                    placeholder="50" 
                    required 
                    value={formData.employees}
                    onChange={handleChange}
                    className="bg-white border-input text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#1a1a1a] font-bold">Specific Requirements (Optional)</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Tell us a bit about your Workforce Safety challenges." 
                  className="min-h-[100px] bg-white border-input text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              
              <DialogFooter className="pt-6 flex flex-col sm:flex-row gap-3">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={handleClose}
                  className="w-full sm:w-auto h-12 text-base border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="bg-primary text-white hover:bg-primary/90 w-full sm:w-auto h-12 text-base font-bold shadow-md hover:shadow-lg transition-all uppercase tracking-wider"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "REQUEST DEMO"
                  )}
                </Button>
              </DialogFooter>
            </form>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
