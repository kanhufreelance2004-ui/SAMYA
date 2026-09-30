import { useState, useCallback } from "react";

interface FormValues {
  name: string;
  email: string;
  service: string;
  duration: string;
  requirements: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  duration?: string;
  message?: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  service: "",
  duration: "",
  requirements: "",
  message: "",
};

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function useFormValidation() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());
  const [submitted, setSubmitted] = useState(false);

  const validate = useCallback(
    (vals: FormValues): FormErrors => {
      const errs: FormErrors = {};
      if (!vals.name.trim()) errs.name = "Name is required.";
      if (!vals.email.trim()) {
        errs.email = "Email is required.";
      } else if (!validateEmail(vals.email)) {
        errs.email = "Please enter a valid email address.";
      }
      if (!vals.service) errs.service = "Please select a service.";
      if (!vals.duration.trim())
        errs.duration = "Please provide the audio/video duration.";
      if (!vals.message.trim()) {
        errs.message = "Message is required.";
      } else if (vals.message.trim().length < 10) {
        errs.message = "Message must be at least 10 characters.";
      }
      return errs;
    },
    []
  );

  const handleChange = useCallback(
    (field: keyof FormValues, value: string) => {
      setValues((prev) => {
        const next = { ...prev, [field]: value };
        if (touched.has(field)) {
          setErrors((prevErrors) => {
            const newErrors = validate(next);
            return { ...prevErrors, [field]: newErrors[field as keyof FormErrors] };
          });
        }
        return next;
      });
    },
    [touched, validate]
  );

  const handleBlur = useCallback(
    (field: keyof FormValues) => {
      setTouched((prev) => new Set(prev).add(field));
      setErrors((prev) => {
        const newErrors = validate(values);
        return { ...prev, [field]: newErrors[field as keyof FormErrors] };
      });
    },
    [values, validate]
  );

  const handleSubmit = useCallback((): boolean => {
    const allTouched = new Set(Object.keys(values));
    setTouched(allTouched);
    const newErrors = validate(values);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      // TODO: connect to email service or form handler
      console.log("Form submitted:", values);
      setValues(initialValues);
      setTouched(new Set());
      return true;
    }
    return false;
  }, [values, validate]);

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched(new Set());
    setSubmitted(false);
  }, []);

  const setServiceValue = useCallback((service: string) => {
    setValues((prev) => ({ ...prev, service }));
  }, []);

  return {
    values,
    errors,
    touched,
    submitted,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setServiceValue,
  };
}
