import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { 
  createContactSubmission, 
  createPartnerApplication, 
  createDemoRequest, 
  createNewsletterSubscription,
  createTrialSignup,
  unsubscribeNewsletter
} from "./db";
import { notifyOwner } from "./_core/notification";
import { blogRouter } from "./routers/blogRouter";
import { aiRouter } from "./routers/aiRouter";

export const appRouter = router({
  // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  blog: blogRouter,
  ai: aiRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Contact form submissions
  contact: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Invalid email address"),
        phone: z.string().optional(),
        subject: z.string().optional(),
        message: z.string().min(1, "Message is required"),
        source: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const result = await createContactSubmission(input);
        
        // Notify owner of new contact submission
        await notifyOwner({
          title: "New Contact Form Submission",
          content: `Name: ${input.name}\nEmail: ${input.email}\nSubject: ${input.subject || 'N/A'}\nMessage: ${input.message.substring(0, 200)}...`,
        });
        
        return { success: true, id: result.id };
      }),
  }),

  // Partner application submissions
  partner: router({
    submit: publicProcedure
      .input(z.object({
        // Step 1: Business Information
        companyName: z.string().min(1, "Company name is required"),
        contactName: z.string().min(1, "Contact name is required"),
        email: z.string().email("Invalid email address"),
        phone: z.string().min(1, "Phone is required"),
        website: z.string().optional(),
        // Step 2: Partnership Details
        partnerType: z.string().min(1, "Partner type is required"),
        industry: z.string().optional(),
        companySize: z.string().optional(),
        currentSolutions: z.string().optional(),
        // Step 3: Additional Information
        targetMarket: z.string().optional(),
        expectedVolume: z.string().optional(),
        additionalInfo: z.string().optional(),
        howHeard: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const result = await createPartnerApplication(input);
        
        // Notify owner of new partner application
        await notifyOwner({
          title: "New Partner Application",
          content: `Company: ${input.companyName}\nContact: ${input.contactName}\nEmail: ${input.email}\nPartner Type: ${input.partnerType}`,
        });
        
        return { success: true, id: result.id };
      }),
  }),

  // Demo request submissions
  demo: router({
    request: publicProcedure
      .input(z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Invalid email address"),
        phone: z.string().optional(),
        company: z.string().optional(),
        jobTitle: z.string().optional(),
        companySize: z.string().optional(),
        industry: z.string().optional(),
        useCase: z.string().optional(),
        message: z.string().optional(),
        preferredDate: z.string().optional(),
        preferredTime: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const result = await createDemoRequest(input);
        
        // Notify owner of new demo request
        await notifyOwner({
          title: "New Demo Request",
          content: `Name: ${input.name}\nEmail: ${input.email}\nCompany: ${input.company || 'N/A'}\nUse Case: ${input.useCase || 'N/A'}`,
        });
        
        return { success: true, id: result.id };
      }),
  }),

  // Newsletter subscriptions
  newsletter: router({
    subscribe: publicProcedure
      .input(z.object({
        email: z.string().email("Invalid email address"),
        name: z.string().optional(),
        source: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const result = await createNewsletterSubscription(input);
        
        if (!result.alreadySubscribed) {
          // Notify owner of new subscription
          await notifyOwner({
            title: "New Newsletter Subscription",
            content: `Email: ${input.email}\nSource: ${input.source || 'N/A'}`,
          });
        }
        
        return { 
          success: true, 
          id: result.id,
          alreadySubscribed: result.alreadySubscribed || false,
          reactivated: result.reactivated || false,
        };
      }),
    
    unsubscribe: publicProcedure
      .input(z.object({
        email: z.string().email("Invalid email address"),
      }))
      .mutation(async ({ input }) => {
        await unsubscribeNewsletter(input.email);
        return { success: true };
      }),
  }),

  // Trial signups
  trial: router({
    signup: publicProcedure
      .input(z.object({
        email: z.string().email("Invalid email address"),
        name: z.string().optional(),
        phone: z.string().optional(),
        planType: z.string().optional(),
        source: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const result = await createTrialSignup(input);
        
        // Notify owner of new trial signup
        await notifyOwner({
          title: "New Trial Signup",
          content: `Email: ${input.email}\nName: ${input.name || 'N/A'}\nPlan: ${input.planType || 'N/A'}\nSource: ${input.source || 'N/A'}`,
        });
        
        return { success: true, id: result.id };
      }),
  }),
});

export type AppRouter = typeof appRouter;
