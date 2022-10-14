import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputGroup,
  InputProps as ChakraInputProps,
  useColorModeValue,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import ReactInputMask from "react-input-mask";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  inputElement?: React.ReactNode;
  mask?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    name,
    placeholder,
    label,
    mask,
    inputElement = null,
    error = null,
    ...rest
  },
  ref
) => {
  const borderColor = useColorModeValue("blackAlpha.500", "whiteAlpha.500");
  const focusBorderColor = useColorModeValue(
    "accent.light.500",
    "accent.dark.500"
  );
  const hoverBg = useColorModeValue("blackAlpha.50", "whiteAlpha.50");
  const placehoderColor = useColorModeValue("gray.300", "gray.600");

  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <InputGroup>
        <ChakraInput
          name={name}
          id={name}
          as={mask && ReactInputMask}
          mask={mask}
          placeholder={placeholder}
          _placeholder={{ color: placehoderColor, fontSize: "md" }}
          focusBorderColor={focusBorderColor}
          variant="outline"
          borderColor={borderColor}
          borderWidth={"1px"}
          _hover={{ bg: hoverBg }}
          backgroundColor={"transparent"}
          size="lg"
          ref={ref}
          {...rest}
        />
        {inputElement}
      </InputGroup>
      {!!error && (
        <FormErrorMessage>{error.message.toString()}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export type { InputProps };
export const Input = forwardRef(InputBase);
