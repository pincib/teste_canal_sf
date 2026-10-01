/**
 * Brazilian Phone Formatting and Validation Utilities
 */

export function formatBrazilianPhone(value: string): string {
  // Keep only digits, up to 11 characters
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (!digits) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    // Landline: (XX) XXXX-XXXX
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  // Mobile: (XX) XXXXX-XXXX
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}

export function isValidBrazilianPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 11) return false;

  // Validate DDD between 11 and 99
  const ddd = parseInt(digits.slice(0, 2), 10);
  if (isNaN(ddd) || ddd < 11 || ddd > 99) return false;

  // Check mobile 9th digit if 11 digits
  if (digits.length === 11 && digits[2] !== "9") {
    return false;
  }

  return true;
}
