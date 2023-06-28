import React from "react";

const sizeClasses = {
  txtAeonikBold76: "font-aeonik font-bold",
  txtInterMedium18: "font-inter font-medium",
  txtAeonikBold4275: "font-aeonik font-bold",
  txtInterBold18: "font-bold font-inter",
  txtManropeRegular2324: "font-manrope font-normal",
  txtInterRegular633: "font-inter font-normal",
  txtAeonikRegular285: "font-aeonik font-normal",
  txtInterBold28: "font-bold font-inter",
  txtAeonikMedium19Gray90002: "font-aeonik font-medium",
  txtAeonikMedium19: "font-aeonik font-medium",
  txtAeonikBold285: "font-aeonik font-bold",
  txtMontserratRegular70: "font-montserrat font-normal",
  txtAeonikBold265: "font-aeonik font-bold",
  txtAeonikMedium17: "font-aeonik font-medium",
  txtInterMedium15297: "font-inter font-medium",
  txtAeonikRegular17: "font-aeonik font-normal",
  txtAeonikRegular19Gray90002: "font-aeonik font-normal",
  txtAeonikBold76Gray90002: "font-aeonik font-bold",
  txtAeonikRegular19: "font-aeonik font-normal",
  txtAeonikBold285Gray90002: "font-aeonik font-bold",
  txtInterRegular48: "font-inter font-normal",
  txtNotoSansRegular3853: "font-normal font-notosans",
  txtNotoSansRegular2535: "font-normal font-notosans",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
