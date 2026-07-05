"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { apiClient } from "@/lib/api";

const contactSchema = z.object({
  name: z.string().min(2, "Ad en az 2 karakter olmalı"),
  email: z.string().email("Geçerli bir email girin"),
  phone: z.string().min(10, "Geçerli bir telefon numarası girin"),
  company: z.string().optional(),
  subject: z.string().min(5, "Konu en az 5 karakter olmalı"),
  message: z.string().min(10, "Mesaj en az 10 karakter olmalı"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setIsSubmitting(true);
    try {
      await apiClient.contact.submit(data);
      setSubmitStatus("success");
      reset();
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-cyan-400 mb-2">Ad Soyad *</label>
          <Input
            {...register("name")}
            className="mt-0 bg-slate-900/50 border border-cyan-500/30 focus:border-cyan-500 text-white placeholder:text-slate-500"
            placeholder="Ad Soyad"
          />
          {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-cyan-400 mb-2">Email *</label>
          <Input
            {...register("email")}
            type="email"
            className="mt-0 bg-slate-900/50 border border-cyan-500/30 focus:border-cyan-500 text-white placeholder:text-slate-500"
            placeholder="email@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-cyan-400 mb-2">Telefon *</label>
          <Input
            {...register("phone")}
            className="mt-0 bg-slate-900/50 border border-cyan-500/30 focus:border-cyan-500 text-white placeholder:text-slate-500"
            placeholder="+90 555 000 00 00"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-cyan-400 mb-2">Şirket</label>
          <Input
            {...register("company")}
            className="mt-0 bg-slate-900/50 border border-cyan-500/30 focus:border-cyan-500 text-white placeholder:text-slate-500"
            placeholder="Şirket Adı (Opsiyonel)"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-cyan-400 mb-2">Konu *</label>
        <Input
          {...register("subject")}
          className="mt-0 bg-slate-900/50 border border-cyan-500/30 focus:border-cyan-500 text-white placeholder:text-slate-500"
          placeholder="Konuyu belirtin"
        />
        {errors.subject && <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-cyan-400 mb-2">Mesaj *</label>
        <Textarea
          {...register("message")}
          className="mt-0 bg-slate-900/50 border border-cyan-500/30 focus:border-cyan-500 text-white placeholder:text-slate-500"
          placeholder="Detaylı mesajınızı yazın"
          rows={6}
        />
        {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>}
      </div>

      {submitStatus === "success" && (
        <div className="rounded-lg bg-green-50 p-4 text-sm text-green-800">
          ✓ Mesajınız başarıyla gönderildi. En kısa zamanda sizinle iletişime geçeceğiz.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="rounded-lg bg-red-50 p-4 text-sm text-red-800">
          ✗ Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.
        </div>
      )}

      <Button type="submit" disabled={isSubmitting} size="lg" className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-slate-950 font-semibold">
        {isSubmitting ? "Gönderiliyor..." : "Mesajı Gönder"}
      </Button>
    </form>
  );
}
