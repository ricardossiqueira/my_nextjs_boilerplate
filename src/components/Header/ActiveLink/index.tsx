import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface IActiveLinkProps extends LinkProps {
  shouldMatchExactHref?: boolean;
  children: ReactNode;
}

function ActiveLink({ shouldMatchExactHref = false, children, ...props }: IActiveLinkProps) {

  const { asPath } = useRouter()

  let isActive = false;

  if (shouldMatchExactHref && (asPath === props.href || asPath === props.href))
    isActive = true;

  if (!shouldMatchExactHref && (asPath.startsWith(String(props.href)) || asPath.startsWith(String(props.as))))
    isActive = true;

  console.log(isActive)

  return (
    <>
      <Link
        {...props}
      >
        <a
          className={`${isActive ? "text-pink-500" : "text-gray-600 dark:text:gray-300"} font-medium cursor-pointer`}
        >
          {children}
        </a>
      </Link>
    </>
  )
}

export { ActiveLink, type IActiveLinkProps };