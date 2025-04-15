export default function generatePassword(
  length,
  includeNumbers,
  includeChars,
  includeSpecial
) {
  let charset = "";
  if (includeNumbers) charset += "0123456789";
  if (includeChars)
    charset += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeSpecial) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?/";

  if (charset.length === 0) return "Please select at least one option";

  let newPassword = "";
  for (let i = 0; i < length; i++) {
    newPassword += charset[Math.floor(Math.random() * charset.length)];
  }

  return newPassword;
}
