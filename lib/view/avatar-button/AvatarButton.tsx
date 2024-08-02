import React, {FC} from "react";
import {AvatarButtonProps} from "./AvatarButton.types";
import './AvatarButton.css'
import {ArrowDropDownIcon} from "../../icon";
import classNames from "classnames";

const AvatarButton: FC<AvatarButtonProps> = ({
  children,
  avatar,
  avatarLetter,
  onClick,
  showMore = false,
  style,
  className,
  theme,
}) => {

  return (
    <div
      className={classNames('alamoma-avatar-button', className)}
      style={style}
      onClick={onClick}
      data-theme={theme}
    >
      <div className="wrapper">
        {avatar ? (
          <>{avatar}</>
        ) : (
          <>{avatarLetter && <div className="avatar-letter">{avatarLetter}</div>}</>
        )}
        <div className="username">{children}</div>
      </div>
      {showMore && (
        <div className="more">
          <ArrowDropDownIcon />
        </div>
      )}
    </div>
  )
}

export default AvatarButton
