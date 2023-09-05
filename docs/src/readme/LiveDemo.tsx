import { H1, Link, Image, List } from 'jsx-to-md'
import { githubKey } from '../constants'

export default function LiveDemo() {
  const localeSuffixMap = {
    zh: 'zh-CN',
    en: '',
  }

  const suffix = localeSuffixMap[global.docLocale]

  const filename = `README${suffix ? `_${suffix}` : ''}.md`
  return (
    <>
      <H1>Live Demo</H1>
      <List
        items={[
          'U',
          [
            'with$ = true',
            [
              'U',
              <Link
                href={`https://codesandbox.io/p/github/${githubKey}-demo/main?file=${filename}`}
              >
                Open in CodeSandbox
              </Link>,
              <Link
                href={`https://stackblitz.com/github/${githubKey}-demo/#main?file=${filename}`}
              >
                <Image
                  alt="Open in StackBlitz"
                  title="Open in StackBlitz"
                  src="https://developer.stackblitz.com/img/open_in_stackblitz_small.svg"
                />
              </Link>,
            ],
          ],
          [
            'with$ = false',
            [
              'U',
              <Link
                href={`https://codesandbox.io/p/github/${githubKey}-demo/simple?file=${filename}`}
              >
                Open in CodeSandbox
              </Link>,
              <Link
                href={`https://stackblitz.com/github/${githubKey}-demo/tree/simple?file=${filename}`}
              >
                <Image
                  alt="Open in StackBlitz"
                  title="Open in StackBlitz"
                  src="https://developer.stackblitz.com/img/open_in_stackblitz_small.svg"
                />
              </Link>,
            ],
          ],
        ]}
      />
    </>
  )
}
