import React, {FC} from "react";
import {LinkageProps} from "./Linkage.types";
import './Linkage.css'
import './Linkage.skin.css'
import './Linkage.size.css'
import classNames from "classnames";

const Linkage: FC<LinkageProps> = ({
  children,
  skin,
  size = 'md',
  theme,
  ...props
}) => {
  return (
    <a
      {...props}
      className={
        classNames('alamoma-linkage', size, skin, props.className)
      }
      data-theme={theme}
    >
      {children}
    </a>
  )
}

export default Linkage
