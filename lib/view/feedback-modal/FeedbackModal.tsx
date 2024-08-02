import React, {FC} from "react"
import './FeedbackModal.css'
import {FeedbackModalProps} from "./FeedbackModal.types";
import {Button, Modal, TextInput} from "../../component";
import classNames from "classnames";

const ONE_STAR_SRC = 'https://inceptio-infra-cloudinfra.oss-cn-hangzhou.aliyuncs.com/fronto-static/emoji/tired-face.svg'
const TWO_STAR_SRC = 'https://inceptio-infra-cloudinfra.oss-cn-hangzhou.aliyuncs.com/fronto-static/emoji/disappointed-face.svg'
const THEE_STAR_SRC = 'https://inceptio-infra-cloudinfra.oss-cn-hangzhou.aliyuncs.com/fronto-static/emoji/Expressionless%20Face.png'
const FOUR_STAR_SRC = 'https://inceptio-infra-cloudinfra.oss-cn-hangzhou.aliyuncs.com/fronto-static/emoji/smiling-face-with-smiling-eyes.svg'
const FIVE_STAR_SRC = 'https://inceptio-infra-cloudinfra.oss-cn-hangzhou.aliyuncs.com/fronto-static/emoji/star-struck.svg'

const DISPLAY_TEXT = {
  zhCN: {
    feedback: '满意度调查',
    description: '我们诚挚地邀请您填写满意度问卷调查，请问产品给您带来的体验如何呢？',
    terrible: '十分糟糕',
    bad: '略显疲态',
    decent: '优缺参半',
    beautiful: '漂亮！',
    flawless: '完美无瑕',
    ratingReason: '请问您给出上面👆评分的原因是？',
    submit: '提交',
    cancel: '取消',
  },
  enUS: {
    feedback: 'Feedback',
    description: 'How is your think of the experience within our product',
    terrible: 'Terrible',
    bad: 'Bad',
    decent: 'Decent',
    beautiful: 'Beautiful',
    flawless: 'Flawless',
    ratingReason: 'What are the main reasons for your rating?',
    submit: 'Submit',
    cancel: 'Cancel',
  }
}

const STARS = [
  { label: 'terrible', src: ONE_STAR_SRC, rate: 1 },
  { label: 'bad', src: TWO_STAR_SRC, rate: 2 },
  { label: 'decent', src: THEE_STAR_SRC, rate: 3 },
  { label: 'beautiful', src: FOUR_STAR_SRC, rate: 4 },
  { label: 'flawless', src: FIVE_STAR_SRC, rate: 5 },
]

const FeedbackModal: FC<FeedbackModalProps> = ({
  open,
  setOpen,
  description,
  rate,
  setRate,
  reason,
  setReason,
  onSubmit,
  onCancel,
  className,
  style,
  locale = 'enUS',
}) => {

  return (
      <Modal
          open={open}
          setOpen={setOpen}
          width={520}
          clickOutsideToClose={false}
      >
        <div className="alamoma-feedback-modal" style={style}>
          <div className="title">{DISPLAY_TEXT[locale].feedback}</div>
          <div className="description">{description ?? DISPLAY_TEXT[locale].description}</div>
          <div className="rate-bar">
            {STARS.map((star, index) => {
              return (
                  <div key={index} className="rate-item">
                    <div
                        className={
                          classNames('star-container', {
                            active: rate === star.rate
                          })
                        }
                        onClick={() => setRate?.(star.rate)}
                    >
                      <img src={star.src} alt="star" style={{ height: 32, width: 32 }} />
                    </div>
                    <div
                        className={
                          classNames('star-text', {
                            active: rate === star.rate
                          })
                        }
                    >
                      {(DISPLAY_TEXT[locale] as any)[star.label]}
                    </div>
                  </div>
              )
            })}
          </div>

          <div style={{ margin: '0 64px 8px 64px', fontSize: 13 }}>
            {DISPLAY_TEXT[locale].ratingReason}
          </div>
          <div style={{ margin: '0 64px' }}>
            <TextInput value={reason} setValue={setReason} />
          </div>

          <div style={{ display: 'flex', gap: 12, margin: '24px 64px 32px 64px', justifyContent: 'center' }}>
            <Button skin="purple" size="lg" onClick={() => onSubmit?.()}>
              {DISPLAY_TEXT[locale].submit}
            </Button>
            <Button uiStyle="outlined" size="lg" onClick={() => onCancel ? onCancel() : setOpen(false)}>
              {DISPLAY_TEXT[locale].cancel}
            </Button>
          </div>
        </div>
      </Modal>
  )
}

export default FeedbackModal