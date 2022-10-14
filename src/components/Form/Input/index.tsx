import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputGroup,
  InputProps as ChakraInputProps,
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
          _placeholder={{ color: "gray.400", fontSize: "md" }}
          focusBorderColor="purple.500"
          bg="whiteAlpha.900"
          variant="outline"
          borderColor="blackAlpha.500"
          borderWidth={"1px"}
          _hover={{ bg: "whiteAlpha.400" }}
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
