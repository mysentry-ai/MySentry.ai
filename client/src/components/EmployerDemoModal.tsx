import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Loader2 } from "lucide-react";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call to sales@mysentry.ai
    console.log("Sending email to sales@mysentry.ai", formData);
    
    setTimeout(() => {
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
    }, 1500);
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
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
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
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-[#1a1a1a]">Book a Demo</DialogTitle>
              <DialogDescription>
                Fill out the form below to schedule a personalized demo of {planName} for your workforce.
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="John Doe" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    placeholder="(555) 123-4567" 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Work Email *</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="john@company.com" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name *</Label>
                  <Input 
                    id="company" 
                    name="company" 
                    placeholder="Acme Inc." 
                    required 
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="employees">Employee Count *</Label>
                  <Input 
                    id="employees" 
                    name="employees" 
                    type="number" 
                    placeholder="50" 
                    required 
                    value={formData.employees}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Specific Requirements (Optional)</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Tell us a bit about your Workforce Safety challenges." 
                  className="min-h-[100px]"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              
              <DialogFooter className="pt-4 flex flex-col sm:flex-row gap-2">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={handleClose}
                  className="w-full sm:w-auto mt-2 sm:mt-0 border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="bg-primary text-white hover:bg-primary/90 w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Request Demo"
                  )}
                </Button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
