import classNames from 'classnames'

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto prose">
      <div
        className={classNames(
          "prose"
        )}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
