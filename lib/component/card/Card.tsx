import React, {FC} from "react";
import {CardProps} from "./Card.types";
import './Card.css'
import classNames from "classnames";
const Card: FC<CardProps> = ({
    children,
    coverImage,
    title,
    subTitle,
    header,
    footer
}) => {
  return (
      <div className="alamoma-card">
        {header}
        {coverImage && (
            <div
                className={
                  classNames('cover-image-container', {
                    border: coverImage.border,
                  })
                }
                style={{
                  borderRadius: coverImage.borderRadius
                }}
            >
              <img
                  className={
                    classNames('cover-image', {
                      'hover-zoom-in': coverImage.hoverEffect === 'zoom-in',
                      'hover-zoom-out': coverImage.hoverEffect === 'zoom-out',
                    })
                  }
                  style={{
                    ...coverImage.width !== undefined && { width: `${coverImage.width}px` },
                    ...coverImage.height !== undefined && { height: `${coverImage.height}px` }
                  }}
                  src={coverImage.src}
                  onClick={coverImage.onClick}
                  alt="Cover image"
              />
            </div>
        )}
        {children}
        <div style={{ padding: '8px 0' }}>
          {(title && title.length) && <div className="title">{title}</div>}
          {(subTitle && subTitle.length) && <div className="sub-title">{subTitle}</div>}
        </div>
        {footer}
      </div>
  )
}

export default Card
