"use server"

import { EmailTemplate } from "@/components/email-template";
import { mailFormSchema, MailFormState } from "@/lib/contact"
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


export const sendMail = async (state: MailFormState, formData: FormData): Promise<MailFormState> => {


    try {
        const validatedFields = mailFormSchema.safeParse({
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        })

        if (!validatedFields.success) {
            return {
                errors: validatedFields.error.flatten().fieldErrors,
            }
        }

        const { name, email, message } = validatedFields.data;

        const { error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ["valencope100@gmail.com"], // Tu email donde recibirás los mensajes
            subject: `Nuevo mensaje de ${name} (${email})`, // Se incluye el email en el asunto
            react: EmailTemplate({ firstName: name, email: email, message: message }), // Se pasa el email
        });

        if(error){
            return { error: "Error sending message" }
        }

        return { message: `Mail sent successfully, thanks for reaching out, ${name}!` };

    } catch (error) {
        if (error) {
            return { error: "Error sending message" }
        }
        return { error: "Error sending message" }
    }


}