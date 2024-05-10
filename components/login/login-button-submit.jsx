"use client";

import { useFormStatus } from "react-dom";
export default function LoginFormSubmit() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Login"}
    </button>
  );
}
