"use client";

import { sendEmail } from "@/service/email";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Banner, { BannerData } from "./Banner";

type Props = {};
type Form = {
  from: string;
  subject: string;
  message: string;
};

const DEFAULT_DATE = {
  from: "",
  subject: "",
  message: "",
};

const ContactForm = (props: Props) => {
  const [form, setForm] = useState<Form>(DEFAULT_DATE);
  const [banner, setBanner] = useState<BannerData | null>(null);
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 페이지가 다시 로딩되지 않도록 함
    console.log(form);
    sendEmail(form)
      .then(() => {
        setBanner({
          message: "메일을 성공적으로 보냈습니다.",
          state: "success",
        });
        setForm(DEFAULT_DATE);
      })
      .catch(() => {
        setBanner({
          message: "메일 전송에 실패했습니다. 다시 시도해 주세요.",
          state: "error",
        });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };
  return (
    <section className="w-full max-w-md">
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md flex flex-col gap-2 my-4 p-4 bg-slate-700 rounded-xl text-white"
      >
        <label htmlFor="from" className="font-semibold">
          your email
        </label>
        <input
          type="email"
          id="from"
          name="from"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
          className="text-black"
        ></input>
        <label htmlFor="subject" className="font-semibold">
          subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          autoFocus
          value={form.subject}
          onChange={onChange}
          className="text-black"
        ></input>
        <label htmlFor="message" className="font-semibold">
          message
        </label>
        <textarea
          rows={10}
          id="message"
          name="message"
          required
          autoFocus
          value={form.message}
          onChange={onChange}
          className="text-black"
        ></textarea>
        <button className="bg-yellow-300 text-black font-bold hover:bg-yellow-400">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
