"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { motion } from "framer-motion";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
export function AnimatedModal() {
  const [formData, setFormData] = useState({ ism: "", telefon: "" });
  const [errors, setErrors] = useState({ ism: "", telefon: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ism: "", telefon: "" };

    if (!formData.ism.trim()) {
      newErrors.ism = "Ism majburiy";
      valid = false;
    }

    if (!/^\d{9,}$/.test(formData.telefon)) {
      newErrors.telefon =
        "Faqat raqamlardan iborat bo‘lishi va uzunligi kamida 9 ta bo‘lishi kerak";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const { isPending, mutate, isError, isSuccess } = useMutation({
    mutationFn: async (data: { ism: string; telefon: string }) => {
      const res = await axios.post("http://localhost:3001/users", data);
      return res.data;
    },
    onSuccess: (data) => {
      console.log("Yuborildi:", data);
      setFormData({ ism: "", telefon: "" });
    },
    onError: (error) => {
      console.error("Xatolik:", error);
    },
  });

  const handleSubmit = () => {
    if (validateForm()) {
      mutate(formData);
    }
  };

  return (
    <Modal>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2, delay: 2.1 }}
        className="text-white text-center font-semibold sm:w-auto w-full sm:py-[1vw] sm:px-[6vw] py-[5vw] z-50 relative sm:mt-0 hover:opacity-90 transition sm:text-[2vw] text-[6vw] rounded-[100px]"
        style={{
          background:
            "linear-gradient(90deg, #027D1D 0%, #31BA4F 48.08%, #007B1B 100%)",
        }}
      >
        <ModalTrigger>
          <span className="text-white">RO‘YXATDAN O‘TISH</span>
        </ModalTrigger>
      </motion.div>
      <ModalBody className="rounded-lg">
        <ModalContent>
          <div>
            <Label>Ism</Label>
            <Input
              name="ism"
              placeholder="Ismingizni kiriting"
              value={formData.ism}
              onChange={handleChange}
            />
            {errors.ism && (
              <p className="text-red-500 text-sm mt-1">{errors.ism}</p>
            )}
          </div>
          <div className="mt-4">
            <Label>Telefon Raqam</Label>
            <Input
              name="telefon"
              placeholder="Telefon raqamingizni kiriting"
              value={formData.telefon}
              onChange={handleChange}
            />
            {errors.telefon && (
              <p className="text-red-500 text-sm mt-1">{errors.telefon}</p>
            )}
          </div>
        </ModalContent>
        <ModalFooter className="gap-4">
          <button
            onClick={handleSubmit}
            disabled={isPending}
            className="text-white font-semibold w-full py-[15px] rounded-[100px] disabled:opacity-50"
            style={{
              background:
                "linear-gradient(90deg, #027D1D 0%, #31BA4F 48.08%, #007B1B 100%)",
            }}
          >
            {isPending ? "Yuborilmoqda..." : "RO‘YXATDAN O‘TISH"}
          </button>
          {isError && (
            <p className="text-red-500 text-sm">Xatolik yuz berdi.</p>
          )}
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
}
