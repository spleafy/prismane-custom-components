import { Button, ButtonProps } from "@prismane/core";

interface StyledButtonProps extends ButtonProps {
  heavy?: boolean;
}

const StyledButton = ({ heavy, children, ...props }: StyledButtonProps) => {
  const fontWeight = heavy ? "bold" : "normal";

  return (
    <Button
      fw={fontWeight}
      variant="secondary"
      color="teal"
      br="full"
      {...props}
    >
      {children}
    </Button>
  );
};

export default StyledButton;

// import { Button, ButtonProps } from "@prismane/core";

// const StyledButton = ({ children, ...props }: ButtonProps) => {
//   return <Button {...props}>{children}</Button>;
// };

// export default StyledButton;

// import { Button, ButtonProps } from "@prismane/core";

// const StyledButton = ({ children, ...props }: ButtonProps) => {
//   return (
//     <Button variant="secondary" color="teal" br="full" {...props}>
//       {children}
//     </Button>
//   );
// };

// export default StyledButton;
