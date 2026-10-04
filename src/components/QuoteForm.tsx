import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle2, AlertCircle, Upload, Loader2 } from 'lucide-react';
import { pricingData } from '../data/pricing';

type QuoteFormData = {
  fullName: string;
  businessName: string;
  phone: string;
  email: string;
  bottleSize: string;
  quantity: number;
  eventType: string;
  deliveryDate: string;
  deliveryLocation: string;
  brandingRequirement: string;
  message: string;
};

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [logoFile, setLogoFile] = useState<File | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<QuoteFormData>();

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form Data:', data);
    console.log('Logo File:', logoFile);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setLogoFile(null);
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="quote" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Request a Quote</h2>
            <p className="text-gray-600">Fill out the details below and our team will get back to you within 24 hours.</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            {isSuccess ? (
              <div className="text-center py-12">
                <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-brand-navy mb-2">Quote Request Sent!</h3>
                <p className="text-gray-600 mb-8">Thank you for your interest. Our team will review your requirements and send a customized quote shortly.</p>
                <button onClick={() => setIsSuccess(false)} className="btn-primary">
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Personal/Business Info */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input 
                      {...register("fullName", { required: "Full name is required" })}
                      className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-accent/50 ${errors.fullName ? 'border-red-500' : 'border-gray-200 focus:border-brand-accent'}`}
                      placeholder="John Doe"
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="h-3 w-3" />{errors.fullName.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Business / Organization</label>
                    <input 
                      {...register("businessName")}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent"
                      placeholder="Company Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input 
                      {...register("phone", { 
                        required: "Phone number is required",
                        pattern: { value: /^[0-9+\-\s()]*$/, message: "Invalid phone format" }
                      })}
                      className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-accent/50 ${errors.phone ? 'border-red-500' : 'border-gray-200 focus:border-brand-accent'}`}
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="h-3 w-3" />{errors.phone.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input 
                      type="email"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" }
                      })}
                      className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-accent/50 ${errors.email ? 'border-red-500' : 'border-gray-200 focus:border-brand-accent'}`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="h-3 w-3" />{errors.email.message}</p>}
                  </div>
                </div>

                <hr className="border-gray-100 my-6" />

                {/* Order Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Bottle Size *</label>
                    <select 
                      {...register("bottleSize", { required: "Please select a size" })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent bg-white"
                    >
                      <option value="">Select Size</option>
                      {pricingData.products.map(p => (
                        <option key={p.id} value={p.id}>{p.name}</option>
                      ))}
                    </select>
                    {errors.bottleSize && <p className="text-red-500 text-xs mt-1">{errors.bottleSize.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Quantity *</label>
                    <input 
                      type="number"
                      {...register("quantity", { 
                        required: "Quantity is required",
                        min: { value: 100, message: "Minimum order is 100 bottles" }
                      })}
                      className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-accent/50 ${errors.quantity ? 'border-red-500' : 'border-gray-200 focus:border-brand-accent'}`}
                      placeholder="e.g. 500"
                    />
                    {errors.quantity && <p className="text-red-500 text-xs mt-1">{errors.quantity.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Event / Business Type</label>
                    <select 
                      {...register("eventType")}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent bg-white"
                    >
                      <option value="">Select Type</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="wedding">Wedding / Celebration</option>
                      <option value="education">College / University</option>
                      <option value="hospitality">Restaurant / Hotel</option>
                      <option value="exhibition">Exhibition / Trade Show</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Required Delivery Date</label>
                    <input 
                      type="date"
                      {...register("deliveryDate")}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Branding Requirement</label>
                    <select 
                      {...register("brandingRequirement")}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent bg-white"
                    >
                      {pricingData.brandingOptions.map(b => (
                        <option key={b.id} value={b.id}>{b.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Delivery Location</label>
                    <input 
                      {...register("deliveryLocation")}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent"
                      placeholder="City, State"
                    />
                  </div>
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Upload Logo or Artwork (Optional)</label>
                  <div className="flex items-center gap-4">
                    <label className="flex-1 flex flex-col items-center justify-center px-4 py-6 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                      <Upload className="h-6 w-6 text-gray-400 mb-2" />
                      <span className="text-sm text-gray-600">{logoFile ? logoFile.name : 'Click to select a file'}</span>
                      <input 
                        type="file" 
                        className="hidden" 
                        accept="image/*,.pdf,.ai,.eps"
                        onChange={(e) => setLogoFile(e.target.files?.[0] || null)}
                      />
                    </label>
                    {logoFile && (
                      <button 
                        type="button" 
                        onClick={() => setLogoFile(null)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Accepted formats: PNG, JPG, PDF, AI. Max size: 10MB.</p>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Message or Requirements</label>
                  <textarea 
                    {...register("message")}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent resize-none"
                    placeholder="Tell us about any specific requirements..."
                  ></textarea>
                </div>

                {/* Submit */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-brand-navy text-white font-bold py-4 rounded-xl hover:bg-brand-blue transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <><Loader2 className="h-5 w-5 animate-spin" /> Submitting...</>
                  ) : (
                    'Request My Quote'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
