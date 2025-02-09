import { chakra, HTMLChakraProps } from "../system"
import { useAvatarStyles } from "./avatar-context"
import { AvatarOptions } from "./avatar-types"

export function initials(name: string) {
  const names = name.trim().split(" ")
  const firstName = names[0] ?? ""
  const lastName = names.length > 1 ? names[names.length - 1] : ""
  return firstName && lastName
    ? `${firstName.charAt(0)}${lastName.charAt(0)}`
    : firstName.charAt(0)
}

interface AvatarNameProps
  extends HTMLChakraProps<"div">,
    Pick<AvatarOptions, "name" | "getInitials"> {}
/**
 * The avatar name container
 */

export function AvatarName(props: AvatarNameProps) {
  const { name, getInitials, ...rest } = props
  const styles = useAvatarStyles()

  return (
    <chakra.div role="img" aria-label={name} {...rest} __css={styles.label}>
      {name ? getInitials?.(name) : null}
    </chakra.div>
  )
}

AvatarName.displayName = "AvatarName"
