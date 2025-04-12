import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export const sendContactForm = async (values) => {
  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      {
        name: values.name,
        email: values.email,
        message: values.message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );

    console.log("Email sent successfully!", response);
    toast.success("Your message has been sent!", {
      description: "I'll get back to you as soon as possible!",
      closeButton: true,
    });
  } catch (error) {
    console.error("Failed to send email:", error);
    toast.error("Oops! Something went wrong.", {
      description: "Unknown error!",
      closeButton: true,
    });
  }
};
