import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface Validation {
  pattern: RegExp;
  message: string;
}

interface MaskedTextFieldProps {
  name: string;
  label: string;
  initialValue?: string;
  hasHiddenButton?: boolean;
  placeholder?: string;
  value: string;
  setValue: (e: string) => void;
  validation?: Validation;
}

const MaskedTextField: React.FC<MaskedTextFieldProps> = ({
  name,
  label,
  value,
  setValue,
  hasHiddenButton = false,
  placeholder = '',
  validation,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);

    if (validation && !validation.pattern.test(newValue)) {
      setError(validation.message);
    } else {
      setError(null);
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TextField
      name={name}
      label={label}
      type={name === 'password' ? (showPassword ? 'text' : 'password') : 'text'}
      placeholder={placeholder}
      variant="standard"
      style={{ width: 320 }}
      InputProps={{
        endAdornment: hasHiddenButton && (
          <InputAdornment position="end">
            <IconButton onClick={handleTogglePasswordVisibility}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      value={value}
      onChange={handleChange}
      error={!!error}
      helperText={error}
    />
  );
};

export default MaskedTextField;
