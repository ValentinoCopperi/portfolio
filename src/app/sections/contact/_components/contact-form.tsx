"use client"

import { useActionState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { mailFormSchema, MailFormState } from "@/lib/contact"
import { sendMail } from "@/actions/mail"
import { useEffect } from "react"

export function ContactForm() {
  const [state, formAction, isPending] = useActionState<MailFormState, FormData>(sendMail, null);

  const form = useForm<z.infer<typeof mailFormSchema>>({
    resolver: zodResolver(mailFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  useEffect(() => {
    if (state?.message) {
      form.reset();
    }
  }, [state, form]);

  return (
    <Form {...form}>
      <form action={formAction} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              {
                state?.errors?.name && (
                  <p className="text-red-600">{state.errors.name}</p>
                )
              }
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Your email" {...field} />
              </FormControl>
              {
                state?.errors?.email && (
                  <p className="text-red-600">{state.errors.email}</p>
                )
              }
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Your message" {...field} />
              </FormControl>
              {
                state?.errors?.message && (
                  <p className="text-red-600">{state.errors.message}</p>
                )
              }
            </FormItem>
          )}
        />
        <div className="flex items-center gap-3">
          <Button type="submit" disabled={isPending}>
            {isPending ? "Sending..." : "Send Message"}
          </Button>
          <div>

            {
              state?.error && (
                <p className="text-red-600">{state.error}</p>
              )
            }
            {
              state?.message && (
                <p className="text-green-600">{state.message}</p>
              )
            }
          </div>

        </div>
      </form>
    </Form>
  )
}

